'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  Code2, 
  Clock, 
  Zap, 
  Search, 
  Calendar, 
  Award,
  RefreshCw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GitHubHeatmapCard } from '@/components/ui/GitHubHeatmapCard';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function TechPage() {
  const [loading, setLoading] = useState(true);
  const heatmapScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollHeatmap = (direction: 'left' | 'right') => {
    if (heatmapScrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      heatmapScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const [stats, setStats] = useState<{
    username: string;
    weeklyEffort: string;
    dailyAverage: string;
    totalPulse: number;
    peakActivity: number;
    currentSprint: number;
    processSpeed: string;
    languages: Array<{ name: string; percentage: number; color: string; barColor: string }>;
    contributionsGrid: number[][];
  }>({
    username: 'webdeveloperdesigner',
    weeklyEffort: '7h 51m',
    dailyAverage: '2.6 hrs',
    totalPulse: 959,
    peakActivity: 245,
    currentSprint: 7,
    processSpeed: '1h 34m',
    languages: [
      { name: 'TYPESCRIPT', percentage: 45.2, color: 'bg-blue-500', barColor: 'from-blue-500 to-cyan-400' },
      { name: 'REACT / NEXT.JS', percentage: 26.8, color: 'bg-purple-500', barColor: 'from-purple-500 to-indigo-400' },
      { name: 'PYTHON', percentage: 14.5, color: 'bg-emerald-500', barColor: 'from-emerald-500 to-teal-400' },
      { name: 'TAILWIND CSS', percentage: 8.4, color: 'bg-amber-500', barColor: 'from-amber-500 to-orange-400' },
      { name: 'GRAPHQL / NODE', percentage: 5.1, color: 'bg-pink-500', barColor: 'from-pink-500 to-rose-400' }
    ],
    contributionsGrid: []
  });

  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const defaultGrid = Array.from({ length: 7 }, (_, r) =>
    Array.from({ length: 52 }, (_, c) => {
      const hash = (r * 13 + c * 37) % 10;
      return hash > 7 ? 3 : hash > 4 ? 2 : hash > 2 ? 1 : 0;
    })
  );

  const gridToRender = (stats?.contributionsGrid && Array.isArray(stats.contributionsGrid) && stats.contributionsGrid.length > 0) ? stats.contributionsGrid : defaultGrid;

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-[#f0f0f0] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-300 overflow-hidden">
      
      {/* Background Ambient Radial Glow Spots */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Subtle Background Grid Lines Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start w-full">
        
        {/* 1. TOP HEADER & STATUS BAR */}
        <div className="w-full mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            {/* Status Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-slate-300 dark:bg-neutral-700" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-600 dark:text-neutral-400 font-bold">
                  SYSTEM STATUS: ANALYTICS ACTIVE
                </span>
              </div>
            </div>

            {/* Giant Title */}
            <h1 className="font-display font-black italic uppercase text-5xl sm:text-7xl md:text-8xl tracking-tight text-slate-900 dark:text-white leading-none">
              TECHNICAL PORTFOLIO
            </h1>
          </div>

          <button 
            onClick={fetchStats}
            title="Refresh Live Metrics"
            className="self-start sm:self-auto px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-xs font-mono text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 transition-all shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>LIVE METRICS</span>
          </button>
        </div>

        {/* 2. MAIN BENTO GRID DASHBOARD LAYOUT */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          
          {/* LEFT SECTION (Span 8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* ANNUAL PULSE (GitHub Heatmap Card) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GitHubHeatmapCard username={stats.username} />
            </motion.div>

            {/* METRICS ROW 1: DAILY AVERAGE & CURRENT SPRINT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* DAILY AVERAGE */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800/80 p-6 flex flex-col justify-between shadow-md dark:shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-neutral-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>DAILY AVERAGE</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">{stats.dailyAverage}</span>
                </div>
              </motion.div>

              {/* CURRENT SPRINT */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800/80 p-6 flex flex-col justify-between shadow-md dark:shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-neutral-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>CURRENT SPRINT</span>
                </div>
                <div className="font-display font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
                  {stats.currentSprint}
                </div>
              </motion.div>

            </div>

            {/* METRICS ROW 2: ENGAGE FLOW & PROCESS SPEED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* ENGAGE FLOW (GLOW BORDER) */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.15)] p-6 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-neutral-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>ENGAGE FLOW</span>
                </div>
                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-blue-600 dark:text-blue-400 mb-1">
                    {stats.weeklyEffort}
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-neutral-500 uppercase tracking-wider block">
                    WEEKLY CODING EFFORT
                  </span>
                </div>
              </motion.div>

              {/* PROCESS SPEED */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800/80 p-6 flex flex-col justify-between shadow-md dark:shadow-xl"
              >
                <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-neutral-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>PROCESS SPEED</span>
                </div>
                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mb-1">
                    {stats.processSpeed}
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-neutral-500 uppercase tracking-wider block">
                    AVERAGE PERFORMANCE
                  </span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* RIGHT SECTION (Span 4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* TOP METRIC CARDS ROW: TOTAL PULSE & PEAK ACTIVITY */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* TOTAL PULSE */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800/80 p-5 flex flex-col justify-between shadow-md dark:shadow-xl"
              >
                <div className="flex items-center gap-2 text-slate-600 dark:text-neutral-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span>TOTAL PULSE</span>
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
                  {stats.totalPulse}
                </div>
              </motion.div>

              {/* PEAK ACTIVITY */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800/80 p-5 flex flex-col justify-between shadow-md dark:shadow-xl"
              >
                <div className="flex items-center gap-2 text-slate-600 dark:text-neutral-400 font-mono text-[10px] font-bold uppercase tracking-wider mb-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-blue-600 dark:text-blue-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span>PEAK ACTIVITY</span>
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
                  {stats.peakActivity}
                </div>
              </motion.div>

            </div>

            {/* TECH STACK IQ CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-neutral-800/80 p-6 flex-1 flex flex-col justify-between shadow-lg dark:shadow-2xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-neutral-300">
                      TECH STACK IQ
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 font-mono text-[10px] uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                    LIVE_METRICS
                  </span>
                </div>

                {/* Progress Bars Stack */}
                <div className="flex flex-col gap-6">
                  {stats.languages.map((tech) => (
                    <div key={tech.name} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-2 text-slate-800 dark:text-neutral-200 font-bold">
                          <span className={`w-2 h-2 rounded-full ${tech.color}`} />
                          <span>{tech.name}</span>
                        </div>
                        <span className="text-slate-500 dark:text-neutral-400 font-medium">{tech.percentage}%</span>
                      </div>

                      {/* Bar Track */}
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-[#141414] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.percentage}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-full bg-gradient-to-r ${tech.barColor} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="font-mono text-xs text-slate-400 dark:text-neutral-600 uppercase tracking-widest pt-8 border-t border-slate-100 dark:border-neutral-900 mt-6">
                &gt; INTELLIGENCE ENGINE V3
              </div>
            </motion.div>

          </div>

        </div>

        {/* 3. BOTTOM TELEMETRY STATUS BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full rounded-full border border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#090909] px-6 py-3.5 font-mono text-xs text-slate-600 dark:text-neutral-400 flex flex-wrap items-center justify-between gap-4 shadow-md dark:shadow-xl"
        >
          <div className="flex items-center gap-6">
            <span>@LATENCY: 14MS</span>
            <span className="hidden md:inline text-slate-300 dark:text-neutral-600">|</span>
            <span className="hidden md:inline">SYSTEM: DARWIN_X64_STABLE</span>
            <span className="hidden lg:inline text-slate-300 dark:text-neutral-600">|</span>
            <span className="hidden lg:inline">SESSION_TOKEN: MKQ0XM</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 dark:text-neutral-300">
            <Search className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-400" />
            <span className="uppercase font-bold tracking-wider">[SCANNING_LIVE_RESOURCES]</span>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
