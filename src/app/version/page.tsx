'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, ArrowUpRight
} from 'lucide-react';

const techStack = [
  { name: 'Next.js Framework', version: 'v15.1.0', role: 'App Router Engine & SSR Proxy', badge: 'Core', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
  { name: 'React Architecture', version: 'v19.0.0', role: 'Concurrent Rendering & Server Components', badge: 'UI Core', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
  { name: 'Tailwind CSS Engine', version: 'v4.0.0', role: 'Atomic Styling & Dark Variant Sync', badge: 'Styling', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
  { name: 'GSAP Animation Suite', version: 'v3.12.5', role: 'ScrollTrigger & Kinetic Motion Mechanics', badge: 'Motion', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  { name: 'Framer Motion Engine', version: 'v11.15.0', role: '3D Stage Perspective & Fullscreen Overlays', badge: 'FX Engine', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
  { name: 'Lucide Vector System', version: 'v0.469.0', role: 'Unified Executive & Technical Iconography', badge: 'Vector UI', color: 'text-pink-400 border-pink-500/30 bg-pink-500/10' }
];

const activeRoutes = [
  { path: '/', label: 'Home Page', desc: 'Hero, About, Timeline, Projects, Contact' },
  { path: '/me', label: 'Interactive Deck', desc: 'CS Engineer Identity, BodhAI & Skills Deck' },
  { path: '/tech', label: 'Tech & Heatmap', desc: '365-Day GitHub Pulse & Language IQ' },
  { path: '/projects', label: 'All Projects', desc: 'Categorized Year-Wise with Stealth Locks' },
  { path: '/core', label: 'Core Capabilities', desc: 'Interactive 3D Carousel & Kinetic Marquee' },
  { path: '/digital-twin', label: 'Digital Twin AI', desc: 'Interactive AI Resume Agent Preview' },
  { path: '/whats-new', label: 'What\'s New', desc: 'Real-Time Feature Rollouts & Release Feed' },
  { path: '/changelog', label: 'Engineering Changelog', desc: 'Structured Version Log & Commit History' },
  { path: '/version', label: 'System Specs', desc: 'Current Production Release State' },
  { path: '/updates', label: 'System Updates Stream', desc: 'Live System Updates & Release Stream' }
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
                  href="/whats-new"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  <span>What's New</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-foreground/20">|</span>
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
                  <span>Live Stream</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <h1 className="font-display font-extrabold italic text-4xl sm:text-6xl md:text-7xl tracking-tight text-foreground uppercase mb-6">
              PORTFOLIO ARCHITECTURE v2.8.0
            </h1>

            <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-3xl leading-relaxed">
              Current production state, system release parameters, dependency stack, and active route registry.
            </p>
          </div>

          {/* Current Version Executive Dashboard (Strict 2.8.2 Spec) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10">
              <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest block mb-2 font-semibold">CURRENT VERSION</span>
              <span className="font-display font-extrabold text-3xl text-[#FF7029] block mb-1">v2.8.2</span>
              <span className="font-mono text-xs text-foreground/60 block">Semantic Release Patch</span>
            </div>

            <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10">
              <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest block mb-2 font-semibold">RELEASE STATUS</span>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-display font-extrabold text-2xl text-emerald-400">STABLE</span>
              </div>
              <span className="font-mono text-xs text-foreground/60 block">Released 04 Sep 2026</span>
            </div>

            <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10">
              <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest block mb-2 font-semibold">PREVIOUS PATCH</span>
              <span className="font-display font-extrabold text-2xl text-foreground block mb-1">v2.8.1</span>
              <span className="font-mono text-xs text-foreground/60 block">Deployed 03 Sep 2026</span>
            </div>

            <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10">
              <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest block mb-2 font-semibold">NEXT MINOR</span>
              <span className="font-display font-extrabold text-2xl text-cyan-400 block mb-1">v2.9.0</span>
              <span className="font-mono text-xs text-foreground/60 block">In Active Development</span>
            </div>
          </div>

          {/* V2 Lifecycle Status Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-1">PRODUCT LIFECYCLE MODEL</span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">V2 Active Engineering Track</h3>
              <p className="font-sans text-sm text-foreground/70 max-w-xl">
                Major architectural generations evolve via Minor features (<code className="text-primary font-mono font-bold">2.8.0 → 2.9.0</code>) and Patch releases (<code className="text-primary font-mono font-bold">2.8.0 → 2.8.1</code>).
              </p>
            </div>
            <Link 
              href="/changelog" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-mono text-xs font-bold hover:bg-primary-hover transition-colors shadow-md whitespace-nowrap"
            >
              <span>EXPLORE FULL CHANGELOG</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Core Dependencies */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl text-foreground uppercase tracking-tight mb-8">
              RUNTIME DEPENDENCY MATRIX
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div key={tech.name} className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-foreground/60">{tech.name}</span>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${tech.color}`}>
                      {tech.badge}
                    </span>
                  </div>
                  <span className="font-display font-bold text-xl text-foreground block mb-2">{tech.version}</span>
                  <p className="font-sans text-xs text-foreground/60">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Routes */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl text-foreground uppercase tracking-tight mb-8">
              SYSTEM ROUTE REGISTRY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeRoutes.map((route) => (
                <Link key={route.path} href={route.path} className="p-5 rounded-xl bg-foreground/5 border border-foreground/10 hover:border-primary/50 transition-all group">
                  <span className="font-mono text-xs font-bold text-primary block mb-1 group-hover:underline">{route.path}</span>
                  <span className="font-display font-bold text-sm text-foreground block mb-1">{route.label}</span>
                  <p className="font-sans text-[11px] text-foreground/50">{route.desc}</p>
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
