'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, Cpu, ShieldCheck, GitCommit, Zap, Code2, Globe, Layers, 
  Terminal, ExternalLink, Activity, Clock, CheckCircle2, Server, ArrowUpRight
} from 'lucide-react';

const techStack = [
  { name: 'Next.js Framework', version: 'v15.1.0', role: 'App Router Engine & SSR Proxy', badge: 'Core', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
  { name: 'React Architecture', version: 'v19.0.0', role: 'Concurrent Rendering & Server Components', badge: 'UI Core', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
  { name: 'Tailwind CSS Engine', version: 'v4.0.0', role: 'Atomic Styling & Dark Variant Sync', badge: 'Styling', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
  { name: 'GSAP Animation Suite', version: 'v3.12.5', role: 'ScrollTrigger & Kinetic Motion Mechanics', badge: 'Motion', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  { name: 'Framer Motion Engine', version: 'v11.15.0', role: '3D Stage Perspective & Page Transitions', badge: 'FX Engine', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
  { name: 'Lucide Vector System', version: 'v0.469.0', role: 'Unified Executive & Technical Iconography', badge: 'Vector UI', color: 'text-pink-400 border-pink-500/30 bg-pink-500/10' }
];

const systemMetrics = [
  { label: 'SYSTEM VERSION', value: 'v2.7.0 (Stable)', desc: 'Production Release Architecture' },
  { label: 'TELEMETRY ENGINE', value: '365 Calendar Days', desc: 'Single-Source /api/stats Proxy' },
  { label: 'ACTIVE ROUTES', value: '21 Subdirectories', desc: 'Next.js App Router Architecture' },
  { label: 'COMPONENT MODULES', value: '25 Custom Units', desc: 'High-Performance React UI' }
];

const activeRoutes = [
  { path: '/', label: 'Home Page', desc: 'Hero, About, Timeline, Projects, Contact' },
  { path: '/projects', label: 'All Projects', desc: 'Categorized Year-Wise with Stealth Locks' },
  { path: '/tech', label: 'Tech & Heatmap', desc: '365-Day GitHub Pulse & Skill IQ' },
  { path: '/core', label: 'Core Capabilities', desc: 'Interactive 3D Carousel & Kinetic Marquee' },
  { path: '/digital-twin', label: 'Digital Twin AI', desc: 'Interactive AI Resume Agent Preview' },
  { path: '/whats-new', label: 'What\'s New', desc: 'Real-Time Feature Rollouts & Release Feed' },
  { path: '/changelog', label: 'Engineering Changelog', desc: 'Structured Version Log & Commit History' },
  { path: '/updates', label: 'System Updates Stream', desc: 'Live System Updates & Release Subscriber Hub' }
];

export default function VersionPage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground pt-44 pb-24 px-6 md:px-16 relative selection:bg-primary/30 selection:text-primary">
        
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          
          {/* Top Navigation */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO PORTFOLIO</span>
            </Link>
          </div>

          {/* Header Title Section */}
          <div className="mb-16 border-b border-foreground/10 pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7029]/10 border border-[#FF7029]/30 font-mono text-xs font-bold text-[#FF7029] tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF7029] animate-pulse" />
                <span>SYSTEM SPECIFICATION & VERSION CONTROL</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/changelog"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  <span>Changelog</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-foreground/20">|</span>
                <Link
                  href="/updates"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  <span>Updates</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <h1 className="font-display font-extrabold italic text-4xl sm:text-6xl md:text-7xl tracking-tight text-foreground uppercase mb-6">
              PORTFOLIO ARCHITECTURE v2.7.0
            </h1>

            <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-3xl leading-relaxed">
              Official technical build specifications, runtime technology dependencies, single-source telemetry architecture, and active subroute inventory.
            </p>
          </div>

          {/* 4 Stat Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {systemMetrics.map((m) => (
              <div key={m.label} className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/10 backdrop-blur-md">
                <span className="font-mono text-[10px] font-bold text-foreground/50 uppercase tracking-widest block mb-2">
                  {m.label}
                </span>
                <div className="font-display font-extrabold text-2xl text-foreground mb-1">
                  {m.value}
                </div>
                <span className="font-mono text-xs text-foreground/40">
                  {m.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Core Tech Stack Specifications */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase italic tracking-tight text-foreground">
                RUNTIME TECH STACK SPECIFICATIONS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-extrabold uppercase border ${tech.color}`}>
                        {tech.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-foreground/70">
                        {tech.version}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {tech.name}
                    </h3>
                    <p className="font-mono text-xs text-foreground/60 leading-relaxed">
                      {tech.role}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-foreground/10 flex items-center justify-between font-mono text-[10px] text-foreground/40">
                    <span>DEPENDENCY STATUS</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> ACTIVE
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Subroute Inventory */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Server className="w-5 h-5 text-cyan-400" />
              <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase italic tracking-tight text-foreground">
                ACTIVE SUBROUTE INVENTORY
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeRoutes.map((r) => (
                <Link
                  key={r.path}
                  href={r.path}
                  className="p-5 rounded-2xl bg-foreground/[0.02] border border-foreground/10 hover:border-primary/40 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary">
                      <span>{r.path}</span>
                      <span className="text-foreground/30">•</span>
                      <span className="text-foreground font-semibold">{r.label}</span>
                    </div>
                    <p className="font-mono text-xs text-foreground/50">
                      {r.desc}
                    </p>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
