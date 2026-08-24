'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, Sparkles, CheckCircle2, Rocket, Zap, ShieldCheck, 
  ArrowUpRight, ExternalLink, Code2, Globe, Cpu
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

const whatsNewItems = [
  {
    id: '00',
    badge: 'COMING SOON',
    badgeColor: 'bg-purple-600 text-white',
    title: 'Chat with my Digital Twin',
    date: 'Upcoming Feature',
    desc: "Don't want to read through a traditional resume? I've trained a custom AI agent on my complete portfolio, skills, and work history. Get instant, context-aware answers about my engineering background.",
    tags: ['AI Agent', 'Digital Twin', 'Portfolio RAG', 'GenAI'],
    link: '#'
  },
  {
    id: '01',
    badge: 'NEW ROUTE',
    badgeColor: 'bg-cyan-500 text-white',
    title: '3D Core Capabilities & Kinetic Marquee (/core)',
    date: 'August 24, 2026',
    desc: 'Interactive 3D horizontal perspective carousel stage paired with an infinite kinetic velocity marquee banner ("CREATIVE ✦ ENGINEERING") featuring webkit stroke text effects.',
    tags: ['3D Stage', 'Framer Motion', 'Marquee', 'Core Capabilities'],
    link: '/core'
  },
  {
    id: '02',
    badge: 'LIVE WIDGET',
    badgeColor: 'bg-[#FF7029] text-white',
    title: 'GitHub Real-Time Contribution Heatmap & Tech Matrix (/tech)',
    date: 'August 24, 2026',
    desc: 'Real-time theme-adaptive GitHub commit contribution matrix widget integrated with backend API proxies, alongside an interactive skills and tools matrix.',
    tags: ['GitHub Heatmap', 'Tech Stack', 'API Proxy', 'Widgets'],
    link: '/tech'
  },
  {
    id: '03',
    badge: 'LIVE NOW',
    badgeColor: 'bg-[#FF7029] text-white',
    title: 'Executive Experience Timeline Architecture',
    date: 'August 23, 2026',
    desc: 'Updated career experience timeline cards formatted in exact executive structure featuring MotionCut Web Development, Digihero SEO Optimization, and BodhAI AI Learning Platform with single-line titles and verification certificate links.',
    tags: ['Timeline', 'MotionCut', 'Digihero', 'BodhAI', 'Certificates'],
    link: '/#experience'
  },
  {
    id: '04',
    badge: 'ARCHITECTURE',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Full-Site Smooth Anchor Scroll Engine',
    date: 'August 23, 2026',
    desc: 'Engineered smooth scroll interceptor handlers routing /#hero, /#about, /#experience, /#projects, and /#blog seamlessly across desktop and mobile navigation.',
    tags: ['Smooth Scroll', 'Anchor Navigation', 'Navbar', 'UX Engine'],
    link: '/#projects'
  },
  {
    id: '05',
    badge: 'ENGINEERING LOG',
    badgeColor: 'bg-purple-500 text-white',
    title: 'GitHub-Style Engineering Release Log (/changelog)',
    date: 'August 23, 2026',
    desc: 'Redesigned /changelog with structured change cards, collapsible open/close details, metric badges, releases index sidebar, and direct GitHub commit links.',
    tags: ['Changelog', 'GitHub Integration', 'Collapsible Accordion', 'Release Feed'],
    link: '/changelog'
  },
  {
    id: '06',
    badge: 'FEATURED PROJECT',
    badgeColor: 'bg-blue-500 text-white',
    title: 'BodhAI — AI-Powered Learning Practice Platform',
    date: 'August 2026',
    desc: 'Interactive MCQ & coding practice platform powered by React, Firebase, and Tailwind CSS. Features custom AI assessment, performance tracking, and live quiz generator.',
    tags: ['React', 'Firebase', 'Tailwind', 'AI/EdTech'],
    link: 'https://github.com/webdeveloperdesigner/BodhAI'
  },
  {
    id: '07',
    badge: 'HEALTHCARE AI',
    badgeColor: 'bg-cyan-500 text-white',
    title: 'AI Healthcare Chatbot',
    date: 'August 2026',
    desc: 'Intelligent healthcare assistant website providing user-friendly medical guidance, symptom analysis, and immediate doctor referral dispatch.',
    tags: ['AI/Healthcare', 'Python', 'React', 'REST API'],
    link: 'https://github.com/webdeveloperdesigner/AI-Based-Chatbot-for-Healthcare-'
  },
  {
    id: '08',
    badge: '2026 EDITION',
    badgeColor: 'bg-amber-500 text-white',
    title: 'Veda Resume — Smart ATS Optimization Engine',
    date: '2026 Edition',
    desc: 'Next-generation AI resume builder and ATS scanner engineered to optimize resume keywords and increase interview callbacks.',
    tags: ['GenAI', 'Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/webdeveloperdesigner/veda-resume'
  },
  {
    id: '09',
    badge: 'MOBILE OPTIMIZATION',
    badgeColor: 'bg-teal-500 text-white',
    title: 'Responsive Development Notice Banner',
    date: 'August 23, 2026',
    desc: 'Re-engineered top development banner with adaptive mobile typography and clean icon-only GitHub quick action button.',
    tags: ['Mobile UX', 'Notice Banner', 'Responsive', 'GitHub Icon'],
    link: '/'
  },
  {
    id: '10',
    badge: 'NAV & THEME',
    badgeColor: 'bg-indigo-500 text-white',
    title: 'Glassmorphic Sticky Header & Theme Engine',
    date: 'August 23, 2026',
    desc: 'Configured sticky backdrop-blur-xl navbar with persistent VIVEK logo, Explore navigation dropdown, and synchronized Light/Dark mode switcher.',
    tags: ['Header', 'Glassmorphism', 'Dark Mode', 'Explore Dropdown'],
    link: '/'
  },
  {
    id: '11',
    badge: 'SYSTEM FOOTER',
    badgeColor: 'bg-rose-500 text-white',
    title: 'Global System Footer Integration',
    date: 'August 23, 2026',
    desc: 'Integrated marquee text strip, brand wordmark, quick navigation shortcuts, and smooth back-to-top controls across all subpages.',
    tags: ['Footer', 'Marquee', 'Branding', 'Subpages'],
    link: '/#contact'
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

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 bg-foreground/5 font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary hover:border-primary transition-all shadow-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <a 
            href="https://github.com/webdeveloperdesigner/PersonalBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7029] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md hover:bg-[#E65F1E] transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>CHECK GITHUB REPO</span>
          </a>
        </div>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded border border-[#FF7029]/30 text-[#FF7029] font-mono text-xs uppercase tracking-widest font-bold">
              ✦ LIVE STATUS
            </span>
            <span className="font-mono text-xs text-foreground/60 uppercase tracking-widest font-semibold">
              REAL-TIME PORTFOLIO UPDATES
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            What&apos;s <span className="text-[#FF7029] italic font-light">New</span>
          </h1>

          <p className="font-sans text-lg text-foreground/75 max-w-2xl leading-relaxed font-medium">
            Explore the latest feature rollouts, active project releases, experience additions, and system enhancements across Vivek&apos;s personal developer ecosystem.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="flex flex-col gap-8">
          {whatsNewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-foreground/15 rounded-3xl p-6 md:p-8 hover:border-[#FF7029]/45 transition-all duration-300 shadow-lg group relative overflow-hidden"
            >
              {/* Card Top Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-foreground/10">
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs text-foreground/60 font-semibold">{item.date}</span>
                </div>
                <span className="font-mono text-xs text-[#FF7029] font-bold">#{item.id}</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h2>

              {/* Description */}
              <p className="font-sans text-base text-foreground/75 leading-relaxed mb-6 font-medium">
                {item.desc}
              </p>

              {/* Tags & Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-foreground/10">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/70 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF7029] font-bold uppercase tracking-wider hover:underline group-hover:translate-x-1 transition-transform"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 text-center pt-8 border-t border-foreground/10">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary font-mono text-xs uppercase tracking-widest font-bold transition-colors"
          >
            <span>VIEW FULL SYSTEM CHANGELOG (v2.5.0)</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
    <Footer />
    </>
  );
}
