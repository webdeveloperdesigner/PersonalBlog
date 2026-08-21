'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronUp, ChevronDown, Volume2, Settings, Menu, 
  User, Code2, Brain, Rocket, TrendingUp, Eye, ArrowRight, ArrowLeft,
  Sparkles, Target, Sun, Moon
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const slides = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center text-center">
        <h1 className="font-display text-7xl md:text-9xl text-foreground mb-4 tracking-tighter">VIVEK</h1>
        <h2 className="font-sans text-xl md:text-2xl text-primary font-bold mb-8">Tech • AI • EdTech Innovator</h2>
        <p className="font-sans text-foreground/80 text-lg font-medium mb-8">Founder @ BodhAI</p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Web', 'Firebase', 'AI Systems'].map(badge => (
            <span key={badge} className="px-4 py-1.5 rounded-full border border-foreground/15 bg-foreground/5 font-mono text-xs uppercase tracking-widest text-foreground/80 font-semibold">{badge}</span>
          ))}
        </div>
        <p className="font-display italic text-foreground/60 text-xl">"Always building. Always learning."</p>
      </div>
    )
  },
  {
    id: 2,
    icon: <User className="w-8 h-8 text-primary" />,
    title: "Who I Am",
    content: (
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl text-foreground font-bold mb-6">Builder, learner, and system thinker</h3>
        <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mb-4 font-medium">Focused on creating scalable tech & AI-driven education platforms.</p>
        <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl font-medium">Believe in learning by building real products.</p>
      </div>
    )
  },
  {
    id: 3,
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "What I Do",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {[
          { icon: <Sparkles className="w-6 h-6 text-amber-500" />, text: "Design & build web systems" },
          { icon: <Brain className="w-6 h-6 text-purple-500" />, text: "Develop AI-powered platforms" },
          { icon: <Rocket className="w-6 h-6 text-primary" />, text: "Create EdTech solutions that scale" },
          { icon: <Target className="w-6 h-6 text-emerald-500" />, text: "Think in systems, not shortcuts" }
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 p-6 rounded-2xl flex items-center gap-4 text-left shadow-lg hover:border-primary/40 transition-all">
            <div className="p-2 rounded-xl bg-foreground/5">{item.icon}</div>
            <p className="text-foreground/90 font-sans font-semibold text-base">{item.text}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 4,
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Mindset",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {["Build in public", "Learn continuously", "Solve real problems", "Focus on long-term impact"].map((item, i) => (
          <div key={i} className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 p-6 rounded-2xl text-center shadow-lg hover:border-primary/40 transition-all">
            <p className="text-foreground font-sans text-xl font-bold">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 5,
    icon: <Rocket className="w-8 h-8 text-primary" />,
    badge: "MY FLAGSHIP WORK",
    title: "BodhAI",
    content: (
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl text-foreground font-bold mb-6">AI-powered education & assessment platform</h3>
        <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mb-12 font-medium">Built for students, institutions, and the future of learning.</p>
        <div className="px-6 py-3 border border-primary/30 bg-primary/10 rounded-full">
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Founder-led, system-driven</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Skills & Stack",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {[
          { t: "Frontend", s: "Web, UI systems" },
          { t: "Backend", s: "Firebase, APIs" },
          { t: "AI", s: "Proctoring, automation, smart logic" },
          { t: "Product", s: "Thinking & architecture" }
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 p-6 rounded-2xl text-left shadow-lg hover:border-primary/40 transition-all">
            <h4 className="font-display text-2xl text-primary font-bold mb-2">{item.t}</h4>
            <p className="text-foreground/70 font-sans font-medium">{item.s}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 7,
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Growth Journey",
    content: (
      <div className="flex flex-col gap-6 text-left w-full max-w-2xl">
        {["Workshops & tech events", "Self-learning & experimentation", "Continuous iteration & improvement"].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 shadow-md">
            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
            <p className="text-foreground font-sans text-lg font-bold">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 8,
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: "Vision",
    content: (
      <div className="flex flex-col gap-6 text-left w-full max-w-2xl">
        {["Build impactful AI systems", "Improve education through technology", "Create platforms that genuinely help learners"].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 shadow-md">
            <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
            <p className="text-foreground font-sans text-lg font-bold">{item}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 9,
    title: "Let's Connect",
    content: (
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <Link href="/case-studies" className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 hover:border-primary group transition-all shadow-lg">
          <span className="font-sans text-xl text-foreground font-bold">Explore my work</span>
          <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all" />
        </Link>
        <Link href="/contact" className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 hover:border-primary group transition-all shadow-lg">
          <span className="font-sans text-xl text-foreground font-bold">Collaborate on ideas</span>
          <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all" />
        </Link>
        <Link href="/#about" className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/15 hover:border-primary group transition-all shadow-lg">
          <span className="font-sans text-xl text-foreground font-bold">Learn & build together</span>
          <ArrowRight className="w-5 h-5 text-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all" />
        </Link>
      </div>
    )
  }
];

export default function MePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  // Wheel navigation (with debounce to prevent skipping multiple slides)
  useEffect(() => {
    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 800) return; // Debounce 800ms
      
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

  const slide = slides[currentSlide];

  return (
    <main className="h-screen w-screen overflow-hidden bg-background text-foreground relative flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(255,112,41,0.05)] z-50" />
      
      {/* Top Left Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 border border-foreground/15 text-foreground/80 hover:text-primary hover:border-primary transition-all backdrop-blur-md shadow-md font-mono text-xs uppercase tracking-widest font-bold">
          <ArrowLeft className="w-4 h-4 text-primary" />
          <span>BACK TO PORTFOLIO</span>
        </Link>
      </div>

      {/* Top Right Theme Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <button
          suppressHydrationWarning
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-12 h-12 rounded-full bg-background/90 border border-foreground/15 flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-all backdrop-blur-md shadow-md cursor-pointer"
          aria-label="Toggle Theme"
        >
          {mounted && theme === 'light' ? (
            <Moon className="w-5 h-5 text-primary" />
          ) : (
            <Sun className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Right side navigation dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="group py-2 flex justify-center cursor-pointer"
          >
            <div className={`w-2 transition-all duration-300 rounded-full ${currentSlide === i ? 'h-8 bg-primary' : 'h-2 bg-foreground/20 group-hover:bg-foreground/50'}`} />
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-8 md:px-16 relative z-10 w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center w-full min-h-[500px]"
          >
            {slide.badge && (
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-bold mb-4">{slide.badge}</span>
            )}
            
            {slide.icon && (
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/15 flex items-center justify-center mb-8 shadow-sm">
                {slide.icon}
              </div>
            )}
            
            {slide.title && (
              <h2 className="font-display text-4xl md:text-7xl text-foreground mb-12 tracking-tight text-center font-bold">{slide.title}</h2>
            )}
            
            {slide.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Footer Controls */}
      <div className="absolute bottom-8 left-8 right-8 z-50 flex items-center justify-between">
        
        {/* Verification Badge */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-foreground/50 uppercase tracking-widest font-semibold">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Content verified automatically
        </div>

        {/* Navigation Arrows & Counter */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button 
            onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="p-2 text-foreground/60 hover:text-primary disabled:opacity-30 transition-colors cursor-pointer"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          
          <span className="font-mono text-xs text-foreground/80 tracking-widest w-12 text-center font-bold">
            {currentSlide + 1} / {slides.length}
          </span>
          
          <button 
            onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 text-foreground/60 hover:text-primary disabled:opacity-30 transition-colors cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Right Settings */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block font-mono text-[10px] text-foreground/40 uppercase tracking-widest mr-4 font-medium">
            Press ↑↓ or scroll to navigate
          </span>
        </div>

      </div>
    </main>
  );
}
