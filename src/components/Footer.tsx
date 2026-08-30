'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);

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

  return (
    <footer className="bg-background relative overflow-hidden pt-20 border-t border-foreground/10">
      
      {/* Marquee Strip */}
      <div className="w-full overflow-hidden border-y border-foreground/10 py-4 bg-primary">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-display text-2xl md:text-4xl text-background px-8 italic">
              Open to collaborations - Let's build something incredible . 
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 pt-32 pb-12">
        <div ref={wordmarkRef} className="flex justify-center mb-24 overflow-hidden">
          <h2 className="font-display text-[15vw] leading-none whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-1000 text-foreground">
            Vivek
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-foreground/50 border-t border-foreground/10 pt-8">
          <p>© {new Date().getFullYear()} Vivek. All rights reserved</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="/imprint" className="hover:text-primary transition-colors">Imprint</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Built with care
          </div>
        </div>
      </div>
    </footer>
  );
}
