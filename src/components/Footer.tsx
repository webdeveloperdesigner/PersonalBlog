'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          <p>© 2024 VK . All rights reserved</p>
          <div className="flex gap-6">
            <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="/imprint" className="hover:text-primary transition-colors">Imprint</a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-primary transition-colors">Back to top ↑</a>
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
