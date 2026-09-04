'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, Bell, Sparkles, CheckCircle2, GitCommit, Zap, ArrowUpRight, 
  ExternalLink, Code2, Globe, Cpu, RefreshCw, Send, ShieldCheck
} from 'lucide-react';

const systemUpdates = [
  {
    id: 'UPD-2026-0904',
    version: 'v2.8.2',
    date: '04 SEP 2026',
    tag: 'PATCH',
    tagColor: 'bg-emerald-500 text-white',
    title: 'Direct Client Contact Integration, 8s Toast Auto-Disappear & Error Button State',
    summary: 'Deployed v2.8.2 patch upgrading contact infrastructure to direct client-side submission, 8-second auto-disappearing toasts, dynamic Rose Red delivery failed button state, and secret hygiene.',
    details: [
      'Migrated contact form submission directly to client-side API using environment variables',
      'Configured 8-second (8000ms) auto-disappear timers for both Emerald Success and Rose Error toasts',
      'Engineered dynamic Rose Red button styling (bg-rose-600) and Delivery Failed ✕ text on failure',
      'Replaced unnatural "high volume" messaging with realistic developer contact fallbacks',
      'Purged all hardcoded string API keys from source files for strict environment variable isolation'
    ],
    links: [
      { label: 'View Changelog', href: '/changelog' },
      { label: 'View Version Specs', href: '/version' }
    ]
  },
  {
    id: 'UPD-2026-0831',
    version: 'v2.8.0',
    date: '31 AUG 2026',
    tag: 'RELEASE',
    tagColor: 'bg-[#FF7029] text-white',
    title: 'GitHub Language Byte Aggregation Engine & Dual Light/Dark Mode SDE Architecture',
    summary: 'Integrated real-time repository byte count aggregation (/repos/{owner}/{repo}/languages), uncapped scrollable TECH STACK IQ matrix, dual Light & Dark Mode SDE theme support, explicit GitHub data source legend labeling, and 1s step counter animation.',
    details: [
      'Engineered GitHub Repository Languages Byte Aggregation API pipeline fetching /repos/{owner}/{repo}/languages',
      'Calculated true code byte counts & percentages for pure programming languages (TypeScript, JavaScript, Python, Solidity, HTML, CSS)',
      'Added uncapped scrollable list container for TECH STACK IQ matrix rendering all public repo languages',
      'Engineered dual Light & Dark Mode theme support for /tech page and heatmap bento cards',
      'Added light mode GitHub grey contribution cells (neutral-100/200) and high-tech emerald refresh pill button',
      'Replaced Less Activity text with explicit DATA SOURCE: GITHUB @WEBDEVELOPERDESIGNER legend label',
      'Optimized About page stats counter animation to 1s duration with linear step interpolation (03 Live Projects, 02 Internships, 12+ Tools, 03 Certifications)'
    ],
    links: [
      { label: 'View Tech Heatmap', href: '/tech' },
      { label: 'View Version Specs', href: '/version' },
      { label: 'View Changelog', href: '/changelog' }
    ]
  },
  {
    id: 'UPD-2026-0830',
    version: 'v2.7.0',
    date: '30 AUG 2026',
    tag: 'STABLE',
    tagColor: 'bg-emerald-500 text-white',
    title: 'Single-Source-of-Truth Telemetry Backend & Dynamic Year Ranges',
    summary: 'Refactored backend telemetry pipeline (/api/stats) to normalize 365 calendar days backwards from today, calculate dynamic rolling year ranges (2025 - 2026), live active browser session timer, and dynamic 8-character SESSION TOKEN generator per page load session.',
    details: [
      'Engineered 365 calendar days normalization engine with zero-filled missing GitHub API dates',
      'Configured dynamic year range calculation (e.g. 2025 - 2026 -> 2026 - 2027) requiring 0 code changes',
      'Added live ticking active browser session timer (00m 00s -> 08m 42s...)',
      'Added dynamic crypto-generated SESSION TOKEN (8F3A91C2) per page load session',
      'Added Lucide icon badges for Personal Projects vs Group Projects with year-ordered sorting'
    ],
    links: [
      { label: 'View Tech Heatmap', href: '/tech' },
      { label: 'View Projects', href: '/projects' },
      { label: 'View Changelog', href: '/changelog' }
    ]
  },
  {
    id: 'UPD-2026-0824',
    version: 'v2.6.0',
    date: '24 AUG 2026',
    tag: 'MAJOR FEATURE',
    tagColor: 'bg-emerald-500 text-white',
    title: '3D Core Capabilities Stage, Kinetic Marquee & Digital Twin AI Preview',
    summary: 'Launched 3D horizontal capabilities carousel stage (/core) with Framer Motion 3D perspective transforms, infinite velocity marquee, GitHub real-time contribution heatmap card (/tech), and Digital Twin AI Agent coming soon announcement.',
    details: [
      'Built 3D horizontal perspective carousel stage with Framer Motion controls',
      'Integrated infinite kinetic velocity marquee banner ("CREATIVE ✦ ENGINEERING")',
      'Created real-time GitHub commit contribution matrix widget integrated with backend API proxies',
      'Created /digital-twin coming soon preview page with early access notification form'
    ],
    links: [
      { label: 'Explore Core Stage', href: '/core' },
      { label: 'Digital Twin AI', href: '/digital-twin' }
    ]
  },
  {
    id: 'UPD-2026-0823',
    version: 'v2.5.0',
    date: '23 AUG 2026',
    tag: 'ARCHITECTURE',
    tagColor: 'bg-blue-600 text-white',
    title: 'Executive Experience Timeline & Smooth Scroll Interceptor',
    summary: 'Restructured career experience cards in exact executive ASCII structure featuring MotionCut Web Development, Digihero SEO Optimization, and BodhAI AI Learning Platform with single-line titles and verification certificate links.',
    details: [
      'Configured executive timeline cards with verified certificate credentials',
      'Engineered smooth scroll interceptor handlers for /#hero, /#about, /#experience, /#projects, and /#blog',
      'Configured glassmorphism sticky desktop header with dark/light mode synchronization',
      'Launched /whats-new status stream page showcasing live feature rollouts'
    ],
    links: [
      { label: 'Experience Timeline', href: '/#experience' },
      { label: 'What\'s New Feed', href: '/whats-new' }
    ]
  }
];

