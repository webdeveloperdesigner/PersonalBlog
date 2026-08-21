'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, CheckCircle2, GitCommit, Layers, Rocket, Tag, ShieldCheck, ArrowUp, Zap } from 'lucide-react';

const changelogData = [
  {
    version: 'v2.4.0',
    date: 'August 22, 2026',
    badge: 'LATEST MAJOR RELEASE',
    badgeColor: 'bg-[#FF7029] text-white',
    summary: 'Explore Dropdown Navigation, Homepage Blog Integration, Dual-Theme Refinements & Executive Documentation',
    features: [
      {
        title: '6.0 Explore Dropdown Navigation',
        desc: 'Added floating desktop navigation pill dropdown and interactive mobile drawer accordion with quick routes to Case Studies, Gallery, Timeline, About, and Projects Archive.',
        category: 'Feature'
      },
      {
        title: 'Featured Blog Section on Homepage',
        desc: 'Mounted a high-contrast blog cards grid (04 / BLOG & WRITINGS) directly before the Contact section on the homepage.',
        category: 'Feature'
      },
      {
        title: 'Light & Dark Mode Theme Synchronization',
        desc: 'Configured Tailwind v4 @custom-variant dark for 100% theme synchronization across all 17 static and dynamic routes.',
        category: 'UI/UX'
      },
      {
        title: 'Form Floating Labels & Contrast Fixes',
        desc: 'Eliminated label/placeholder collision in Contact form using placeholder-transparent and enforced white text contrast on primary orange buttons.',
        category: 'Fix'
      },
      {
        title: 'PageLoader Caching & Performance',
        desc: 'Optimized cyber terminal boot screen duration to 10s with sessionStorage caching to prevent duplicate loading screens.',
        category: 'Performance'
      },
      {
        title: '/me Presentation Deck UX',
        desc: 'Replaced circular menu icon with explicit ← BACK TO PORTFOLIO button and added a floating Light/Dark mode toggle.',
        category: 'UI/UX'
      }
    ]
  },
  {
    version: 'v2.3.0',
    date: 'August 18, 2026',
    badge: 'INTERACTIVE CURSOR & PRESENTATION',
    badgeColor: 'bg-purple-500 text-white',
    summary: 'Interactive Spring Cursor Physics, Pitch Deck UX Enhancements & Contact Validation',
    features: [
      {
        title: 'Spring Cursor Physics & Hover Scale',
        desc: 'Engineered custom dual-ring mouse cursor with Framer Motion spring physics and automatic hover detection across buttons and links.',
        category: 'Interaction'
      },
      {
        title: 'Presentation Deck Theme Adaptability',
        desc: 'Updated /me interactive slide deck cards to support solid high-contrast Light & Dark mode themes.',
        category: 'UI/UX'
      },
      {
        title: 'Contact Input Float Labels',
        desc: 'Applied peer-[:not(:placeholder-shown)]:-top-3 floating labels for pristine user form interaction.',
        category: 'Fix'
      }
    ]
  },
  {
    version: 'v2.2.0',
    date: 'August 12, 2026',
    badge: '3D GYROSCOPE & EXPLORE ENGINE',
    badgeColor: 'bg-blue-500 text-white',
    summary: 'TiltCard 3D Gyroscope Spotlight, Submenu Architecture & Performance Diagnostic Hooks',
    features: [
      {
        title: '3D TiltCard & Gyroscope Spotlight',
        desc: 'Implemented hardware-accelerated mouse position spotlight sheen and 3D card perspective tilt.',
        category: 'Feature'
      },
      {
        title: 'Explore Submenu Architecture',
        desc: 'Built modular submenu structure linking to Case Studies, Gallery, Timeline, About, and Archive.',
        category: 'Architecture'
      },
      {
        title: 'Mobile Navigation Drawer',
        desc: 'Engineered full-screen mobile menu drawer with smooth inline accordion expansion.',
        category: 'Mobile'
      }
    ]
  },
  {
    version: 'v2.1.0',
    date: 'August 5, 2026',
    badge: 'THEME ENGINE & GLASSMORPHISM',
    badgeColor: 'bg-emerald-500 text-white',
    summary: 'next-themes Provider Integration, Glassmorphism Design Tokens & Dynamic Gradients',
    features: [
      {
        title: 'next-themes Provider Integration',
        desc: 'Configured global theme provider supporting system preferences and persistent local storage.',
        category: 'Theme'
      },
      {
        title: 'Glassmorphism Card Systems',
        desc: 'Created curated color palettes with HSL tailwinds, subtle micro-animations, and glass card borders.',
        category: 'Styling'
      }
    ]
  },
  {
    version: 'v2.0.0',
    date: 'August 1, 2026',
    badge: 'MAJOR ARCHITECTURE UPGRADE',
    badgeColor: 'bg-cyan-500 text-white',
    summary: 'Next.js 16 (Turbopack), React 19, Tailwind CSS v4, Interactive Pitch Deck & Case Studies Engine',
    features: [
      {
        title: 'Next.js 16 & React 19 Upgrade',
        desc: 'Migrated codebase to Next.js 16 App Router with Turbopack compilation and React 19 async paradigms.',
        category: 'Architecture'
      },
      {
        title: 'Interactive Pitch Deck (/me)',
        desc: 'Created keyboard and scroll-navigated presentation deck for pitching mission, skills, and BodhAI.',
        category: 'Feature'
      },
      {
        title: 'Engineering Case Studies (/case-studies)',
        desc: 'Built system architecture breakdown router with interactive metric telemetry.',
        category: 'Feature'
      },
      {
        title: 'Visual Design Gallery (/gallery)',
        desc: 'Added visual UI artifact showcase grid for design systems and interface graphic assets.',
        category: 'Feature'
      }
    ]
  },
  {
    version: 'v1.5.0',
    date: 'May 14, 2026',
    badge: 'FEATURE EXPANSION',
    badgeColor: 'bg-amber-500 text-white',
    summary: 'Experience Timeline Tracks, Skill Watermarks & Project Filter Tabs',
    features: [
      {
        title: 'Experience Timeline Tracks',
        desc: 'Built career tracking milestone component showcasing professional growth and achievements.',
        category: 'Feature'
      },
      {
        title: 'Project Filter System',
        desc: 'Added real-time category tab filtering across AI, Full Stack, and Mobile project archives.',
        category: 'UI/UX'
      }
    ]
  },
  {
    version: 'v1.0.0',
    date: 'January 10, 2026',
    badge: 'INITIAL RELEASE',
    badgeColor: 'bg-gray-600 text-white',
    summary: 'Core Portfolio Launch, Hero Section, Projects Showcase & Contact Integration',
    features: [
      {
        title: 'Core Portfolio System',
        desc: 'Launched initial portfolio experience with Hero section, Projects grid, Disciplines, and Contact form.',
        category: 'Initial'
      }
    ]
  }
];

