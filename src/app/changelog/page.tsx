'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, ArrowUpRight, ExternalLink, Filter, 
  GitCommit, CheckCircle2, ChevronRight, ChevronDown, Zap, ArrowUp, Layers, Terminal
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

type CategoryType = 'ALL' | 'FEATURE' | 'FIX' | 'UX' | 'ARCHITECTURE';

interface ChangeItem {
  id: string;
  title: string;
  category: CategoryType | 'MOBILE' | 'THEME' | 'PERFORMANCE';
  desc: string;
}

interface Release {
  version: string;
  date: string;
  year: string;
  statusBadge: string;
  badgeColor: string;
  title: string;
  summary: string;
  tags: string[];
  commitUrl: string;
  changes: ChangeItem[];
}

const releasesData: Release[] = [
  {
    version: 'v2.6.0',
    date: '24 AUG 2026',
    year: '2026',
    statusBadge: 'CURRENT RELEASE',
    badgeColor: 'bg-[#FF7029] text-white',
    title: '3D Core Capabilities, GitHub Heatmap & Digital Twin AI Preview',
    summary: 'Interactive 3D horizontal capabilities stage, scroll velocity kinetic marquee, GitHub heatmap contribution card, /tech route, and Digital Twin AI Agent announcement.',
    tags: ['FEATURE', 'ARCHITECTURE', 'UX', 'PERFORMANCE'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'Digital Twin AI Agent (Coming Soon)', category: 'FEATURE', desc: "Custom AI agent trained on complete portfolio, skills, and work history for instant context-aware engineering queries." },
      { id: '02', title: '3D Capabilities Stage & Kinetic Marquee (/core)', category: 'ARCHITECTURE', desc: 'Interactive 3D horizontal perspective carousel stage with infinite scroll marquee banner.' },
      { id: '03', title: 'GitHub Heatmap Contribution Matrix & Tech Matrix (/tech)', category: 'FEATURE', desc: 'Theme-adaptive GitHub contribution matrix card powered by custom API proxy endpoints.' },
      { id: '04', title: 'README & Documentation Synchronizations', category: 'UX', desc: 'Comprehensive repository documentation update reflecting all 19 App Router subdirectories and 23 component modules.' }
    ]
  },
  {
    version: 'v2.5.0',
    date: '23 AUG 2026',
    year: '2026',
    statusBadge: 'STABLE RELEASE',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Executive Experience Timeline Architecture',
    summary: 'Executive timeline system, smooth anchor navigation engine, glassmorphic sticky header, responsive development notice, and live status release infrastructure.',
    tags: ['FEATURE', 'ARCHITECTURE', 'UX', 'MOBILE'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'Executive Experience Timeline Architecture', category: 'FEATURE', desc: 'Implemented exact ASCII schematic layout for MotionCut, Digihero, and BodhAI cards with 100% full-width single-line titles and verification certificate links.' },
      { id: '02', title: 'Full-Site Smooth Anchor Scroll Engine', category: 'ARCHITECTURE', desc: 'Configured global smooth scrolling with interceptor handlers routing /#hero, /#about, /#experience, /#projects, and /#blog seamlessly across desktop and mobile.' },
      { id: '03', title: 'Glassmorphism Sticky Desktop Header', category: 'UX', desc: 'Configured sticky backdrop-blur-xl navbar with persistent VIVEK logo and Dark/Light theme toggle controls across all viewports.' },
      { id: '04', title: 'Responsive Mobile Development Notice Banner', category: 'MOBILE', desc: 'Rewrote top notice banner with mobile-optimized text and icon-only GitHub link for zero line-wrapping on small screens.' },
      { id: '05', title: 'Dedicated /whats-new Status Stream Route', category: 'FEATURE', desc: 'Launched real-time release status page showcasing feature rollouts, active project highlights, and direct GitHub verification links.' }
    ]
  },
  {
    version: 'v2.4.0',
    date: '22 AUG 2026',
    year: '2026',
    statusBadge: 'MAJOR RELEASE',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Explore Navigation & Featured Blog Integration',
    summary: 'Desktop navigation pill dropdown, interactive mobile drawer accordion, homepage blog cards grid, and 100% light/dark mode theme synchronization.',
    tags: ['FEATURE', 'UX', 'FIX', 'PERFORMANCE'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: '6.0 Explore Dropdown Navigation', category: 'FEATURE', desc: 'Added floating desktop navigation dropdown and interactive mobile drawer accordion for Case Studies, Gallery, Timeline, About, and Archive.' },
      { id: '02', title: 'Featured Blog Section on Homepage', category: 'FEATURE', desc: 'Mounted high-contrast blog cards grid (04 / BLOG & WRITINGS) directly before the Contact section on the homepage.' },
      { id: '03', title: 'Light & Dark Mode Theme Synchronization', category: 'THEME', desc: 'Configured Tailwind v4 @custom-variant dark for 100% theme synchronization across all static and dynamic routes.' },
      { id: '04', title: 'Form Floating Labels & Contrast Fixes', category: 'FIX', desc: 'Eliminated label/placeholder collision in Contact form and enforced high-contrast text styling on primary orange buttons.' },
      { id: '05', title: 'PageLoader Caching & Performance', category: 'PERFORMANCE', desc: 'Optimized cyber terminal boot screen with sessionStorage caching to prevent duplicate loading screens on repeat visits.' }
    ]
  },
  {
    version: 'v2.3.0',
    date: '18 AUG 2026',
    year: '2026',
    statusBadge: 'STABLE RELEASE',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Spring Cursor Physics & Presentation Deck UX',
    summary: 'Interactive dual-ring mouse cursor with Framer Motion spring physics and presentation deck theme adaptability.',
    tags: ['UX', 'FIX'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'Spring Cursor Physics & Hover Scale', category: 'UX', desc: 'Engineered custom dual-ring mouse cursor with spring physics and automatic hover scale across buttons and links.' },
      { id: '02', title: 'Presentation Deck Theme Adaptability', category: 'UX', desc: 'Updated /me interactive slide deck cards to support solid high-contrast Light & Dark mode themes.' },
      { id: '03', title: 'Contact Input Floating Labels', category: 'FIX', desc: 'Applied peer-[:not(:placeholder-shown)] floating labels for pristine form user interactions.' }
    ]
  },
  {
    version: 'v2.2.0',
    date: '12 AUG 2026',
    year: '2026',
    statusBadge: 'STABLE RELEASE',
    badgeColor: 'bg-blue-500 text-white',
    title: '3D Gyroscope Spotlight & Submenu Architecture',
    summary: 'Hardware-accelerated mouse position spotlight sheen, 3D perspective tilt cards, and full-screen mobile menu drawer.',
    tags: ['FEATURE', 'ARCHITECTURE', 'UX'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: '3D TiltCard & Gyroscope Spotlight', category: 'FEATURE', desc: 'Implemented hardware-accelerated mouse position spotlight sheen and 3D card perspective tilt.' },
      { id: '02', title: 'Explore Submenu Architecture', category: 'ARCHITECTURE', desc: 'Built modular submenu structure linking to Case Studies, Gallery, Timeline, About, and Archive.' },
      { id: '03', title: 'Mobile Navigation Drawer', category: 'UX', desc: 'Engineered full-screen mobile menu drawer with smooth inline accordion expansion.' }
    ]
  },
  {
    version: 'v2.1.0',
    date: '05 AUG 2026',
    year: '2026',
    statusBadge: 'STABLE RELEASE',
    badgeColor: 'bg-cyan-500 text-white',
    title: 'Theme Provider & Glassmorphism Design System',
    summary: 'Global theme provider supporting system preferences, persistent local storage, and glassmorphism card design tokens.',
    tags: ['THEME', 'ARCHITECTURE'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'next-themes Provider Integration', category: 'THEME', desc: 'Configured global theme provider supporting system preferences and persistent local storage.' },
      { id: '02', title: 'Glassmorphism Card Systems', category: 'ARCHITECTURE', desc: 'Created curated color palettes with HSL tailwinds, subtle micro-animations, and glass card borders.' }
    ]
  },
  {
    version: 'v2.0.0',
    date: '01 AUG 2026',
    year: '2026',
    statusBadge: 'ARCHITECTURE OVERHAUL',
    badgeColor: 'bg-amber-500 text-white',
    title: 'Next.js 16 (Turbopack) & React 19 Engine Upgrade',
    summary: 'Migrated codebase to Next.js 16 App Router with Turbopack compilation, React 19 paradigms, pitch deck, and case studies.',
    tags: ['ARCHITECTURE', 'FEATURE'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'Next.js 16 & React 19 Upgrade', category: 'ARCHITECTURE', desc: 'Migrated codebase to Next.js 16 App Router with Turbopack compilation and React 19 async paradigms.' },
      { id: '02', title: 'Interactive Pitch Deck (/me)', category: 'FEATURE', desc: 'Created keyboard and scroll-navigated presentation deck for pitching mission, skills, and BodhAI.' },
      { id: '03', title: 'Engineering Case Studies (/case-studies)', category: 'FEATURE', desc: 'Built system architecture breakdown router with interactive metric telemetry.' }
    ]
  },
  {
    version: 'v1.5.0',
    date: '14 MAY 2026',
    year: '2026',
    statusBadge: 'FEATURE RELEASE',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Career Timeline Tracks & Category Filter Tabs',
    summary: 'Career tracking milestone component showcasing professional growth, achievements, and real-time project filtering.',
    tags: ['FEATURE', 'UX'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'Experience Timeline Tracks', category: 'FEATURE', desc: 'Built career tracking milestone component showcasing professional growth and achievements.' },
      { id: '02', title: 'Project Filter System', category: 'UX', desc: 'Added real-time category tab filtering across AI, Full Stack, and Mobile project archives.' }
    ]
  },
  {
    version: 'v1.0.0',
    date: '10 JAN 2026',
    year: '2026',
    statusBadge: 'INITIAL RELEASE',
    badgeColor: 'bg-gray-600 text-white',
    title: 'Initial Portfolio Architecture Launch',
    summary: 'Launched core portfolio system with Hero section, Projects showcase, Disciplines, and Contact form.',
    tags: ['FEATURE'],
    commitUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog/commits/main',
    changes: [
      { id: '01', title: 'Core Portfolio Launch', category: 'FEATURE', desc: 'Launched initial portfolio experience with Hero section, Projects grid, Disciplines, and Contact form.' }
    ]
  }
];

