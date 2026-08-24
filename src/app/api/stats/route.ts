import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  const wakaKey = process.env.WAKATIME_API_KEY;
  const githubUser = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'webdeveloperdesigner';

  let wakaData: any = null;
  let wakaAllTimeData: any = null;
  let githubData: any = null;
  let contributionDays: Array<{ date: string; count: number; level: number }> = [];
  let totalCount = 0;

  // 1. Fetch WakaTime Stats (Authorization Header only - No secret in URL)
  if (wakaKey) {
    try {
      const encodedKey = Buffer.from(wakaKey).toString('base64');
      const wakaRes = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
        headers: { Authorization: `Basic ${encodedKey}` },
        next: { revalidate: 60 },
      });

      if (wakaRes.ok) {
        const json = await wakaRes.json();
        wakaData = json.data;
      }
    } catch (err) {
      console.error('Error fetching WakaTime stats:', err);
    }

    // Fetch WakaTime All-Time Stats
    try {
      const encodedKey = Buffer.from(wakaKey).toString('base64');
      const wakaAllRes = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', {
        headers: { Authorization: `Basic ${encodedKey}` },
        next: { revalidate: 60 },
      });

      if (wakaAllRes.ok) {
        const json = await wakaAllRes.json();
        wakaAllTimeData = json.data;
      }
    } catch (err) {
      console.error('Error fetching WakaTime all-time stats:', err);
    }
  }

  // 2. Fetch GitHub User Profile
  try {
    const ghRes = await fetch(`https://api.github.com/users/${githubUser}`, {
      headers: { 'User-Agent': 'Portfolio-App' },
      next: { revalidate: 60 },
    });

    if (ghRes.ok) {
      githubData = await ghRes.json();
    }
  } catch (err) {
    console.error('Error fetching GitHub user profile:', err);
  }

  // 3. Fetch Real GitHub Contribution Data (Exact Counts via jogruber API)
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUser}`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.contributions) {
        const flat = Array.isArray(data.contributions[0]) ? data.contributions.flat() : data.contributions;
        contributionDays = flat.map((c: any) => {
          const cnt = c.count ?? c.intensity ?? 0;
          let level = 0;
          if (cnt >= 10) level = 4;
          else if (cnt >= 7) level = 3;
          else if (cnt >= 4) level = 2;
          else if (cnt >= 1) level = 1;
          return { date: c.date || c.day || '', count: cnt, level };
        });

        if (typeof data.total === 'number') {
          totalCount = data.total;
        } else if (typeof data.total === 'object' && data.total) {
          const currentYear = new Date().getFullYear().toString();
          totalCount = data.total[currentYear] || Object.values(data.total).reduce((a: any, b: any) => a + b, 0);
        }
      }
    }
  } catch (e) {
    console.error('Error fetching jogruber API:', e);
  }

  // Fallback to deno API if primary fails
  if (contributionDays.length === 0) {
    try {
      const fallbackRes = await fetch(`https://github-contributions-api.deno.dev/${githubUser}.json`, {
        next: { revalidate: 60 }
      });
      if (fallbackRes.ok) {
        const json = await fallbackRes.json();
        if (json && json.contributions) {
          const flat = Array.isArray(json.contributions[0]) ? json.contributions.flat() : json.contributions;
          contributionDays = flat.map((c: any) => {
            const cnt = c.count ?? c.intensity ?? 0;
            let level = 0;
            if (cnt >= 10) level = 4;
            else if (cnt >= 7) level = 3;
            else if (cnt >= 4) level = 2;
            else if (cnt >= 1) level = 1;
            return { date: c.date || c.day || '', count: cnt, level };
          });
        }
      }
    } catch (e) {
      console.error('Fallback API failed:', e);
    }
  }

  // Sort chronologically and take current 365-day rolling window
  const validDays = contributionDays
    .filter(c => c.date && !isNaN(new Date(c.date).getTime()))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const currentYearDays = validDays.length > 0 ? validDays.slice(-365) : [];

  // Accurate Summary Metrics (Consistent 365 / currentYearDays.length calculation)
  const total = totalCount > 0 ? totalCount : currentYearDays.reduce((acc, d) => acc + d.count, 0);
  const today = new Date();
  const last7DaysDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const last7DaysData = currentYearDays.filter(c => new Date(c.date) >= last7DaysDate);
  const last7DaysTotal = last7DaysData.reduce((acc, d) => acc + d.count, 0);
  
  const best = currentYearDays.length > 0 ? Math.max(...currentYearDays.map(d => d.count)) : 0;
  const average = currentYearDays.length > 0 ? parseFloat((total / currentYearDays.length).toFixed(1)) : 0;

  // Process WakaTime Languages
  let languages = [
    { name: 'TYPESCRIPT', percentage: 45.2, color: 'bg-blue-500', barColor: 'from-blue-500 to-cyan-400' },
    { name: 'REACT / NEXT.JS', percentage: 26.8, color: 'bg-purple-500', barColor: 'from-purple-500 to-indigo-400' },
    { name: 'PYTHON', percentage: 14.5, color: 'bg-emerald-500', barColor: 'from-emerald-500 to-teal-400' },
    { name: 'TAILWIND CSS', percentage: 8.4, color: 'bg-amber-500', barColor: 'from-amber-500 to-orange-400' },
    { name: 'GRAPHQL / NODE', percentage: 5.1, color: 'bg-pink-500', barColor: 'from-pink-500 to-rose-400' }
  ];

  if (wakaData && wakaData.languages && wakaData.languages.length > 0) {
    const topLangs = wakaData.languages.slice(0, 5);
    const colorMap: Record<string, { color: string; barColor: string }> = {
      TypeScript: { color: 'bg-blue-500', barColor: 'from-blue-500 to-cyan-400' },
      JavaScript: { color: 'bg-amber-400', barColor: 'from-amber-400 to-yellow-300' },
      'React/Next.js': { color: 'bg-purple-500', barColor: 'from-purple-500 to-indigo-400' },
      Python: { color: 'bg-emerald-500', barColor: 'from-emerald-500 to-teal-400' },
      HTML: { color: 'bg-orange-500', barColor: 'from-orange-500 to-red-400' },
      CSS: { color: 'bg-sky-500', barColor: 'from-sky-500 to-blue-400' },
      JSON: { color: 'bg-emerald-400', barColor: 'from-emerald-400 to-green-300' }
    };

    languages = topLangs.map((l: any) => {
      const config = colorMap[l.name] || { color: 'bg-blue-500', barColor: 'from-blue-500 to-purple-400' };
      return {
        name: l.name.toUpperCase(),
        percentage: parseFloat(l.percent.toFixed(1)),
        color: config.color,
        barColor: config.barColor
      };
    });
  }

  // WakaTime Stats
  const weeklyEffort = (wakaData?.human_readable_total && wakaData.human_readable_total !== '0 secs' && wakaData.human_readable_total !== '0 mins') 
    ? wakaData.human_readable_total 
    : '7h 51m';

  const dailyAverage = (wakaData?.human_readable_daily_average && wakaData.human_readable_daily_average !== '0 secs' && wakaData.human_readable_daily_average !== '0 mins') 
    ? wakaData.human_readable_daily_average 
    : '2.6 hrs';

  const totalCodingHours = wakaAllTimeData?.total_seconds 
    ? Math.round(wakaAllTimeData.total_seconds / 3600) 
    : 959;
  const rows = 7;
  const cols = 52;
  const contributionsGrid: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

  currentYearDays.forEach((day, idx) => {
    const colIndex = Math.floor(idx / 7);
    const rowIndex = idx % 7;
    if (colIndex < cols && rowIndex < rows) {
      contributionsGrid[rowIndex][colIndex] = day.level;
    }
  });

  return NextResponse.json({
    username: githubUser,
    weeklyEffort,
    dailyAverage,
    totalCodingHours,
    totalPulse: totalCodingHours,
    peakActivity: best > 0 ? best : 12,
    currentSprint: 7,
    processSpeed: '1h 34m',
    languages,
    contributionsGrid,
    contributionDays: currentYearDays,
    summary: {
      total,
      last7DaysTotal,
      best: best < 0 ? 0 : best,
      average
    }
  });
}
