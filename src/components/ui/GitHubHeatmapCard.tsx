'use client';

import React, { useEffect, useState } from 'react';
import { 
  GitCommit, 
  Star, 
  Trophy, 
  Zap, 
  TrendingUp, 
  Calendar as CalendarIcon 
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export interface GitHubSummary {
  total: number;
  last7DaysTotal: number;
  best: number;
  average: number;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

// 1. Data Fetching API Hook (useGitHubData)
export function useGitHubData(username: string) {
  const targetUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || username || "webdeveloperdesigner";
  const [summary, setSummary] = useState<GitHubSummary | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      try {
        let rawContribs: any[] = [];
        let totalCount = 0;

        // Fetch from server API route (/api/stats)
        try {
          const res = await fetch(`/api/stats?t=${Date.now()}`);
          if (res.ok) {
            const data = await res.json();
            if (data.contributionDays && data.contributionDays.length > 0) {
              rawContribs = data.contributionDays;
              totalCount = data.summary?.total || 0;
            }
          }
        } catch (e) {
          console.error('Error fetching server stats API:', e);
        }

        // Secondary fallback to jogruber API if server API empty
        if (rawContribs.length === 0) {
          try {
            const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${targetUsername}?t=${Date.now()}`);
            if (res.ok) {
              const data = await res.json();
              if (data && data.contributions) {
                rawContribs = Array.isArray(data.contributions[0]) ? data.contributions.flat() : data.contributions;
                totalCount = typeof data.total === 'number' ? data.total : 0;
              }
            }
          } catch (e) {
            console.error('Error fetching jogruber API:', e);
          }
        }

        // Process raw contribution entries
        const parsedContribs: ContributionDay[] = rawContribs.map((c: any) => {
          const count = c.count ?? c.intensity ?? 0;
          let level = 0;
          if (count >= 10) level = 4;
          else if (count >= 7) level = 3;
          else if (count >= 4) level = 2;
          else if (count >= 1) level = 1;

          return {
            date: c.date || c.day || '',
            count,
            level
          };
        });

        // Filter & sort contribution entries to strictly encompass current 365-day rolling window
        const validContribs = parsedContribs
          .filter(c => c.date && !isNaN(new Date(c.date).getTime()))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        const currentYearContribs = validContribs.length > 0 ? validContribs.slice(-365) : [];

        if (isMounted && currentYearContribs.length > 0) {
          setContributions(currentYearContribs);

          // Accurate Calculations Logic for Current Year (Consistent 365 / length divisor)
          const total = totalCount > 0 ? totalCount : currentYearContribs.reduce((acc, curr) => acc + curr.count, 0);
          
          const today = new Date();
          const last7DaysDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          const last7DaysData = currentYearContribs.filter(c => new Date(c.date) >= last7DaysDate);
          const last7DaysTotal = last7DaysData.reduce((acc, curr) => acc + curr.count, 0);
          
          const best = Math.max(...currentYearContribs.map(c => c.count));
          const average = parseFloat((total / currentYearContribs.length).toFixed(1));

          setSummary({ total, last7DaysTotal, best: best < 0 ? 0 : best, average });
        }
      } catch (err) {
        console.error('Error in useGitHubData:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGitHubData();
    const intervalId = setInterval(fetchGitHubData, 60000); // 60s auto-refresh interval

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [username]);

  return { summary, contributions, loading };
}

// 2. Component Rendering
export function GitHubHeatmapCard({ username = "webdeveloperdesigner" }: { username?: string }) {
  const { summary, contributions, loading } = useGitHubData(username);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  // Group 364 days into 52 weeks x 7 days
  const displayContribs = contributions.length > 0 ? contributions.slice(-364) : [];
  const weeks: Array<ContributionDay[]> = [];

  for (let i = 0; i < displayContribs.length; i += 7) {
    weeks.push(displayContribs.slice(i, i + 7));
  }

  // Dynamic month header labels matching GitHub month transition rules
  const weekMonthHeaders: (string | null)[] = weeks.map((week, wIdx) => {
    if (!week || week.length === 0) return null;
    const dateObj = new Date(week[0].date);
    const monthName = dateObj.toLocaleString('en-US', { month: 'short' });

    if (wIdx === 0) return monthName;

    const prevDateObj = new Date(weeks[wIdx - 1][0].date);
    const prevMonthName = prevDateObj.toLocaleString('en-US', { month: 'short' });

    if (monthName !== prevMonthName) {
      return monthName;
    }
    return null;
  });

  return (
    <div className="relative w-full flex flex-col justify-center bg-[#0d1117] border border-[#30363d] rounded-3xl p-6 sm:p-8 overflow-hidden group shadow-2xl text-white">
      
      {/* Watermark Logo */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none text-white">
        <GithubIcon className="w-64 h-64 rotate-12" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-emerald-400">
            <GitCommit className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block">
              ANNUAL PULSE
            </span>
            <span className="text-sm font-semibold text-zinc-200">
              {loading ? 'Loading contributions...' : `${summary?.total ?? 0} contributions in the last year`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#161b22] rounded-full border border-[#30363d] text-xs font-mono text-zinc-300 shadow-sm">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>@{username}</span>
        </div>
      </div>

      {/* Main Heatmap Calendar */}
      <div className="relative z-10 w-full flex flex-col gap-6 items-start">
        <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-2xl p-5 overflow-hidden">
          
          <div className="overflow-x-auto pb-2 w-full select-none">
            <div className="flex flex-col gap-3 min-w-[780px]">
              
              {/* Grid Stage matching calendar columns exactly */}
              <div className="flex items-center gap-3">
                {/* Spacer for Day Labels column */}
                <div className="w-7 shrink-0" />

                {/* 52-Week Month Headers Row */}
                <div className="flex-1 flex gap-1.5 justify-between font-mono text-[11px] text-zinc-400 font-medium select-none h-4">
                  {weeks.map((_, wIdx) => (
                    <div key={wIdx} className="w-3.5 sm:w-4 relative">
                      {weekMonthHeaders[wIdx] && (
                        <span className="absolute left-0 -top-1 whitespace-nowrap text-zinc-300 font-bold">
                          {weekMonthHeaders[wIdx]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid Stage with Day Labels on Left */}
              <div className="flex items-center gap-3">
                {/* Day Labels (Mon, Wed, Fri) - Fixed w-7 width to prevent clipping */}
                <div className="w-7 shrink-0 flex flex-col justify-between h-[115px] font-mono text-[10px] text-zinc-400 font-medium py-1 select-none text-left">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* 52-Week Heatmap Columns */}
                <div className="flex-1 flex gap-1.5 justify-between">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((day, dIdx) => {
                        // Official Color Level Mapping:
                        // 0: #161b22, 1-3: #0e4429, 4-6: #006d32, 7-9: #26a641, 10+: #39d353
                        const colorClass = 
                          day.level === 4 ? 'bg-[#39d353] shadow-[0_0_8px_rgba(57,211,83,0.8)]' :
                          day.level === 3 ? 'bg-[#26a641]' :
                          day.level === 2 ? 'bg-[#006d32]' :
                          day.level === 1 ? 'bg-[#0e4429]' :
                          'bg-[#161b22] border border-[#21262d]';

                        return (
                          <div
                            key={dIdx}
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setTooltip({
                                text: `${day.count > 0 ? `${day.count} contributions` : 'No contributions'} on ${day.date}`,
                                x: rect.left + rect.width / 2,
                                y: rect.top - 38
                              });
                            }}
                            onMouseLeave={() => setTooltip(null)}
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] transition-all hover:scale-125 hover:z-20 cursor-pointer ${colorClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between w-full px-2 pt-4 text-xs font-mono text-zinc-400 border-t border-[#21262d] mt-3">
            <span className="text-[11px]">Learn how we count contributions</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] mr-1">Less</span>
              <span className="w-3 h-3 rounded-[2px] bg-[#161b22] border border-[#30363d]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#0e4429]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#006d32]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#26a641]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#39d353]" />
              <span className="text-[11px] ml-1">More</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {tooltip && (
        <div
          style={{ left: tooltip.x, top: tooltip.y }}
          className="fixed -translate-x-1/2 z-50 px-3 py-1.5 bg-[#161b22] border border-[#30363d] text-white font-mono text-[11px] rounded-lg shadow-2xl pointer-events-none whitespace-nowrap"
        >
          {tooltip.text}
        </div>
      )}

      {/* Stats Metrics Footer Deck (4 Bento Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 relative z-10">
        <StatMetric label="Year Total" value={loading ? '...' : `${summary?.total ?? 0}`} icon={TrendingUp} color="text-emerald-400" />
        <StatMetric label="Last 7 Days" value={loading ? '...' : `${summary?.last7DaysTotal ?? 0}`} icon={Zap} color="text-blue-400" />
        <StatMetric label="Peak Day" value={loading ? '...' : `${summary?.best ?? 0}`} icon={Trophy} color="text-amber-400" />
        <StatMetric label="Daily Avg" value={loading ? '...' : `${summary?.average ?? 0}`} icon={CalendarIcon} color="text-purple-400" />
      </div>

    </div>
  );
}

function StatMetric({ label, value, icon: Icon, color }: { label: string; value: string; icon: any; color: string }) {
  return (
    <div className="p-4 bg-[#161b22] border border-[#30363d] rounded-2xl flex flex-col justify-between shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">{label}</span>
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <span className="text-xl font-bold font-mono tracking-tight text-white">{value}</span>
    </div>
  );
}
