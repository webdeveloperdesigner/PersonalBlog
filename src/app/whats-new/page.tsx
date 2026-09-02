'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, Sparkles, CheckCircle2, Rocket, Zap, ShieldCheck, 
  ArrowUpRight, ExternalLink, Code2, Globe, Cpu
} from 'lucide-react';

const whatsNewItems = [
  {
    id: '001',
    badge: 'v2.8.1 PATCH',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Full-Screen Dark Overlay Drawer & Chromium Autofill Defeat Architecture',
    date: 'September 02, 2026',
    desc: 'Launched interactive full-screen dark drawer overlay featuring Let\'s Work Together heading, copy-to-clipboard email pill, top running marquee, 3x2 social grid (GitHub, LinkedIn, Twitter, Instagram, Discord, Spotify), and Chrome Incognito autofill defeat engine.',
    tags: ['Footer Overlay', 'Social Grid', 'Autofill Defeat', 'Hydration Shield'],
    link: '/timeline'
  },
  {
    id: '002',
    badge: 'v2.8.0 RELEASE',
    badgeColor: 'bg-[#FF7029] text-white',
    title: 'GitHub Language Byte Aggregation Engine & Dual Light/Dark Mode SDE Architecture',
    date: 'August 31, 2026',
    desc: 'Real-time repository byte count aggregation (/repos/{owner}/{repo}/languages), uncapped scrollable TECH STACK IQ, seamless Light & Dark Mode rendering, and optimized counter animations.',
    tags: ['GitHub Bytes API', 'Tech Stack IQ', 'Light/Dark Theme', 'SDE Architecture'],
    link: '/tech'
  },
  {
    id: '003',
    badge: 'v2.7.0 RELEASE',
    badgeColor: 'bg-[#FF7029] text-white',
    title: 'Single-Source-Of-Truth GitHub Telemetry Engine & Live Heatmap',
    date: 'August 30, 2026',
    desc: 'Server backend 365 calendar days normalization engine (/api/stats), auto-updating 2025-2026 rolling year range, live active browser session timer, and dynamic session token generator.',
    tags: ['GitHub Telemetry', 'API Proxy', 'Session Timer', 'Year Range'],
    link: '/tech'
  },
  {
    id: '004',
    badge: 'STEALTH & BADGES',
    badgeColor: 'bg-blue-600 text-white',
    title: 'Stealth Blurred Project & Personal / Group Badges (/projects)',
    date: 'August 30, 2026',
    desc: 'Added explicit Personal Project vs Group Project badges with Lucide icons, year-ordered project grouping (2026 first), and a blurred lock stealth project preview.',
    tags: ['Projects', 'Personal Project', 'Group Project', 'Stealth Lock'],
    link: '/projects'
  },
  {
    id: '005',
    badge: 'SYSTEM ROUTES',
    badgeColor: 'bg-purple-600 text-white',
    title: 'System Version Dashboard (/version) & Release Updates Stream (/updates)',
    date: 'August 30, 2026',
    desc: 'Launched comprehensive System Version dashboard highlighting runtime tech stack specifications, active routes index, and live system updates stream.',
    tags: ['Version Dashboard', 'System Updates', 'Tech Stack', 'Routes Index'],
    link: '/version'
  }
];

export default function WhatsNewPage() {
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

        <div className="container mx-auto max-w-5xl relative z-10">
          
          {/* Top Navigation */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO PORTFOLIO</span>
            </Link>

            <Link 
              href="/changelog" 
              className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline font-bold"
            >
              <span>View Complete Changelog</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Header Title Section */}
          <div className="mb-16 border-b border-foreground/10 pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7029]/10 border border-[#FF7029]/30 font-mono text-xs font-bold text-[#FF7029] tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF7029] animate-pulse" />
              <span>REAL-TIME FEATURE ROLLOUTS & RELEASE HIGHLIGHTS</span>
            </div>

            <h1 className="font-display font-extrabold italic text-4xl sm:text-6xl md:text-7xl tracking-tight text-foreground uppercase mb-6">
              WHAT'S NEW
            </h1>

            <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-2xl leading-relaxed">
              Curated feed of major engineering feature rollouts, architecture upgrades, and component deployments.
            </p>
          </div>

          {/* Feature Rollout List */}
          <div className="space-y-12 mb-20">
            {whatsNewItems.map((item) => (
              <div key={item.id} className="p-8 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-[#FF7029]/50 transition-all duration-300 group shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-foreground/50">{item.date}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-foreground/70 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/60">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={item.link} 
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF7029] hover:underline"
                  >
                    <span>EXPLORE FEATURE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Footer CTA to Full Changelog */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">Looking for complete commit history?</h3>
              <p className="font-sans text-sm text-foreground/70">View structured version entries from v1.0.0 to v2.8.1 on our engineering changelog.</p>
            </div>
            <Link 
              href="/changelog" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-mono text-xs font-bold hover:bg-primary-hover transition-colors shadow-md whitespace-nowrap"
            >
              <span>VIEW COMPLETE CHANGELOG →</span>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
