'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowUpRight, ArrowRight, Filter, 
  Code2, BookOpen, Clock, ChevronDown
} from 'lucide-react';
import Footer from '@/components/Footer';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

type FilterType = 'ALL' | 'PROJECTS' | 'WRITINGS';

interface TimelineArtifact {
  id: string;
  type: 'Project' | 'Writing';
  date: string;
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  meta?: string;
  tags?: string[];
  linkUrl: string;
  linkText: string;
}

const timelineData: TimelineArtifact[] = [
  {
    id: '01',
    type: 'Writing',
    date: 'JAN 2026',
    year: '2026',
    title: 'Shaastra 2026 & The Tour of IIT Madras',
    subtitle: 'An unforgettable 5-day journey through Shaastra 2026 tech summit',
    desc: 'Deep dive into robotics exhibitions, AI symposiums, and engineering insights gathered during the annual tech festival at IIT Madras.',
    meta: '25 MIN READ',
    tags: ['IIT Madras', 'Tech Summit', 'AI & Robotics', 'Conference Log'],
    linkUrl: '/writings/shaastra-2026',
    linkText: 'READ PUBLICATION ↗'
  },
  {
    id: '02',
    type: 'Project',
    date: 'JAN 2025',
    year: '2025',
    title: 'BodhAI — AI-Powered Learning Practice Engine',
    subtitle: 'Smart MCQ generator, coding quiz engine, and personalized telemetry',
    desc: 'Architected and deployed a full-stack edtech platform utilizing React, Firebase, and Tailwind CSS. Features automated AI assessment generation and live performance telemetry.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'AI EdTech'],
    linkUrl: 'https://github.com/webdeveloperdesigner/BodhAI',
    linkText: 'VIEW REPOSITORY ↗'
  },
  {
    id: '03',
    type: 'Writing',
    date: 'DEC 2024',
    year: '2024',
    title: 'My Journey as a Full-Stack Developer',
    subtitle: 'From Varanasi to architecting AI-powered platforms',
    desc: 'Personal reflection on learning computer science fundamentals, mastering modern JavaScript ecosystems, and building production-grade software.',
    meta: '8 MIN READ',
    tags: ['Career Growth', 'Full Stack', 'Engineering Journey'],
    linkUrl: '/writings/my-journey',
    linkText: 'READ PUBLICATION ↗'
  },
  {
    id: '04',
    type: 'Writing',
    date: 'NOV 2024',
    year: '2024',
    title: 'Building BodhAI: An AI Learning Platform',
    subtitle: 'Engineering insights behind prompt engineering and database schemas',
    desc: 'Technical breakdown of building a scalable AI quiz platform, managing Firebase Firestore real-time state, and optimizing API response latency.',
    meta: '10 MIN READ',
    tags: ['Architecture', 'Prompt Engineering', 'State Management'],
    linkUrl: '/writings/building-bodhai',
    linkText: 'READ PUBLICATION ↗'
  },
  {
    id: '05',
    type: 'Project',
    date: 'OCT 2024',
    year: '2024',
    title: 'AI Healthcare Diagnostic Chatbot',
    subtitle: 'Intelligent medical guidance and symptom analysis assistant',
    desc: 'Developed a responsive healthcare web application providing instant preliminary medical advice, symptom evaluation, and emergency triage routing.',
    tags: ['React.js', 'Node.js', 'Python', 'OpenAI API'],
    linkUrl: 'https://github.com/webdeveloperdesigner/AI-Based-Chatbot-for-Healthcare-',
    linkText: 'VIEW REPOSITORY ↗'
  },
  {
    id: '06',
    type: 'Project',
    date: 'AUG 2024',
    year: '2024',
    title: 'Portfolio Website (v2 Architecture)',
    subtitle: 'Cinematic developer portfolio with Next.js 16 and Framer Motion',
    desc: 'High-performance portfolio built with Tailwind CSS v4, dark/light theme provider, hardware-accelerated 3D tilt cards, and executive engineering logs.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Framer Motion'],
    linkUrl: 'https://github.com/webdeveloperdesigner/PersonalBlog',
    linkText: 'VIEW REPOSITORY ↗'
  },
  {
    id: '07',
    type: 'Writing',
    date: 'SEP 2024',
    year: '2024',
    title: 'Lessons from My Web Development Internships',
    subtitle: 'Key takeaways from MotionCut and DigiHero experience',
    desc: 'Insights into client delivery, SEO performance optimization, responsive interface auditing, and agile team workflows.',
    meta: '7 MIN READ',
    tags: ['Internship Log', 'SEO Optimization', 'Web Development'],
    linkUrl: '/writings/lessons-from-internship',
    linkText: 'READ PUBLICATION ↗'
  },
  {
    id: '08',
    type: 'Project',
    date: 'NOV 2023',
    year: '2023',
    title: 'ERC-1155 Multi-Token Marketplace',
    subtitle: 'Decentralized digital asset exchange contract and frontend',
    desc: 'Architected smart contracts supporting batch minting, multi-token transfers, and decentralized royalty enforcement on EVM testnets.',
    tags: ['Solidity', 'Next.js', 'MongoDB', 'Web3.js'],
    linkUrl: 'https://github.com/webdeveloperdesigner',
    linkText: 'VIEW REPOSITORY ↗'
  },
  {
    id: '09',
    type: 'Project',
    date: 'AUG 2023',
    year: '2023',
    title: 'DAO Governance Voting System',
    subtitle: 'On-chain proposal voting with quadratic delegation',
    desc: 'Built an open-source decentralized autonomous organization portal enabling token-weighted voting and transparent proposal executions.',
    tags: ['Solidity', 'React', 'Snapshot', 'Hardhat'],
    linkUrl: 'https://github.com/webdeveloperdesigner',
    linkText: 'VIEW REPOSITORY ↗'
  }
];

