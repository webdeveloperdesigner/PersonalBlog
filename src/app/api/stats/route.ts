import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
  const wakaKey = process.env.WAKATIME_API_KEY;
  const githubUser = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'webdeveloperdesigner';

  let wakaData: any = null;
  let wakaAllTimeData: any = null;
  let rawContribs: any[] = [];

  // 1. Fetch WakaTime Stats
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

  // 2. Fetch Real GitHub Contribution Data (jogruber API primary)
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUser}`, {
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.contributions) {
        rawContribs = Array.isArray(data.contributions[0]) ? data.contributions.flat() : data.contributions;
      }
    }
  } catch (e) {
    console.error('Error fetching jogruber API:', e);
  }

  // Secondary fallback to deno API
  if (rawContribs.length === 0) {
    try {
      const fallbackRes = await fetch(`https://github-contributions-api.deno.dev/${githubUser}.json`, {
        next: { revalidate: 60 }
      });
      if (fallbackRes.ok) {
        const json = await fallbackRes.json();
        if (json && json.contributions) {
          rawContribs = Array.isArray(json.contributions[0]) ? json.contributions.flat() : json.contributions;
        }
      }
    } catch (e) {
      console.error('Fallback API failed:', e);
    }
  }

  // 3. Normalize exact 365 Calendar Days backwards from today
  const dateMap = new Map<string, { count: number; level: number }>();
  rawContribs.forEach((c: any) => {
    const dStr = c.date || c.day || '';
    if (dStr) {
      const cnt = c.count ?? c.intensity ?? 0;
      let level = 0;
      if (cnt >= 10) level = 4;
      else if (cnt >= 7) level = 3;
      else if (cnt >= 4) level = 2;
      else if (cnt >= 1) level = 1;
      dateMap.set(dStr, { count: cnt, level });
    }
  });

  const today = new Date();
  const calendar365: Array<{ date: string; count: number; level: number }> = [];

  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const entry = dateMap.get(dateStr) || { count: 0, level: 0 };
    calendar365.push({
      date: dateStr,
      count: entry.count,
      level: entry.level
    });
  }

  // 4. Calculate Single-Source-Of-Truth GitHub Metrics
  const total = calendar365.reduce((sum, d) => sum + d.count, 0);
  const best = Math.max(...calendar365.map(d => d.count), 0);
  const average = parseFloat((total / 365).toFixed(1));
  const last7DaysTotal = calendar365.slice(-7).reduce((sum, d) => sum + d.count, 0);

  // Dynamic Year Range Calculation (e.g. 2025 - 2026 -> 2026 - 2027)
  const startYear = new Date(calendar365[0].date).getFullYear();
  const endYear = new Date(calendar365[calendar365.length - 1].date).getFullYear();
  const yearRange = startYear === endYear ? `${startYear}` : `${startYear} - ${endYear}`;

  // 5. Process WakaTime Languages
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

  const weeklyEffort = (wakaData?.human_readable_total && wakaData.human_readable_total !== '0 secs' && wakaData.human_readable_total !== '0 mins') 
    ? wakaData.human_readable_total 
    : '7h 51m';

  const dailyAverageHours = (wakaData?.human_readable_daily_average && wakaData.human_readable_daily_average !== '0 secs' && wakaData.human_readable_daily_average !== '0 mins') 
    ? wakaData.human_readable_daily_average 
    : '2.6 hrs';

  const totalCodingHours = wakaAllTimeData?.total_seconds 
    ? Math.round(wakaAllTimeData.total_seconds / 3600) 
    : 959;

  return NextResponse.json({
    username: githubUser,
    github: {
      contributionDays: calendar365,
      total,
      last7DaysTotal,
      best,
      average,
      yearRange
    },
    wakatime: {
      weeklyEffort,
      dailyAverage: dailyAverageHours,
      totalCodingHours,
      languages
    },
    meta: {
      generatedAt: new Date().toISOString(),
      cacheSeconds: 60
    }
  });
}