export default function UpdatesPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

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
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO PORTFOLIO</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-16 border-b border-foreground/10 pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>LIVE SYSTEM UPDATES & RELEASE STREAM</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/version"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  <span>Version Spec</span>
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
              </div>
            </div>

            <h1 className="font-display font-extrabold italic text-4xl sm:text-6xl md:text-7xl tracking-tight text-foreground uppercase mb-6">
              SYSTEM UPDATES STREAM
            </h1>

            <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-3xl leading-relaxed">
              Real-time engineering announcements, feature rollouts, backend infrastructure updates, and architectural release notifications.
            </p>
          </div>

          {/* Offline Installation Banner */}
          <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-foreground/[0.02] to-foreground/[0.03] border border-primary/20 backdrop-blur-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>OFFLINE SYSTEM ACCESS & INSTALLATION</span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">
                  Install Portfolio Application for Offline Access
                </h3>
                <p className="font-mono text-xs text-foreground/60">
                  Access projects, engineering logs, case studies, and career timeline offline directly from your desktop or mobile device without network latency.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-5 py-3 rounded-2xl bg-primary text-background font-mono text-xs font-bold flex items-center gap-2 shadow-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>SYSTEM READY FOR OFFLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Updates Timeline Stream */}
          <div className="space-y-8">
            {systemUpdates.map((upd) => (
              <div 
                key={upd.id} 
                className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-all shadow-xl space-y-6"
              >
                {/* Top Badge & Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-foreground/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full font-mono text-xs font-extrabold uppercase ${upd.tagColor}`}>
                      {upd.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-foreground/70">
                      {upd.version}
                    </span>
                    <span className="text-foreground/20">•</span>
                    <span className="font-mono text-xs text-foreground/50">
                      {upd.date}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-foreground/40 font-bold uppercase tracking-widest">
                    ID: {upd.id}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="space-y-2">
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">
                    {upd.title}
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {upd.summary}
                  </p>
                </div>

                {/* Details Bullet List */}
                <div className="p-5 rounded-2xl bg-background/50 border border-foreground/10 space-y-2 font-mono text-xs text-foreground/80">
                  <span className="font-bold text-foreground block mb-3 uppercase tracking-wider text-[10px] text-foreground/50">
                    RELEASE HIGHLIGHTS:
                  </span>
                  {upd.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold">›</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {upd.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-foreground/[0.05] border border-foreground/10 hover:border-primary/40 hover:text-primary transition-all font-mono text-xs font-bold text-foreground"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
