'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, X, ArrowUp, Copy, Check, Mail, Clock, Bot, GitBranch
} from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
}

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState<string>('');
  
  // Auto-hide Close Button state
  const [isCloseBtnVisible, setIsCloseBtnVisible] = useState(true);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const email = "vivekxdev01@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Lock background scroll when overlay is open
  useEffect(() => {
    if (isMoreOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMoreOpen]);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      });
      setTimeString(formatted);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Idle Detection for Auto-Hiding Close Button
  useEffect(() => {
    if (!isMoreOpen) return;

    const resetIdleTimer = () => {
      setIsCloseBtnVisible(true);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setIsCloseBtnVisible(false);
      }, 2500);
    };

    resetIdleTimer();

    const activityEvents = ['mousemove', 'touchstart', 'touchmove', 'scroll', 'keydown'];
    activityEvents.forEach(evt => window.addEventListener(evt, resetIdleTimer));

    return () => {
      activityEvents.forEach(evt => window.removeEventListener(evt, resetIdleTimer));
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isMoreOpen]);

  // GSAP Wordmark Animation
  useEffect(() => {
    if (!wordmarkRef.current) return;
    gsap.fromTo(
      wordmarkRef.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: wordmarkRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1
        }
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMoreOpen(false);
  };

  return (
    <>
      <footer className="bg-background text-foreground relative overflow-hidden pt-20 border-t border-foreground/10">
        
        {/* Marquee Strip */}
        <div className="w-full overflow-hidden border-y border-foreground/10 py-4 bg-primary">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="font-display text-2xl md:text-4xl text-background px-8 italic font-bold">
                Open to collaborations • Let's build something incredible together . 
              </span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-16 pt-32 pb-12">
          <div ref={wordmarkRef} className="flex justify-center mb-24 overflow-hidden select-none">
            <h2 className="font-display text-[15vw] leading-none whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-1000 text-foreground uppercase font-black tracking-tighter">
              Vivek
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-foreground/60 border-t border-foreground/10 pt-8">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Vivek. All rights reserved.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <a href="/imprint" className="hover:text-primary transition-colors">Imprint</a>
              
              {/* More Button */}
              <button 
                suppressHydrationWarning
                onClick={() => setIsMoreOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-all cursor-pointer shadow-sm text-xs"
              >
                <span>More</span>
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Built with care</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Full-Screen Sr. SDE Grade Dual Theme Overlay Modal */}
      <AnimatePresence>
        {isMoreOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#09090b] text-neutral-900 dark:text-white flex flex-col justify-between overflow-y-auto selection:bg-[#FF7029]/40"
          >
            {/* Top Sticky Bar with Marquee & Auto-Hiding Close Button */}
            <div className="sticky top-0 z-30 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-5 flex items-center justify-between">
              
              {/* Top Marquee */}
              <div className="w-full overflow-hidden mr-16">
                <div className="flex whitespace-nowrap animate-marquee font-mono text-xs text-neutral-500 dark:text-white/50 tracking-widest uppercase font-semibold">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="px-6">
                      BACKEND ARCHITECTURE • UI/UX DESIGN • CREATIVE CODING • SYSTEM OPTIMIZATION • OPEN TO OPPORTUNITIES •
                    </span>
                  ))}
                </div>
              </div>

              {/* Smart Auto-Hiding Close Button */}
              <button 
                suppressHydrationWarning
                onClick={() => setIsMoreOpen(false)}
                className={`absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-black/15 dark:border-white/20 hover:border-black/40 dark:hover:border-white/50 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-900 dark:text-white flex items-center justify-center transition-all duration-500 cursor-pointer z-20 ${
                  isCloseBtnVisible ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-90'
                }`}
                aria-label="Close Overlay"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content Body */}
            <div className="container mx-auto px-8 md:px-16 py-12 md:py-20 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Left Column: Let's Work Together */}
              <div className="flex flex-col items-start max-w-xl text-left">
                <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 dark:text-white tracking-tight leading-[0.95] mb-6 uppercase">
                  Let's Work<br />Together
                </h1>
                <p className="font-sans text-neutral-700 dark:text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                  Have a project in mind? Let's build something extraordinary that solves real problems.
                </p>

                {/* Email Pill Button with Copy */}
                <button
                  suppressHydrationWarning
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black/[0.04] dark:bg-white/10 border border-black/15 dark:border-white/20 hover:border-[#FF7029] hover:bg-black/[0.08] dark:hover:bg-white/15 transition-all text-sm font-mono font-medium text-neutral-900 dark:text-white cursor-pointer group shadow-lg"
                >
                  <Mail className="w-4 h-4 text-[#FF7029]" />
                  <span>{email}</span>
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-neutral-500 dark:text-white/50 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                  )}
                </button>
              </div>

              {/* Right Column: 3x2 Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-xl">
                {[
                  {
                    name: 'GitHub',
                    icon: <GithubIcon className="w-6 h-6 text-neutral-900 dark:text-white" />,
                    href: 'https://github.com/webdeveloperdesigner',
                    external: true
                  },
                  {
                    name: 'LinkedIn',
                    icon: <LinkedinIcon className="w-6 h-6 text-neutral-900 dark:text-white" />,
                    href: 'https://linkedin.com/in/vivek-vns/',
                    external: true
                  },
                  {
                    name: 'Instagram',
                    icon: <InstagramIcon className="w-6 h-6 text-neutral-900 dark:text-white" />,
                    href: 'https://instagram.com/_.heyiamvivek._',
                    external: true
                  },
                  {
                    isTime: true,
                    name: timeString || '01:27 AM',
                    subText: 'INDIA (IST)',
                    icon: <Clock className="w-6 h-6 text-[#FF7029] animate-pulse" />,
                    href: '#',
                    external: false
                  },
                  {
                    name: 'AI Chat',
                    icon: (
                      <div className="relative flex items-center justify-center w-7 h-7">
                        <Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <Sparkles className="w-3 h-3 text-amber-500 dark:text-amber-300 absolute -top-1 -left-1 animate-pulse" />
                        <span className="absolute -bottom-1 -right-2 px-1 py-0.2 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-[8px] font-mono font-black text-white rounded-md tracking-tighter border border-purple-300/40 shadow-sm leading-tight">
                          AI
                        </span>
                      </div>
                    ),
                    href: '#',
                    external: false,
                    badge: 'COMING SOON'
                  },
                  {
                    isVersion: true,
                    name: 'v2.8.1',
                    subText: '2026 © EDITION',
                    icon: <GitBranch className="w-6 h-6 text-[#FF7029]" />,
                    href: '/version',
                    external: false
                  }
                ].map((item) => {
                  if (item.external) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center justify-center p-6 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-[#FF7029]/60 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all group cursor-pointer shadow-md text-center"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="font-sans font-bold text-sm text-neutral-800 dark:text-white/80 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </a>
                    );
                  } else if (item.isTime) {
                    return (
                      <div
                        key="live-time-card"
                        className="relative flex flex-col items-start justify-center p-6 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#FF7029]/40 hover:border-[#FF7029] dark:border-[#FF7029]/40 dark:hover:border-[#FF7029] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all group cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#FF7029]/10 text-left select-none"
                      >
                        {/* Top Right Live Dot Badge Pill with Smooth Fade & Scale Animation */}
                        <span className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 inline-flex items-center gap-1.5 absolute top-3 right-3 font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#FF7029]/10 text-[#FF7029] border border-[#FF7029]/30 tracking-wider whitespace-nowrap transition-all duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7029] animate-pulse" />
                          LIVE
                        </span>

                        {/* Header */}
                        <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-white/50 tracking-widest uppercase mb-3 pr-14 block">
                          LOCAL TIME
                        </span>
                        
                        {/* Animated Text Container */}
                        <div className="relative w-full">
                          {/* Normal State Text */}
                          <span className="block font-sans font-bold text-base sm:text-lg text-neutral-900 dark:text-white tracking-tight leading-snug group-hover:opacity-0 group-hover:-translate-y-1.5 transition-all duration-300 pointer-events-none">
                            Varanasi, India
                          </span>

                          {/* Hover/Touch State Text */}
                          <span suppressHydrationWarning className="absolute inset-0 font-mono font-extrabold text-xs sm:text-sm text-[#FF7029] tracking-wider leading-snug opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                            {timeString ? `${timeString} UTC+5:30` : '07:30 PM UTC+5:30'}
                          </span>
                        </div>
                      </div>
                    );
                  } else if (item.isVersion) {
                    const currentYear = new Date().getFullYear();
                    const currentQuarter = `Q${Math.floor(new Date().getMonth() / 3) + 1}`;
                    return (
                      <Link
                        key="version-edition-card"
                        href={item.href}
                        onClick={() => setIsMoreOpen(false)}
                        className="relative flex flex-col items-start justify-center p-6 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#FF7029]/40 hover:border-[#FF7029] dark:border-[#FF7029]/40 dark:hover:border-[#FF7029] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all group cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#FF7029]/10 text-left"
                      >
                        {/* Top Right Badge Pill with Smooth Fade & Scale Animation */}
                        <span className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 inline-flex items-center absolute top-3 right-3 font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#FF7029]/10 text-[#FF7029] border border-[#FF7029]/30 tracking-wider whitespace-nowrap transition-all duration-300">
                          v2.8.1 ↗
                        </span>

                        {/* Header */}
                        <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-white/50 tracking-widest uppercase mb-3 pr-14 block">
                          VERSION
                        </span>
                        
                        {/* Animated Text Container */}
                        <div className="relative w-full">
                          {/* Normal State Text */}
                          <span className="block font-sans font-bold text-base sm:text-lg text-neutral-900 dark:text-white tracking-tight leading-snug group-hover:opacity-0 group-hover:-translate-y-1.5 transition-all duration-300 pointer-events-none">
                            {currentYear} © Edition
                          </span>

                          {/* Hover/Touch State Text */}
                          <span suppressHydrationWarning className="absolute inset-0 font-sans font-bold text-base sm:text-lg text-[#FF7029] tracking-tight leading-snug opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            {currentYear} © Edition {currentQuarter}
                          </span>
                        </div>
                      </Link>
                    );
                  } else if (item.badge === 'COMING SOON') {
                    return (
                      <div
                        key={item.name}
                        className="relative flex flex-col items-start justify-center p-6 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] border border-purple-500/40 hover:border-purple-500 dark:border-purple-500/40 dark:hover:border-purple-500 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all group cursor-pointer shadow-md hover:shadow-lg hover:shadow-purple-500/10 text-left select-none"
                      >
                        {/* Top Right AI Bot Badge Pill with Smooth Fade & Scale Animation */}
                        <span className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 inline-flex items-center gap-1.5 absolute top-3 right-3 font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/40 tracking-wider whitespace-nowrap transition-all duration-300">
                          <span>AI BOT</span>
                          <Bot className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                        </span>

                        {/* Header */}
                        <span className="font-mono text-xs font-semibold text-neutral-500 dark:text-white/50 tracking-widest uppercase mb-3 pr-14 block">
                          AI CHAT
                        </span>
                        
                        {/* Animated Text Container */}
                        <div className="relative w-full">
                          {/* Normal State Text */}
                          <span className="block font-sans font-bold text-base sm:text-lg text-neutral-900 dark:text-white tracking-tight leading-snug group-hover:opacity-0 group-hover:-translate-y-1.5 transition-all duration-300 pointer-events-none">
                            Smart Assistant
                          </span>

                          {/* Hover/Touch State Text */}
                          <span className="absolute inset-0 font-mono font-extrabold text-sm sm:text-base text-purple-600 dark:text-purple-400 tracking-wider leading-snug opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                            COMING SOON ✦
                          </span>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMoreOpen(false)}
                        className="relative flex flex-col items-center justify-center p-6 rounded-3xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-[#FF7029]/60 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-all group cursor-pointer shadow-md text-center"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="font-sans font-bold text-sm text-neutral-800 dark:text-white/80 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    );
                  }
                })}
              </div>

            </div>

            {/* Bottom Footer Controls */}
            <div className="container mx-auto px-8 md:px-16 py-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-xs text-neutral-500 dark:text-white/40">
              <span>Vivek Portfolio Engine</span>

              {/* Scroll To Top Button */}
              <button 
                suppressHydrationWarning
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-black hover:bg-[#FF7029] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xl group"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed bottom-10 left-1/2 z-[200] px-5 py-3 rounded-full bg-emerald-500 text-white font-mono text-xs font-bold flex items-center gap-2.5 shadow-2xl border border-emerald-400/50 backdrop-blur-xl tracking-wider uppercase select-none"
          >
            <Check className="w-4 h-4 text-white stroke-[3]" />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
