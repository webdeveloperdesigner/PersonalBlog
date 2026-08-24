'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NoticePopup from '@/components/NoticePopup';
import Footer from '@/components/Footer';
import { 
  Activity, 
  TrendingUp, 
  Code2, 
  Clock, 
  Zap, 
  Search, 
  Calendar, 
  Award,
  RefreshCw
} from 'lucide-react';
import { GitHubHeatmapCard } from '@/components/ui/GitHubHeatmapCard';

export default function TechPage() {
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/stats');
      if (res.ok) {
        await res.json();
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      <NoticePopup 
        storageKey="tech_page"
        title="GitHub Contribution & Tech Matrix"
        message="Currently working on GitHub Contribution Heatmap & Tech Matrix. Live telemetry is under active development."
        tag="FEATURE PREVIEW"
      />

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
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-neutral-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest mb-4">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                SYSTEM TELEMETRY & TECH MATRIX
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
                Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Proficiency</span> & Activity
              </h1>
            </div>
            
            <p className="text-slate-600 dark:text-neutral-400 max-w-md font-sans text-sm sm:text-base leading-relaxed">
              Real-time engineering metrics, code contributions heatmap, technology stack matrix, and development activity logs.
            </p>
          </div>

          {/* Real-Time Heatmap Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-display flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-500" />
                GitHub Contribution Activity
              </h2>
              <button 
                onClick={fetchStats} 
                className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>REFRESH TELEMETRY</span>
              </button>
            </div>
            
            <GitHubHeatmapCard username="webdeveloperdesigner" />
          </div>

          {/* Technology Proficiency Matrix */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold font-display flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-500" />
              Technology Proficiency Breakdown
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Frontend Architecture', tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Framer Motion'], icon: Code2, color: 'text-cyan-500' },
                { title: 'Backend & Cloud', tech: ['Node.js', 'FastAPI', 'Firebase', 'PostgreSQL', 'Docker'], icon: Zap, color: 'text-purple-500' },
                { title: 'AI & Data Science', tech: ['PyTorch', 'OpenCV', 'Transformers', 'MLOps', 'Pandas'], icon: TrendingUp, color: 'text-emerald-500' }
              ].map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-3xl border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-[#080808]/90 p-6 shadow-md dark:shadow-2xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    <h3 className="font-bold text-lg font-display">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 font-mono text-xs text-slate-700 dark:text-neutral-300 font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Footer Bar */}
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
      <Footer />
    </>
  );
}