export default function WorksWritingsTimelinePage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [openCardDetails, setOpenCardDetails] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '03': true
  });

  const toggleCardDetails = (id: string) => {
    setOpenCardDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredArtifacts = timelineData.filter(item => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'PROJECTS') return item.type === 'Project';
    if (activeFilter === 'WRITINGS') return item.type === 'Writing';
    return true;
  });

  const scrollToYear = (year: string) => {
    const el = document.getElementById(`year-${year}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <main className="min-h-screen bg-background text-foreground pt-36 md:pt-40 pb-24 px-4 sm:px-8 md:px-16 relative selection:bg-primary/30 selection:text-primary">
      {/* Background Decor */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* NAV HEADER */}
        <header className="flex items-center justify-between gap-4 mb-12 pb-6 border-b border-foreground/10">
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="font-mono text-xs text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF7029]" />
              <span>VIVEK / TIMELINE ARCHIVE</span>
            </Link>
          </div>

          <a 
            href="https://github.com/webdeveloperdesigner/PersonalBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider border-b border-foreground/30 hover:border-primary pb-0.5"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF7029]" />
          </a>
        </header>

        {/* HERO INTRO */}
        <section className="mb-12">
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-mono text-[#FF7029] text-xs font-bold uppercase tracking-widest">
              CAREER & PROJECT TIMELINE
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Works & <span className="italic font-light text-[#FF7029]">Writings</span>
            </h1>
            <p className="font-sans text-lg text-foreground/70 max-w-2xl font-medium leading-relaxed">
              Software I&apos;ve built, ideas I&apos;ve written, and things I&apos;ve explored along the way.
            </p>
          </div>

          {/* METADATA STRIP */}
          <div className="flex items-center gap-8 py-4 border-y border-foreground/10 font-mono text-xs uppercase tracking-widest text-foreground/60 font-bold">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl text-foreground font-black">09</span>
              <span>ARTIFACTS</span>
            </div>
            <span className="text-foreground/20">•</span>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl text-[#FF7029] font-black">05</span>
              <span>PROJECTS</span>
            </div>
            <span className="text-foreground/20">•</span>
            <div className="flex items-center gap-2">
              <span className="font-display text-xl text-foreground font-black">04</span>
              <span>WRITINGS</span>
            </div>
          </div>
        </section>

        {/* STICKY FILTER BAR */}
        <section className="mb-12 pb-6 border-b border-foreground/10 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-foreground/50">
              FILTER
            </span>
            <div className="flex items-center gap-2">
              {(['ALL', 'PROJECTS', 'WRITINGS'] as FilterType[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`font-mono text-xs font-bold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeFilter === f 
                      ? 'bg-[#FF7029] text-white shadow-sm' 
                      : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <span className="font-mono text-xs text-foreground/40 font-bold uppercase tracking-widest hidden sm:inline">
            2026 ↓ 2023
          </span>
        </section>

        {/* MAIN LAYOUT: YEAR INDEX + TIMELINE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* YEAR INDEX SIDEBAR */}
          <aside className="lg:col-span-3 lg:sticky lg:top-36">
            <div className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-foreground/40 mb-4 pb-2 border-b border-foreground/10">
              INDEX
            </div>

            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 font-mono text-xs font-bold">
              {['2026', '2025', '2024', '2023'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => scrollToYear(yr)}
                  className="flex items-center justify-between text-foreground/70 hover:text-[#FF7029] transition-colors cursor-pointer py-1 text-left shrink-0 group"
                >
                  <span>{yr}</span>
                  <span className="text-[#FF7029] font-extrabold ml-4">○</span>
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN TIMELINE CARDS STREAM */}
          <div className="lg:col-span-9 flex flex-col gap-12">
            <AnimatePresence mode="popLayout">
              {['2026', '2025', '2024', '2023'].map((yr) => {
                const yearItems = filteredArtifacts.filter(item => item.year === yr);
                if (yearItems.length === 0) return null;

                return (
                  <div key={yr} id={`year-${yr}`} className="scroll-mt-36 flex flex-col gap-8">
                    {/* Year Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-foreground/15">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF7029]" />
                        <h2 className="font-display text-2xl md:text-3xl font-black text-foreground tracking-tight">{yr}</h2>
                      </div>
                      <span className="font-mono text-[10px] text-foreground/50 font-bold uppercase tracking-widest">
                        {yearItems.length} {yearItems.length === 1 ? 'ENTRY' : 'ENTRIES'}
                      </span>
                    </div>

                    {/* TIMELINE GUIDE & CARDS STREAM */}
                    <div className="relative border-l-2 border-foreground/15 pl-6 md:pl-10 flex flex-col gap-8">
                      {yearItems.map((art) => {
                        const isOpen = !!openCardDetails[art.id];
                        const isWriting = art.type === 'Writing';

                        return (
                          <motion.article 
                            key={art.id}
                            layout
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="p-6 sm:p-8 rounded-2xl bg-background border border-foreground/15 shadow-sm hover:border-[#FF7029]/50 transition-all flex flex-col gap-4 relative overflow-hidden group"
                          >
                            {/* TIMELINE NODE DOT */}
                            <div className="absolute left-[-31px] md:left-[calc(-40px-6px)] top-8 w-3.5 h-3.5 rounded-full bg-background border-2 border-[#FF7029] shadow-sm flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FF7029]" />
                            </div>

                            {/* CARD TOGGLE HEADER */}
                            <button
                              onClick={() => toggleCardDetails(art.id)}
                              className="w-full text-left flex flex-col gap-2 cursor-pointer select-none group/header"
                            >
                              <div className="flex items-center justify-between font-mono text-xs font-bold w-full">
                                <span className={art.type === 'Project' ? 'text-[#FF7029]' : 'text-foreground/80'}>
                                  {art.type === 'Project' ? '◈ PROJECT' : '✦ WRITING'}
                                </span>
                                <div className="flex items-center gap-3">
                                  <span className="text-foreground/40 uppercase tracking-widest">{art.date}</span>
                                  <span className="text-[#FF7029] text-xs font-bold flex items-center gap-1">
                                    <span>{isOpen ? 'LESS' : 'DETAILS'}</span>
                                    <ChevronDown className={`w-3.5 h-3.5 text-[#FF7029] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                  </span>
                                </div>
                              </div>

                              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground group-hover/header:text-primary transition-colors tracking-tight">
                                {art.title}
                              </h3>

                              <p className="font-sans text-sm text-[#FF7029] font-semibold">
                                {art.subtitle}
                              </p>
                            </button>

                            {/* COLLAPSIBLE DETAILS & ACTIONS */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3, ease: 'easeOut' }}
                                  className="flex flex-col gap-4 pt-3 border-t border-foreground/10 overflow-hidden"
                                >
                                  <p className="font-sans text-sm text-foreground/75 leading-relaxed font-medium">
                                    {art.desc}
                                  </p>

                                  <div className="pt-3 border-t border-foreground/10 flex items-center justify-between flex-wrap gap-4 font-mono text-xs font-bold">
                                    <div className="flex items-center gap-2">
                                      {art.tags?.map(t => (
                                        <span key={t} className="text-foreground/60 text-[10px] uppercase tracking-widest">
                                          {t} •
                                        </span>
                                      ))}
                                    </div>

                                    <Link
                                      href={art.linkUrl}
                                      target={art.linkUrl.startsWith('http') ? '_blank' : '_self'}
                                      rel={art.linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                                      className="inline-flex items-center gap-1.5 text-[#FF7029] hover:underline uppercase tracking-wider font-extrabold text-xs ml-auto"
                                    >
                                      <span>{art.meta || art.linkText}</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                          </motion.article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </main>
    <Footer />
    </>
  );
}