export default function ChangelogPage() {
  const scrollToVersion = (versionId: string) => {
    const el = document.getElementById(versionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-44 pb-24 px-6 md:px-16 relative">
      <div className="container mx-auto max-w-4xl">
        
        {/* Top Bar Navigation */}
        <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/15 bg-foreground/5 font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-primary hover:border-primary transition-all shadow-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <button
            suppressHydrationWarning
            onClick={() => scrollToVersion('v2.4.0')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7029] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md hover:bg-[#E65F1E] transition-colors cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>JUMP TO LATEST (v2.4.0)</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm font-bold">VERSION HISTORY</span>
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/60 font-semibold">CHANGELOG & UPDATES</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
            System <span className="italic font-light text-primary">Changelog</span>
          </h1>
          <p className="font-sans text-lg text-foreground/70 max-w-2xl font-medium mb-8">
            Complete version history, feature releases, performance optimizations, and design system updates.
          </p>

          {/* Quick Version Jump Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 flex items-center gap-2.5 flex-wrap shadow-md">
            <span className="font-mono text-[10px] uppercase font-bold text-foreground/50 tracking-wider mr-2">QUICK JUMP:</span>
            {changelogData.map((release) => (
              <button
                key={release.version}
                onClick={() => scrollToVersion(release.version)}
                className="font-mono text-xs font-bold px-3 py-1 rounded-full border border-foreground/15 bg-black/5 dark:bg-white/5 hover:border-primary hover:text-primary transition-all cursor-pointer"
              >
                {release.version}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-16 relative before:absolute before:left-4 md:before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-foreground/10">
          {changelogData.map((release, rIdx) => (
            <motion.div 
              key={release.version}
              id={release.version}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rIdx * 0.1 }}
              className="relative pl-12 md:pl-20 scroll-mt-32"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2.5 md:left-[27px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_#FF7029]" />

              {/* Version Header Card */}
              <div className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-xl mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl md:text-4xl font-bold text-foreground">{release.version}</span>
                    <span className={`font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${release.badgeColor}`}>
                      {release.badge}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-foreground/60 font-semibold">{release.date}</span>
                </div>

                <p className="font-sans text-base text-foreground/80 font-medium mb-6">
                  {release.summary}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {release.features.map((feat, fIdx) => (
                    <div 
                      key={fIdx}
                      className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-sans font-bold text-sm text-foreground">{feat.title}</span>
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary font-bold">
                          {feat.category}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-foreground/70 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Jump to Latest Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            suppressHydrationWarning
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#FF7029] hover:bg-[#E65F1E] text-white font-mono text-xs font-bold px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-all cursor-pointer border border-white/20"
          >
            <ArrowUp className="w-4 h-4" />
            <span>TOP (LATEST v2.4.0)</span>
          </button>
        </div>

      </div>
    </main>
  );
}
