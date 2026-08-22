'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import NoticeBanner from './NoticeBanner';
import { ChevronDown, Sparkles, LayoutGrid, Layers, UserCheck, FileCode2, GitCommit } from 'lucide-react';

const navLinks = [
  { name: '1.0 HOME', href: '/' },
  { name: '2.0 ABOUT', href: '/#about' },
  { name: '3.0 EXPERIENCE', href: '/#experience' },
  { name: '4.0 PROJECTS', href: '/#projects' },
  { name: '5.0 BLOG', href: '/writings' },
];

const exploreItems = [
  { name: 'Case Studies', desc: 'Engineering breakdowns & architecture', href: '/case-studies', icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
  { name: 'Gallery Showcase', desc: 'Visual UI & design artifacts', href: '/gallery', icon: <LayoutGrid className="w-4 h-4 text-purple-400" /> },
  { name: 'Career Timeline', desc: 'Milestones & professional growth', href: '/timeline', icon: <Layers className="w-4 h-4 text-emerald-400" /> },
  { name: 'About Presentation', desc: 'Interactive pitch & deck', href: '/me', icon: <UserCheck className="w-4 h-4 text-blue-400" /> },
  { name: 'Projects Archive', desc: 'Full repository of web & mobile apps', href: '/projects', icon: <FileCode2 className="w-4 h-4 text-primary" /> },
  { name: 'System Changelog', desc: 'Version history & feature updates', href: '/changelog', icon: <GitCommit className="w-4 h-4 text-cyan-400" /> },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset navbar visibility when navigating between pages
  useEffect(() => {
    setHidden(false);
    setCompact(window.scrollY > 50);
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHidden(false);
    
    if (latest > 50) {
      setCompact(true);
    } else {
      setCompact(false);
    }
  });

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (pathname === '/maintenance' || pathname === '/me') {
    return null;
  }

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-150%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full z-[60] flex flex-col pointer-events-none"
      >
        {/* Notice Banner */}
        <div className="pointer-events-auto w-full">
          <NoticeBanner />
        </div>

        {/* Main Navbar Bar */}
        <div className={`w-full px-4 sm:px-6 md:px-12 xl:px-16 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ${compact ? 'bg-background/85 backdrop-blur-xl border-b border-foreground/10 shadow-sm' : 'bg-transparent'}`}>
          {/* Left: Logo */}
          <div className="pointer-events-auto transition-opacity duration-300 opacity-100">
            <Link href="/" className="font-sans font-black text-xl sm:text-2xl text-foreground tracking-tighter hover:text-primary transition-colors">
              VIVEK
            </Link>
          </div>

        {/* Center: Navigation Pill */}
        <div className={`pointer-events-auto hidden lg:flex items-center backdrop-blur-xl border border-foreground/15 rounded-full p-1.5 pl-8 shadow-2xl transition-all duration-500 bg-background/90 text-foreground ${isMobileMenuOpen ? 'bg-transparent border-transparent opacity-0' : ''}`}>
          <ul className="flex items-center gap-8 font-mono text-[10px] text-foreground/80 uppercase tracking-widest font-bold mr-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="text-primary font-extrabold">{link.name.split(' ')[0]}</span> {link.name.split(' ')[1]}
                </Link>
              </li>
            ))}

            {/* Explore Dropdown Item */}
            <li 
              className="relative"
              onMouseEnter={() => setIsExploreOpen(true)}
              onMouseLeave={() => setIsExploreOpen(false)}
            >
              <button 
                suppressHydrationWarning
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-1.5"
              >
                <span className="text-primary font-extrabold">6.0</span> EXPLORE
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExploreOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>

              {/* Dropdown Card */}
              <AnimatePresence>
                {isExploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 p-2.5 rounded-2xl bg-white dark:bg-[#121316] border border-black/10 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-foreground flex flex-col gap-1 z-[100] pointer-events-auto"
                  >
                    <div className="px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold border-b border-black/10 dark:border-white/10 mb-1 flex items-center justify-between">
                      <span>EXPLORE DEEP DIVE</span>
                      <span className="text-primary">✦</span>
                    </div>
                    {exploreItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsExploreOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all group/item"
                      >
                        <div className="p-2 rounded-lg bg-black/5 dark:bg-white/10 group-hover/item:bg-primary/10 transition-colors shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans font-bold text-xs text-gray-900 dark:text-white group-hover/item:text-primary transition-colors">
                            {item.name}
                          </span>
                          <span className="font-sans text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <MagneticButton onClick={() => {
            setIsMobileMenuOpen(false);
            router.push('/contact');
          }} className="bg-[#FF7029] hover:bg-[#E65F1E] text-white font-black text-[9px] px-5 py-2.5 rounded-full uppercase tracking-widest transition-all duration-300 flex flex-row items-center gap-2 shrink-0 whitespace-nowrap shadow-md hover:shadow-lg hover:shadow-[#FF7029]/30 hover:scale-[1.03]">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            <span className="shrink-0 whitespace-nowrap text-white">HIRE ME</span>
          </MagneticButton>
        </div>

        {/* Right: Actions */}
        <div className="pointer-events-auto flex items-center gap-3 sm:gap-6 opacity-100 transition-opacity duration-300">
          <button
            suppressHydrationWarning
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden lg:flex items-center gap-1.5 font-mono text-[9px] text-foreground/80 uppercase tracking-widest font-bold hover:text-primary cursor-pointer transition-colors px-3.5 py-1.5 rounded-full border border-foreground/15 bg-background/90 backdrop-blur-md shadow-sm"
            aria-label="Toggle Theme"
          >
            {mounted && theme === 'light' ? (
              <>
                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                DARK MODE
              </>
            ) : (
              <>
                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                LIGHT MODE
              </>
            )}
          </button>
          <button 
            suppressHydrationWarning
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors flex flex-col items-center justify-center p-2 -mr-2 cursor-pointer rounded-lg bg-background/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border border-foreground/10 lg:border-none"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`h-[2px] w-full bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`h-[2px] w-full bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-background/98 text-foreground backdrop-blur-2xl flex flex-col items-center justify-start sm:justify-center pt-28 pb-12 px-6 overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-5 mb-8 w-full max-w-md">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + (i * 0.06), duration: 0.4 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-3xl md:text-4xl text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              {/* 6.0 EXPLORE Accordion Main Heading */}
              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="flex flex-col items-center w-full"
              >
                <button 
                  suppressHydrationWarning
                  onClick={() => setIsExploreOpen(!isExploreOpen)}
                  className="font-display text-3xl md:text-4xl text-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>6.0 EXPLORE</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExploreOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>

                <AnimatePresence>
                  {isExploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="flex flex-col items-center gap-2 mt-4 w-full overflow-hidden"
                    >
                      {exploreItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between gap-3 p-3 rounded-xl border border-foreground/10 bg-foreground/5 hover:border-primary/40 hover:bg-primary/5 transition-all w-full max-w-xs group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-foreground/10 group-hover:bg-primary/20 transition-colors">
                              {item.icon}
                            </div>
                            <span className="font-sans font-bold text-xs text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                          </div>
                          <span className="font-mono text-xs text-primary font-bold">→</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            </ul>

            {/* Mobile Theme Switcher */}
            <motion.button
              suppressHydrationWarning
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 font-mono text-xs text-foreground uppercase tracking-widest px-5 py-2.5 rounded-full border border-foreground/20 bg-foreground/5 font-bold mb-6"
            >
              {mounted && theme === 'light' ? (
                <>
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                  SWITCH TO DARK MODE
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  SWITCH TO LIGHT MODE
                </>
              )}
            </motion.button>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="font-mono text-xs text-foreground/50"
            >
              VIVEK © {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
