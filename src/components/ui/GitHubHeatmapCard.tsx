'use client';

import React, { useEffect, useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  Calendar as CalendarIcon, 
  Zap, 
  Clock, 
  Search, 
  Cpu, 
  Activity,
  RefreshCw
} from 'lucide-react';

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface TelemetryData {
  username: string;
  github: {
    contributionDays: ContributionDay[];
    total: number;
    last7DaysTotal: number;
    best: number;
    average: number;
    yearRange: string;
  };
  wakatime: {
    weeklyEffort: string;
    dailyAverage: string;
    totalCodingHours: number;
    languages: Array<{ name: string; percentage: number; color: string; barColor: string }>;
  };
}

export function GitHubHeatmapCard({ username = "webdeveloperdesigner" }: { username?: string }) {
  const [data, setData] = useState<TelemetryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [latencyMs, setLatencyMs] = useState(14);

  // 1. Session Timer (Starts at 00m 00s on mount, independent of API refresh)
  const [sessionSeconds, setSessionSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  // 2. Dynamic Session Token (Generates a new token on every page reload, stable during API re-fetches)
  const [sessionToken, setSessionToken] = useState("8F3A91C2");

  useEffect(() => {
    let token = "8F3A91C2";
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      token = crypto.randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase();
    } else {
      token = Math.random().toString(36).substring(2, 10).toUpperCase();
    }
    setSessionToken(token);
  }, []);

  // 3. Single-Source-Of-Truth Fetching Hook
  const fetchTelemetryData = async () => {
    const startTime = performance.now();
    try {
      setLoading(true);
      const res = await fetch(`/api/stats?t=${Date.now()}`);
      const endTime = performance.now();
      setLatencyMs(Math.round(endTime - startTime) || 14);

      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error('Error fetching telemetry from /api/stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTelemetryData();
    const intervalId = setInterval(fetchTelemetryData, 60000); // 60s background refresh
    return () => clearInterval(intervalId);
  }, [username]);

  // Heatmap matrix grouping (365 calendar days -> 52 weeks x 7 days)
  const contribDays = data?.github?.contributionDays || [];
  const displayContribs = contribDays.length > 0 ? contribDays.slice(-364) : [];
  const weeks: Array<ContributionDay[]> = [];

  for (let i = 0; i < displayContribs.length; i += 7) {
    weeks.push(displayContribs.slice(i, i + 7));
  }

  // Month Headers extracted based on actual calendar position of each week
  const weekMonthLabels: string[] = Array(weeks.length).fill('');
  let lastLabeledMonth = '';
  let lastLabeledWeekIndex = -10;

  weeks.forEach((week, wIdx) => {
    for (const day of week) {
      if (day.date) {
        const d = new Date(day.date);
        const mName = d.toLocaleDateString('en-US', { month: 'short' });
        
        if (mName !== lastLabeledMonth && wIdx - lastLabeledWeekIndex >= 2) {
          weekMonthLabels[wIdx] = mName;
          lastLabeledMonth = mName;
          lastLabeledWeekIndex = wIdx;
          break;
        }
      }
    }
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-[#0e4429] border-[#0e4429]';
      case 2: return 'bg-[#006d32] border-[#006d32]';
      case 3: return 'bg-[#26a641] border-[#26a641]';
      case 4: return 'bg-[#39d353] border-[#39d353]';
      default: return 'bg-[#161b22] border-[#21262d]';
    }
  };

  const formatDateString = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const totalPulse = data?.github?.total ?? 963;
  const peakActivity = data?.github?.best ?? 12;
  const dailyAverage = data?.github?.average ?? 2.6;
  const currentSprint = data?.github?.last7DaysTotal ?? 4;
  const yearRange = data?.github?.yearRange ?? "2025 - 2026";
  const languages = data?.wakatime?.languages ?? [
    { name: "TYPESCRIPT", percentage: 45.2, color: "bg-blue-500", barColor: "from-blue-500 to-cyan-400" },
    { name: "REACT / NEXT.JS", percentage: 26.8, color: "bg-purple-500", barColor: "from-purple-500 to-indigo-400" },
    { name: "PYTHON", percentage: 14.5, color: "bg-emerald-500", barColor: "from-emerald-500 to-teal-400" },
    { name: "TAILWIND CSS", percentage: 8.4, color: "bg-amber-500", barColor: "from-amber-500 to-orange-400" },
    { name: "GRAPHQL / NODE", percentage: 5.1, color: "bg-pink-500", barColor: "from-pink-500 to-rose-400" },
  ];

  return (
    <div className="w-full bg-[#050507] text-white selection:bg-emerald-500/30 selection:text-emerald-300 font-sans p-2 sm:p-4 rounded-3xl">
      
      {/* Top Header Title Bar */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="font-mono text-xs font-bold text-neutral-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYSTEM STATUS: ANALYTICS ACTIVE</span>
          </div>
          <h1 className="font-display font-extrabold italic text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
            TECHNICAL PORTFOLIO
          </h1>
        </div>

        <button 
          onClick={fetchTelemetryData} 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-mono text-emerald-400 hover:border-emerald-500/50 hover:bg-[#21262d] transition-all cursor-pointer shadow-sm self-start md:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>REFRESH TELEMETRY</span>
        </button>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (8 cols): ANNUAL PULSE + 2x2 Stats Grid */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* ANNUAL PULSE Heatmap Card */}
          <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            
            {/* Header of Heatmap */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161b22] border border-neutral-700/60 font-mono text-xs font-bold text-emerald-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>ANNUAL PULSE (ROLLING 365 DAYS: {yearRange})</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161b22] border border-neutral-700/60 font-mono text-xs font-semibold text-amber-400">
                <span>⭐ @{username}</span>
              </div>
            </div>

            {/* Heatmap Grid & Scroll Container */}
            <div className="bg-[#050608] border border-neutral-800/80 rounded-2xl p-4 sm:p-6 mb-6 overflow-x-auto relative">
              
              {/* Month Header Labels Aligned With Week Columns */}
              <div className="flex gap-1.5 min-w-[680px] h-6 mb-2 font-mono text-[11px] text-neutral-400 font-bold items-end">
                {weeks.map((_, wIdx) => {
                  const label = weekMonthLabels[wIdx];
                  return (
                    <div key={wIdx} className="w-3.5 sm:w-4 h-full relative overflow-visible shrink-0 text-left">
                      {label && (
                        <span className="absolute left-0 bottom-1 whitespace-nowrap text-neutral-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                          {label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 52-Week Grid Matrix */}
              <div className="flex gap-1.5 min-w-[680px]">
                {loading && weeks.length === 0 ? (
                  <div className="h-32 w-full flex items-center justify-center font-mono text-xs text-neutral-500 animate-pulse">
                    LOADING GITHUB TELEMETRY DATA...
                  </div>
                ) : (
                  weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((day, dIdx) => (
                        <div
                          key={`${day.date}-${dIdx}`}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setTooltip({
                              text: `${day.count} contributions on ${formatDateString(day.date)}`,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 36
                            });
                          }}
                          onMouseLeave={() => setTooltip(null)}
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] border transition-all duration-200 hover:scale-125 hover:z-20 cursor-pointer ${getCellColor(day.level)}`}
                        />
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Footer of Heatmap Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-400 pt-2 border-t border-neutral-800/60">
              <span className="font-bold tracking-widest uppercase">
                DATA SOURCE: GITHUB @{username.toUpperCase()}
              </span>

              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#161b22] border border-[#21262d]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0e4429]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#006d32]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#26a641]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#39d353]" />
              </div>
            </div>
          </div>

          {/* 2x2 Bento Grid Underneath ANNUAL PULSE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: DAILY AVERAGE */}
            <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                <CalendarIcon className="w-4 h-4 text-purple-400" />
                <span>DAILY AVERAGE</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                  {dailyAverage}
                </span>
                <span className="font-mono text-xs text-neutral-400 font-bold">/d</span>
              </div>
            </div>

            {/* Card 2: CURRENT SPRINT */}
            <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>CURRENT SPRINT</span>
              </div>
              <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                {currentSprint}
              </span>
            </div>

            {/* Card 3: ENGAGE FLOW (Highlighted Blue Border) */}
            <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/20 via-[#0a0c10] to-[#0a0c10] p-6 shadow-[0_0_30px_rgba(59,130,246,0.12)] relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>ENGAGE FLOW</span>
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-blue-400 tracking-tight block mb-2">
                {data?.wakatime?.weeklyEffort || '7h 51m'}
              </span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase font-bold tracking-widest">
                WEEKLY CODING EFFORT
              </span>
            </div>

            {/* Card 4: PROCESS SPEED */}
            <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>PROCESS SPEED</span>
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight block mb-2">
                1h 34m
              </span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase font-bold tracking-widest">
                AVERAGE PERFORMANCE
              </span>
            </div>

          </div>
        </div>

        {/* Right Column (4 cols): TOTAL PULSE, PEAK ACTIVITY & TECH STACK IQ */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Top 2 Stat Cards Side-By-Side */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* TOTAL PULSE */}
            <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                <Trophy className="w-4 h-4 text-emerald-400" />
                <span>TOTAL PULSE</span>
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {totalPulse}
              </span>
            </div>

            {/* PEAK ACTIVITY */}
            <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>PEAK ACTIVITY</span>
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {peakActivity}
              </span>
            </div>

          </div>

          {/* TECH STACK IQ Tall Card */}
          <div className="rounded-3xl border border-neutral-800/80 bg-[#0a0c10] p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-8">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>TECH STACK IQ</span>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] font-extrabold uppercase tracking-widest">
                  LIVE_METRICS
                </span>
              </div>

              {/* Language Breakdown Bars */}
              <div className="space-y-6">
                {languages.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="flex items-center gap-2 font-bold text-white tracking-wider">
                        <span className={`w-2 h-2 rounded-full ${item.color || 'bg-blue-500'}`} />
                        {item.name}
                      </span>
                      <span className="text-neutral-400 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#161b22] border border-[#21262d] overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${item.color || 'bg-blue-500'} transition-all duration-1000`} 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Subtext */}
            <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest pt-8 border-t border-neutral-800/60 flex items-center gap-2">
              <span>&gt; INTELLIGENCE ENGINE V2</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Telemetry Pill Bar */}
      <div className="mt-8 rounded-full border border-neutral-800 bg-[#0a0c10] px-6 py-3.5 font-mono text-xs text-neutral-400 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="text-emerald-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            ● LATENCY: {latencyMs}MS
          </span>
          <span className="hidden md:inline text-neutral-700">│</span>
          <span className="hidden md:inline">SYSTEM: WEB_RUNTIME</span>
          <span className="hidden lg:inline text-neutral-700">│</span>
          <span className="hidden lg:inline text-cyan-400">SESSION TIME: {formatSessionTime(sessionSeconds)}</span>
          <span className="hidden lg:inline text-neutral-700">│</span>
          <span className="hidden lg:inline text-purple-400">SESSION TOKEN: {sessionToken}</span>
        </div>

        <div className="flex items-center gap-2 text-white font-bold">
          <Search className="w-3.5 h-3.5 text-neutral-400" />
          <span className="uppercase tracking-widest">[SCANNING_LIVE_RESOURCES]</span>
        </div>
      </div>

      {/* Custom Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 transform -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[#161b22] border border-neutral-700 text-white font-mono text-xs shadow-2xl pointer-events-none"
          style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
        >
          {tooltip.text}
        </div>
      )}

    </div>
  );
}