export default function EngineeringChangelogPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('ALL');
  const [openReleaseDetails, setOpenReleaseDetails] = useState<Record<string, boolean>>({
    'v2.5.0': true,
  });

  const toggleReleaseDetails = (version: string) => {
    setOpenReleaseDetails(prev => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  const filteredReleases = releasesData.filter(release => {
    if (activeFilter === 'ALL') return true;
    return release.tags.includes(activeFilter);
  });

  const scrollToRelease = (version: string) => {
    const el = document.getElementById(version);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <main className="min-h-screen bg-background text-foreground pt-36 md:pt-40 pb-24 px-4 sm:px-8 md:px-16 relative selection:bg-primary/30 selection:text-primary">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* NAV HEADER */}
        <header className="flex items-center justify-between gap-4 mb-12 pb-6 border-b border-foreground/10">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="font-mono text-xs text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
              <span>VIVEK / RELEASES</span>
            </Link>
          </div>

          <a 
            href="https://github.com/webdeveloperdesigner/PersonalBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider border-b border-foreground/30 hover:border-primary pb-0.5"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
          </a>
        </header>

        {/* INTRO HEADER */}
        <section className="mb-12">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[#FF7029] text-sm font-bold">VERSION HISTORY</span>
              <div className="w-12 h-[1px] bg-[#FF7029]" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60 font-semibold">CHANGELOG & UPDATES</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              System <span className="italic font-light text-[#FF7029]">Changelog</span>
            </h1>
            <p className="font-sans text-lg text-foreground/70 max-w-2xl font-medium">
              Complete version history, feature releases, performance optimizations, and design system updates.
            </p>
          </div>

          {/* LIVE DEVELOPMENT NOTICE CARD */}
          <div className="p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/15 shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7029] animate-pulse" />
                <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#FF7029]">
                  LIVE DEVELOPMENT
                </span>
              </div>
              <p className="font-sans text-sm text-foreground/80 font-medium max-w-2xl leading-relaxed">
                This portfolio is currently under active development. Some links, forms, or features may be temporarily unavailable as updates roll out.
              </p>
            </div>

            <a
              href="https://github.com/webdeveloperdesigner/PersonalBlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background hover:bg-[#FF7029] hover:text-white transition-all font-mono text-xs font-bold uppercase tracking-widest shrink-0 self-start md:self-auto shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW GITHUB ↗</span>
            </a>
          </div>

          {/* RELEASE METRICS BADGES (4 CARDS) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex flex-col">
              <span className="font-display text-3xl font-black text-foreground">08</span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-foreground/50 mt-1">RELEASES</span>
            </div>
            <div className="p-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex flex-col">
              <span className="font-display text-3xl font-black text-foreground">2026</span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-foreground/50 mt-1">STARTED</span>
            </div>
            <div className="p-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex flex-col">
              <span className="font-display text-3xl font-black text-[#FF7029]">v2.5.0</span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-foreground/50 mt-1">LATEST RELEASE</span>
            </div>
            <div className="p-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex flex-col">
              <span className="font-mono text-sm font-extrabold text-emerald-500 mt-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                ACTIVE
              </span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-foreground/50 mt-1">STATUS</span>
            </div>
          </div>
        </section>

        {/* FILTER & CATEGORY SELECTION BAR */}
        <section className="mb-12 pb-6 border-b border-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#FF7029]" />
            <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-foreground/70">
              RELEASES FILTER:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['ALL', 'FEATURE', 'FIX', 'UX', 'ARCHITECTURE'] as CategoryType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  activeFilter === cat 
                    ? 'bg-[#FF7029] text-white border-[#FF7029] shadow-sm' 
                    : 'bg-foreground/5 text-foreground/70 border-foreground/10 hover:border-foreground/30 hover:text-foreground'
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
        </section>

        {/* MAIN LAYOUT: STICKY SIDEBAR + CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* DESKTOP STICKY SIDEBAR / MOBILE HORIZONTAL INDEX */}
          <aside className="lg:col-span-3 lg:sticky lg:top-36 bg-foreground/[0.02] border border-foreground/10 p-5 rounded-2xl">
            <div className="font-mono text-xs font-extrabold uppercase tracking-widest text-foreground/50 mb-4 pb-2 border-b border-foreground/10 flex items-center justify-between">
              <span>RELEASES INDEX</span>
              <span className="text-[#FF7029]">✦</span>
            </div>

            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="hidden lg:block font-mono text-[10px] uppercase font-bold text-[#FF7029] tracking-wider mt-1 mb-1">
                2026 RELEASES
              </div>

              {releasesData.map((rel) => (
                <button
                  key={rel.version}
                  onClick={() => scrollToRelease(rel.version)}
                  className={`font-mono text-xs font-bold px-3 py-2 rounded-lg text-left transition-all shrink-0 flex items-center justify-between group cursor-pointer ${
                    rel.version === 'v2.5.0'
                      ? 'bg-[#FF7029]/10 border border-[#FF7029]/40 text-[#FF7029]'
                      : 'hover:bg-foreground/5 text-foreground/70 hover:text-foreground border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {rel.version === 'v2.5.0' && <span className="w-1.5 h-1.5 rounded-full bg-[#FF7029]" />}
                    <span>{rel.version}</span>
                  </div>
                  <span className="font-mono text-[9px] opacity-60 group-hover:opacity-100 hidden lg:inline">
                    {rel.date.split(' ')[0]} {rel.date.split(' ')[1]}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN RELEASES FEED */}
          <div className="lg:col-span-9 flex flex-col gap-16">
            {filteredReleases.map((rel) => (
              <article 
                key={rel.version}
                id={rel.version}
                className="scroll-mt-36 flex flex-col gap-6 p-6 sm:p-8 rounded-3xl bg-background border border-foreground/15 shadow-lg relative overflow-hidden"
              >
                {/* Release Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-foreground/10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-foreground/60">{rel.date}</span>
                    <span className="text-foreground/30">•</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-black text-foreground">{rel.version}</h2>
                    <span className={`font-mono text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${rel.badgeColor}`}>
                      {rel.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Release Main Title & Summary */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-foreground tracking-tight leading-snug">
                    {rel.title}
                  </h3>
                  <p className="font-sans text-base text-foreground/75 leading-relaxed font-medium">
                    {rel.summary}
                  </p>
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2">
                  {rel.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-foreground/5 border border-foreground/10 text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* STRUCTURED CHANGES BOX (COLLAPSIBLE ACCORDION) */}
                <div className="rounded-2xl bg-foreground/[0.02] border border-foreground/10 flex flex-col mt-2 overflow-hidden transition-colors hover:border-foreground/20">
                  <button
                    onClick={() => toggleReleaseDetails(rel.version)}
                    className="w-full p-4 flex items-center justify-between font-mono text-xs font-bold text-foreground/80 hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronDown className={`w-4 h-4 text-[#FF7029] transition-transform duration-300 ${openReleaseDetails[rel.version] ? 'rotate-180' : ''}`} />
                      <span>+ {rel.changes.length} CHANGES LOGGED</span>
                    </span>
                    <span className="text-[#FF7029] flex items-center gap-1 font-bold">
                      <span>{openReleaseDetails[rel.version] ? 'HIDE DETAILS' : 'CHANGELOG DETAILS'}</span>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openReleaseDetails[rel.version] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="px-5 pb-5 pt-2 border-t border-foreground/10 flex flex-col gap-4 overflow-hidden"
                      >
                        {rel.changes.map((change) => (
                          <div key={change.id} className="flex flex-col gap-1 pt-2 first:pt-0 border-t border-foreground/5 first:border-t-0">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-sans font-bold text-sm text-foreground flex items-center gap-2">
                                <span className="font-mono text-xs text-[#FF7029] font-extrabold">{change.id}</span>
                                <span>{change.title}</span>
                              </span>
                              <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-[#FF7029] font-bold shrink-0">
                                {change.category}
                              </span>
                            </div>
                            <p className="font-sans text-xs text-foreground/70 leading-relaxed pl-6">
                              {change.desc}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Release Footer / GitHub Touchpoint 3 */}
                <div className="pt-4 border-t border-foreground/10 flex items-center justify-between flex-wrap gap-3">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-foreground/50">
                    VERIFIED COMMIT REPOSITORY
                  </span>
                  <a
                    href={rel.commitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF7029] hover:underline font-bold uppercase tracking-wider"
                  >
                    <span>VIEW COMMIT ON GITHUB</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF7029]" />
                  </a>
                </div>

              </article>
            ))}
          </div>

        </div>

        {/* FOOTER NAVIGATION */}
        <footer className="mt-20 pt-8 border-t border-foreground/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <a
            href="https://github.com/webdeveloperdesigner/PersonalBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#FF7029] hover:underline font-bold"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB REPOSITORY ↗</span>
          </a>
        </footer>

      </div>
    </main>
    <Footer />
    </>
  );
}
