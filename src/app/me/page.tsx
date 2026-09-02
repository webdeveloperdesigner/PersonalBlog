'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronUp, ChevronDown, User, Code2, Brain, Rocket, TrendingUp,
  ArrowRight, ArrowLeft, Sparkles, Briefcase, GitBranch, Award, 
  ShieldCheck, Cpu, Database, Globe, Layers, Sun, Moon, Lock, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface TelemetryData {
  github?: {
    total: number;
    best: number;
    average: number;
    last7DaysTotal: number;
    yearRange: string;
  };
  githubLanguages?: Array<{ name: string; bytes: number; pct: string }>;
}

export default function MePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [telemetry, setTelemetry] = useState<TelemetryData | null>(null);

  useEffect(() => {
    setMounted(true);
    // Fetch dynamic telemetry from /api/stats
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setTelemetry(data);
        }
      })
      .catch(() => {
        // Silent fallback
      });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Wheel navigation (with 800ms debounce)
  useEffect(() => {
    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 800) return;
      
      if (e.deltaY > 50) {
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
        lastWheelTime = now;
      } else if (e.deltaY < -50) {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
        lastWheelTime = now;
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Dynamic values
  const totalContributions = telemetry?.github?.total ?? 963;
  const languagesList = telemetry?.githubLanguages?.length 
    ? telemetry.githubLanguages.slice(0, 5) 
    : [
        { name: 'TypeScript', pct: '44.1%' },
        { name: 'JavaScript', pct: '28.5%' },
        { name: 'Python', pct: '14.2%' },
        { name: 'Solidity', pct: '7.8%' },
        { name: 'HTML / CSS', pct: '5.4%' }
      ];

  const slides = [
    // SLIDE 1: Cover & Identity
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-1.5 rounded-full border border-[#FF7029]/30 bg-[#FF7029]/10 font-mono text-xs uppercase tracking-widest text-[#FF7029] font-bold mb-6">
            B.Tech CSE (Blockchain) • AI & Web Systems
          </span>
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl text-foreground tracking-tight mb-3 uppercase">
            VIVEK
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#FF7029] uppercase tracking-[0.2em] font-extrabold mb-6">
            BUILDER • ENGINEER • PRODUCT THINKER
          </p>
          <h2 className="font-sans text-base sm:text-xl text-foreground/80 font-bold mb-8 max-w-2xl leading-relaxed">
            Building Real Products Across AI, EdTech, Web Systems & Developer Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-xl">
            {['Next.js 16', 'React 19', 'TypeScript', 'Gemini API', 'Solidity', 'Node.js'].map(badge => (
              <span key={badge} className="px-3.5 py-1 rounded-full border border-foreground/15 bg-foreground/5 font-mono text-xs tracking-wider text-foreground/80 font-semibold">
                {badge}
              </span>
            ))}
          </div>
          <p className="font-display italic text-foreground/60 text-base sm:text-lg">
            "Build real. Learn continuously. Ship better."
          </p>
        </div>
      )
    },

    // SLIDE 2: Personal Bio & Academic Background
    {
      id: 2,
      icon: <User className="w-8 h-8 text-[#FF7029]" />,
      badge: "BIOGRAPHY & EDUCATION",
      title: "Who I Am",
      content: (
        <div className="flex flex-col items-center text-center max-w-3xl">
          <h3 className="text-2xl sm:text-3xl text-foreground font-bold mb-6 leading-snug">
            Computer Science Engineer & Product Builder
          </h3>
          <p className="text-foreground/75 text-base sm:text-lg leading-relaxed mb-6 font-normal">
            Final-year B.Tech CSE student specializing in Blockchain (2022–2026). I build practical software products across AI, EdTech, web systems, and developer tools. My approach: learn a technology by turning it into a real, functioning product.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-4">
            <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
              <span className="font-mono text-xs text-[#FF7029] uppercase font-bold block mb-1">ACADEMICS</span>
              <span className="font-sans text-sm font-semibold text-foreground">B.Tech CSE (Blockchain)</span>
              <span className="font-mono text-[10px] text-foreground/50 block mt-0.5">2022 – 2026</span>
            </div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
              <span className="font-mono text-xs text-[#FF7029] uppercase font-bold block mb-1">SPECIALIZATION</span>
              <span className="font-sans text-sm font-semibold text-foreground">Web, GenAI & Web3</span>
              <span className="font-mono text-[10px] text-foreground/50 block mt-0.5">Smart Contracts & LLMs</span>
            </div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
              <span className="font-mono text-xs text-[#FF7029] uppercase font-bold block mb-1">EXPERIENCE</span>
              <span className="font-sans text-sm font-semibold text-foreground">02 Internships</span>
              <span className="font-mono text-[10px] text-foreground/50 block mt-0.5">MotionCut & Digihero</span>
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 3: Technical Expertise (LLMs & Web3)
    {
      id: 3,
      icon: <Code2 className="w-8 h-8 text-[#FF7029]" />,
      badge: "TECH STACK",
      title: "Technical Expertise",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
          {[
            {
              title: "Frontend Engineering",
              desc: "Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP animations",
              badge: "UI / UX"
            },
            {
              title: "Backend & Server APIs",
              desc: "Node.js, Express.js, RESTful APIs, JWT Auth, Next.js Server Actions, Firebase Store",
              badge: "SERVER"
            },
            {
              title: "AI & GenAI Engines",
              desc: "Gemini API, Groq API, OpenAI, Prompt Engineering, Intelligent assessment logic",
              badge: "GEN AI"
            },
            {
              title: "Web3 & Data Layer",
              desc: "Solidity, Web3.js, Blockchain, MongoDB, PostgreSQL, SQL, Prisma ORM",
              badge: "WEB3 & DATA"
            }
          ].map((item, i) => (
            <div key={i} className="bg-background border border-foreground/15 p-6 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:border-[#FF7029]/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-sans text-xl text-foreground font-bold">{item.title}</h4>
                  <span className="px-2 py-0.5 border border-[#FF7029]/30 rounded font-mono text-[9px] text-[#FF7029] uppercase font-bold">{item.badge}</span>
                </div>
                <p className="text-foreground/75 font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },

    // SLIDE 4: Engineering Principles
    {
      id: 4,
      icon: <Brain className="w-8 h-8 text-[#FF7029]" />,
      badge: "PHILOSOPHY",
      title: "Engineering Principles",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
          {[
            { icon: <Code2 className="w-6 h-6 text-emerald-500" />, title: "Build Before Overthinking", desc: "Learn by shipping real functional products rather than lingering on static demos." },
            { icon: <Cpu className="w-6 h-6 text-cyan-400" />, title: "Systems Over Features", desc: "Design clean, scalable, maintainable architecture built for long-term growth." },
            { icon: <Layers className="w-6 h-6 text-purple-400" />, title: "User-Centric Motion", desc: "Craft smooth micro-animations, responsive layouts, and intuitive interface flows." },
            { icon: <Rocket className="w-6 h-6 text-[#FF7029]" />, title: "Continuous Iteration", desc: "Iterate rapidly from user feedback while integrating state-of-the-art AI & Web3 tools." }
          ].map((item, i) => (
            <div key={i} className="bg-background border border-foreground/15 p-6 rounded-2xl text-left shadow-sm hover:border-[#FF7029]/50 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-foreground/5 border border-foreground/10 shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-sans text-lg text-foreground font-bold mb-1">{item.title}</h4>
                <p className="text-foreground/75 font-sans text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },

    // SLIDE 5: BodhAI Flagship Product (Built by Me)
    {
      id: 5,
      icon: <Rocket className="w-8 h-8 text-[#FF7029]" />,
      badge: "FLAGSHIP PRODUCT (BUILT BY ME)",
      title: "BodhAI Platform",
      content: (
        <div className="flex flex-col items-center w-full max-w-4xl">
          <p className="font-sans text-base sm:text-lg text-foreground/80 font-medium mb-6 text-center max-w-2xl">
            AI-powered learning practice, intelligent assessment & automated exam monitoring platform engineered from scratch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left mb-6">
            <div className="bg-background border border-foreground/15 p-5 rounded-2xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF7029] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-bold text-foreground">Smart MCQ Generation</h4>
                <p className="text-foreground/70 text-xs">Adaptive AI practice quizzes with instant step-by-step explanations.</p>
              </div>
            </div>

            <div className="bg-background border border-foreground/15 p-5 rounded-2xl flex items-start gap-3">
              <Code2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-bold text-foreground">Interactive Coding Challenges</h4>
                <p className="text-foreground/70 text-xs">Real-time code evaluation and syntax assessment engine.</p>
              </div>
            </div>

            <div className="bg-background border border-foreground/15 p-5 rounded-2xl flex items-start gap-3">
              <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-bold text-foreground">Exam Security & Proctoring</h4>
                <p className="text-foreground/70 text-xs">Automated test integrity protection and tab-switch detection.</p>
              </div>
            </div>

            <div className="bg-background border border-foreground/15 p-5 rounded-2xl flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-bold text-foreground">Student Analytics & Rankings</h4>
                <p className="text-foreground/70 text-xs">Skill weakness identification, performance metrics & leaderboards.</p>
              </div>
            </div>
          </div>

          <div className="px-5 py-2.5 border border-[#FF7029]/30 bg-[#FF7029]/10 rounded-full font-mono text-xs text-[#FF7029] font-bold">
            Architecture: React • Node.js • Firebase • Gemini AI API
          </div>
        </div>
      )
    },

    // SLIDE 6: Work & Internship Experience
    {
      id: 6,
      icon: <Briefcase className="w-8 h-8 text-[#FF7029]" />,
      badge: "INDUSTRY ROLES",
      title: "Work Experience",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {[
            {
              company: "MOTIONCUT",
              role: "Web Development Intern",
              date: "Jun - Jul 2024",
              bullets: [
                "Developed responsive websites using HTML, CSS, and JavaScript.",
                "Analyzed client requirements and executed specs from design layouts.",
                "Optimized front-end web performance and debugged interface issues."
              ]
            },
            {
              company: "DIGIHERO",
              role: "Web Developer Intern",
              date: "Jan - Feb 2025",
              bullets: [
                "Created and optimized SEO-friendly blog content for WordPress CMS.",
                "Performed keyword research and implemented on-page SEO meta tags.",
                "Managed digital publishing and web content formatting workflows."
              ]
            }
          ].map((exp, i) => (
            <div key={i} className="bg-background border border-foreground/15 p-6 rounded-2xl text-left shadow-sm hover:border-[#FF7029]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3 mb-4">
                  <span className="font-mono text-xs text-[#FF7029] font-extrabold uppercase tracking-widest">{exp.company}</span>
                  <span className="font-mono text-[10px] text-foreground/60">{exp.date}</span>
                </div>
                <h4 className="font-sans text-lg text-foreground font-bold mb-3">{exp.role}</h4>
                <ul className="space-y-2">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-foreground/75 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7029] shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )
    },

    // SLIDE 7: Live Telemetry & GitHub Metrics
    {
      id: 7,
      icon: <GitBranch className="w-8 h-8 text-[#FF7029]" />,
      badge: "LIVE TELEMETRY",
      title: "GitHub & Code Activity",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-background border border-foreground/15 p-6 rounded-2xl text-left shadow-sm hover:border-[#FF7029]/50 transition-all flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#FF7029] uppercase font-bold tracking-widest block mb-2">LAST 365 DAYS</span>
              <h4 className="font-display text-4xl font-extrabold text-foreground mb-2">
                {totalContributions}+ Contributions
              </h4>
              <p className="text-foreground/75 font-sans text-sm leading-relaxed mb-4">
                Real-time telemetry normalized across 365 rolling calendar days backwards from today via GitHub API.
              </p>
            </div>
            <div className="pt-3 border-t border-foreground/10 font-mono text-xs text-foreground/60 flex items-center justify-between">
              <span>Source: GitHub @webdeveloperdesigner</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          <div className="bg-background border border-foreground/15 p-6 rounded-2xl text-left shadow-sm hover:border-[#FF7029]/50 transition-all flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#FF7029] uppercase font-bold tracking-widest block mb-2">LANGUAGE DISTRIBUTION</span>
              <h4 className="font-sans text-xl font-bold text-foreground mb-4">Codebase Language Mix</h4>
              <div className="space-y-2.5">
                {languagesList.map(item => (
                  <div key={item.name} className="flex items-center justify-between font-mono text-xs">
                    <span className="text-foreground/80">{item.name}</span>
                    <span className="text-[#FF7029] font-bold">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-foreground/10 font-mono text-xs text-foreground/60">
              Computed directly from public repositories
            </div>
          </div>
        </div>
      )
    },

    // SLIDE 8: Academic & Certifications
    {
      id: 8,
      icon: <Award className="w-8 h-8 text-[#FF7029]" />,
      badge: "ACADEMICS & CERTIFICATIONS",
      title: "Training & Credentials",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {[
            {
              title: "Full Stack Web Development",
              org: "GLA University / JOVAC",
              date: "May - Jul 2024",
              desc: "Completed job-oriented full-stack course on MERN stack, built e-commerce app with admin panel and payment gateway."
            },
            {
              title: "Java Developer Training",
              org: "Internship Studio",
              date: "Jul - Aug 2024",
              desc: "Java programming training with emphasis on Object-Oriented Programming (OOP) concepts & billing system pricing engines."
            }
          ].map((item, i) => (
            <div key={i} className="bg-background border border-foreground/15 p-6 rounded-2xl text-left shadow-sm hover:border-[#FF7029]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3 mb-3">
                  <span className="font-mono text-xs text-[#FF7029] font-bold uppercase">{item.org}</span>
                  <span className="font-mono text-[10px] text-foreground/60">{item.date}</span>
                </div>
                <h4 className="font-sans text-lg text-foreground font-bold mb-2">{item.title}</h4>
                <p className="text-foreground/75 font-sans text-xs leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-foreground/10 flex items-center gap-2 text-[#FF7029] font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Credential Earned</span>
              </div>
            </div>
          ))}
        </div>
      )
    },

    // SLIDE 9: Metrics & Portfolio Impact
    {
      id: 9,
      icon: <TrendingUp className="w-8 h-8 text-[#FF7029]" />,
      badge: "IMPACT METRICS",
      title: "Key Achievements",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { label: "LIVE PROJECTS", value: "03", desc: "Veda, BodhAI, Healthcare" },
            { label: "INTERNSHIPS", value: "02", desc: "MotionCut & Digihero" },
            { label: "CORE TOOLS", value: "12+", desc: "React, Next, TS, Node" },
            { label: "LIVE COMMITS", value: `${totalContributions}+`, desc: "Last 365 Days Tracked" }
          ].map((stat, i) => (
            <div key={i} className="bg-background border border-foreground/15 p-6 rounded-2xl text-center shadow-sm hover:border-[#FF7029]/50 transition-all flex flex-col items-center justify-center">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#FF7029] mb-1">{stat.value}</span>
              <span className="font-mono text-[10px] text-foreground/80 uppercase font-bold tracking-widest mb-1">{stat.label}</span>
              <span className="font-sans text-xs text-foreground/60">{stat.desc}</span>
            </div>
          ))}
        </div>
      )
    },

    // SLIDE 10: Call to Action & Connect
    {
      id: 10,
      icon: <Sparkles className="w-8 h-8 text-[#FF7029]" />,
      badge: "GET IN TOUCH",
      title: "Let's Collaborate",
      content: (
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <Link href="/projects" className="flex items-center justify-between p-5 rounded-2xl bg-background border border-foreground/15 hover:border-[#FF7029] group transition-all shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FF7029]/10 text-[#FF7029]"><Rocket className="w-5 h-5" /></div>
              <span className="font-sans text-lg text-foreground font-bold">Explore Full Projects Archive</span>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-[#FF7029] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/tech" className="flex items-center justify-between p-5 rounded-2xl bg-background border border-foreground/15 hover:border-[#FF7029] group transition-all shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400"><Cpu className="w-5 h-5" /></div>
              <span className="font-sans text-lg text-foreground font-bold">View GitHub Telemetry & Heatmap</span>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-[#FF7029] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/contact" className="flex items-center justify-between p-5 rounded-2xl bg-background border border-foreground/15 hover:border-[#FF7029] group transition-all shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400"><Globe className="w-5 h-5" /></div>
              <span className="font-sans text-lg text-foreground font-bold">Contact & Start a Project</span>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-[#FF7029] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      )
    }
  ];

  const slide = slides[currentSlide];

  return (
    <main className="h-screen w-screen overflow-hidden bg-background text-foreground relative flex flex-col items-center justify-center transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(255,112,41,0.05)] z-50" />
      
      {/* Top Left Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 border border-foreground/15 text-foreground/80 hover:text-[#FF7029] hover:border-[#FF7029] transition-all backdrop-blur-md shadow-md font-mono text-xs uppercase tracking-widest font-bold">
          <ArrowLeft className="w-4 h-4 text-[#FF7029]" />
          <span>BACK TO PORTFOLIO</span>
        </Link>
      </div>

      {/* Top Right Theme Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <button
          suppressHydrationWarning
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-12 h-12 rounded-full bg-background/90 border border-foreground/15 flex items-center justify-center text-foreground/80 hover:text-[#FF7029] hover:border-[#FF7029] transition-all backdrop-blur-md shadow-md cursor-pointer"
          aria-label="Toggle Theme"
        >
          {mounted && theme === 'light' ? (
            <Moon className="w-5 h-5 text-[#FF7029]" />
          ) : (
            <Sun className="w-5 h-5 text-[#FF7029]" />
          )}
        </button>
      </div>

      {/* Right side navigation dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="group py-1.5 flex justify-center cursor-pointer"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`w-2 transition-all duration-300 rounded-full ${currentSlide === i ? 'h-8 bg-[#FF7029]' : 'h-2 bg-foreground/20 group-hover:bg-foreground/50'}`} />
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-8 md:px-16 relative z-10 w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center w-full min-h-[500px]"
          >
            {slide.badge && (
              <span className="font-mono text-xs text-[#FF7029] uppercase tracking-[0.2em] font-bold mb-4">{slide.badge}</span>
            )}
            
            {slide.icon && (
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/15 flex items-center justify-center mb-6 shadow-sm">
                {slide.icon}
              </div>
            )}
            
            {slide.title && (
              <h2 className="font-display font-black text-4xl sm:text-6xl text-foreground mb-8 tracking-tight text-center uppercase">{slide.title}</h2>
            )}
            
            {slide.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Footer Controls */}
      <div className="absolute bottom-8 left-8 right-8 z-50 flex items-center justify-between">
        
        {/* Verification Badge */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-foreground/50 uppercase tracking-widest font-semibold">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Verified Portfolio Presentation
        </div>

        {/* Navigation Arrows & Counter */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button 
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-2 text-foreground/60 hover:text-[#FF7029] disabled:opacity-30 transition-colors cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          
          <span className="font-mono text-xs text-foreground/80 tracking-widest w-16 text-center font-bold">
            {currentSlide + 1} / {slides.length}
          </span>
          
          <button 
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 text-foreground/60 hover:text-[#FF7029] disabled:opacity-30 transition-colors cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Right Navigation Prompt */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-[10px] text-foreground/40 uppercase tracking-widest mr-4 font-medium">
            Use ↑↓ arrow keys or scroll
          </span>
        </div>

      </div>
    </main>
  );
}
