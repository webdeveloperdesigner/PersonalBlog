'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ProjectCard';

// Wait for component mount to register ScrollTrigger to avoid SSR issues
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: "01/05", year: "2025", category: "AI/EdTech", title: "BodhAI", desc: "AI-powered learning practice platform with smart MCQs and coding quizzes", tags: ["React", "Firebase", "Tailwind"], url: "#", pattern: "grid", color: "#FF7029" },
  { id: "02/05", year: "2024", category: "Healthcare", title: "AI Chatbot", desc: "Healthcare chatbot website for user-friendly medical assistance", tags: ["React", "JavaScript", "AI"], url: "#", pattern: "circles", color: "#f0f0f0" },
  { id: "03/05", year: "2024", category: "SaaS", title: "Sovereign Dashboard", desc: "Premium admin console and analytics dashboard with real-time syncing", tags: ["Next.js", "TypeScript", "GSAP"], url: "#", pattern: "lines", color: "#FF7029" },
  { id: "04/05", year: "2023", category: "FinTech", title: "Crypto Wallet", desc: "Secure digital asset management interface with live market data tracking", tags: ["React Native", "Expo", "Web3"], url: "#", pattern: "grid", color: "#f0f0f0" },
  { id: "05/05", year: "2023", category: "E-Commerce", title: "Aura Store", desc: "High-conversion modern storefront with dynamic cart and sleek animations", tags: ["Next.js", "Stripe", "Framer"], url: "#", pattern: "circles", color: "#FF7029" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = scrollContainerRef.current;
    const pinSection = pinSectionRef.current;
    if (!container || !pinSection) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // 1. Entrance Animations (Safer fading without transforms that might break layout)
      gsap.fromTo(".header-content", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: pinSection, start: "top 80%" } }
      );

      gsap.fromTo(".project-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: pinSection, start: "top 60%" } }
      );

      // 2. Horizontal Scroll Logic
      const getScrollAmount = () => {
        const amount = container.scrollWidth - window.innerWidth;
        return amount > 0 ? amount : 0;
      };

      // Create the pinning scroll trigger unconditionally, but use dynamic values
      gsap.to(container, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        }
      });
    });

    // Force recalculation after layout settles
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timeout);
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} id="work" className="bg-background text-foreground relative transition-colors duration-300">
      <div ref={pinSectionRef} className="relative overflow-hidden flex flex-col md:h-screen min-h-[800px]">
        {/* Title Header - Normal Flow */}
      <div className="header-content container mx-auto px-6 md:px-16 pt-32 pb-12 shrink-0">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[#FF7029] text-sm font-bold">01</span>
          <div className="w-12 h-[1px] bg-[#FF7029]" />
          <span className="font-mono text-xs uppercase tracking-widest text-foreground/60 font-semibold">Selected Work</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight">
          Featured <span className="italic font-light text-[#FF7029]">Projects</span>
        </h2>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex-1 w-full flex items-center md:items-stretch overflow-hidden">
        <div 
          ref={scrollContainerRef} 
          className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-16 pb-32 md:pb-16 w-full md:w-max h-full items-center shrink-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
          
          {/* End of rail card */}
          <a href="/projects" className="project-card w-full md:w-[400px] shrink-0 h-[400px] md:h-[58vh] min-h-[440px] max-h-[600px] rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121212] flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-[#FF7029]/60 transition-colors relative overflow-hidden block shadow-xl">
            <div className="w-16 h-16 rounded-full border border-[#FF7029]/40 bg-[#FF7029]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-[#FF7029] font-mono text-2xl font-bold">→</span>
            </div>
            <h3 className="font-display text-3xl font-bold mb-2 text-foreground dark:text-white">View All Projects</h3>
            <p className="font-mono text-xs tracking-widest uppercase font-semibold text-foreground/60 dark:text-gray-400">Explore full archive</p>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
