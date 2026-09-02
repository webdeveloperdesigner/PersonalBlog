'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, X, ArrowUp, Copy, Check, Mail
} from 'lucide-react';

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

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 4.5A15.5 15.5 0 0 0 2 17a15.8 15.8 0 0 0 4.5 2.2A11.7 11.7 0 0 0 7.8 17a10.6 10.6 0 0 1-2.8-1.4s.3-.2.6-.4c3.4 1.6 7.4 1.6 10.8 0 .3.2.6.4.6.4a10.6 10.6 0 0 1-2.8 1.4c.4.7.8 1.4 1.3 2.2A15.8 15.8 0 0 0 22 17a15.5 15.5 0 0 0-5.5-12.5C14.5 5.5 12.8 6 12 6c-.8 0-2.5-.5-4.5-1.5z"></path></svg>;
}

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M8 11.5c2.5-1 6.5-1 8.5.5"></path><path d="M9 14.5c2-.7 5-.7 7 .5"></path><path d="M10 17.5c1.5-.5 3.5-.5 5 .5"></path></svg>;
}

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "vivekxdev01@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <footer className="bg-background relative overflow-hidden pt-20 border-t border-foreground/10">
        
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

      {/* Full-Screen Overlay Modal (Exact Screenshot 1 Layout) */}
      <AnimatePresence>
        {isMoreOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between overflow-y-auto selection:bg-[#FF7029]/40"
          >
            {/* Top Bar with Marquee & Close Button */}
            <div className="relative border-b border-white/10 py-5 flex items-center justify-between">
              
              {/* Top Marquee */}
              <div className="w-full overflow-hidden mr-16">
                <div className="flex whitespace-nowrap animate-marquee font-mono text-xs text-white/50 tracking-widest uppercase font-semibold">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="px-6">
                      BACKEND ARCHITECTURE • UI/UX DESIGN • CREATIVE CODING • SYSTEM OPTIMIZATION • OPEN TO OPPORTUNITIES •
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button 
                suppressHydrationWarning
                onClick={() => setIsMoreOpen(false)}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all cursor-pointer z-20"
                aria-label="Close Overlay"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Main Content Body */}
            <div className="container mx-auto px-8 md:px-16 py-12 md:py-20 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Left Column: Let's Work Together */}
              <div className="flex flex-col items-start max-w-xl text-left">
                <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95] mb-6 uppercase">
                  Let's Work<br />Together
                </h1>
                <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                  Have a project in mind? Let's build something extraordinary that solves real problems.
                </p>

                {/* Email Pill Button with Copy */}
                <button
                  suppressHydrationWarning
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20 hover:border-[#FF7029] hover:bg-white/15 transition-all text-sm font-mono font-medium text-white cursor-pointer group shadow-lg"
                >
                  <Mail className="w-4 h-4 text-[#FF7029]" />
                  <span>{email}</span>
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                  )}
                </button>
                {copied && (
                  <span className="font-mono text-xs text-emerald-400 mt-2 font-bold animate-pulse">
                    Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Right Column: 3x2 Social Grid (Matching Screenshot 1 Exactly) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-xl">
                {[
                  {
                    name: 'GitHub',
                    icon: <GithubIcon className="w-6 h-6 text-white" />,
                    href: 'https://github.com/webdeveloperdesigner'
                  },
                  {
                    name: 'LinkedIn',
                    icon: <LinkedinIcon className="w-6 h-6 text-white" />,
                    href: 'https://linkedin.com/in/vivek-vns/'
                  },
                  {
                    name: 'Twitter',
                    icon: <TwitterIcon className="w-6 h-6 text-white" />,
                    href: 'https://x.com'
                  },
                  {
                    name: 'Instagram',
                    icon: <InstagramIcon className="w-6 h-6 text-white" />,
                    href: 'https://instagram.com/_.heyiamvivek._'
                  },
                  {
                    name: 'Discord',
                    icon: <DiscordIcon className="w-6 h-6 text-white" />,
                    href: 'https://discord.com'
                  },
                  {
                    name: 'Spotify',
                    icon: <SpotifyIcon className="w-6 h-6 text-white" />,
                    href: 'https://spotify.com'
                  }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#FF7029]/60 hover:bg-white/[0.08] transition-all group cursor-pointer shadow-md text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-sans font-bold text-sm text-white/80 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>

            </div>

            {/* Bottom Footer Controls */}
            <div className="container mx-auto px-8 md:px-16 py-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
              <span>Vivek Portfolio Engine</span>

              {/* Scroll To Top Button */}
              <button 
                suppressHydrationWarning
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-white text-black hover:bg-[#FF7029] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xl group"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
