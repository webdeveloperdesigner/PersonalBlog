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
  { 
    id: "01/03", 
    year: "2026", 
    category: "GenAI / EdTech", 
    projectType: "Personal Project",
    title: "Veda Resume", 
    desc: "AI-powered smart resume builder, ATS analyzer, and optimization engine", 
    tags: ["Next.js", "TypeScript", "Tailwind", "AI"], 
    url: "https://github.com/webdeveloperdesigner/veda-resume", 
    pattern: "lines", 
    color: "#a855f7" 
  },
  { 
    id: "02/03", 
    year: "2025", 
    category: "AI / EdTech", 
    projectType: "Personal Project",
    title: "BodhAI", 
    desc: "AI-powered learning practice platform with smart MCQs and coding quizzes", 
    tags: ["React", "Firebase", "Tailwind", "AI"], 
    url: "https://github.com/webdeveloperdesigner/BodhAI", 
    pattern: "grid", 
    color: "#FF7029" 
  },
  { 
    id: "03/03", 
    year: "2024", 
    category: "Healthcare / AI", 
    projectType: "College Group Project",
    title: "AI Healthcare Chatbot", 
    desc: "Healthcare chatbot website for user-friendly medical assistance and diagnosis", 
    tags: ["React", "JavaScript", "AI", "Node.js"], 
    url: "https://github.com/webdeveloperdesigner/AI-Based-Chatbot-for-Healthcare-", 
    pattern: "circles", 
    color: "#38bdf8" 
  },
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
        const totalWidth = container.scrollWidth;
        const viewWidth = window.innerWidth;
        const extraOffset = window.innerWidth > 1024 ? 80 : 30;
        const amount = totalWidth - viewWidth + extraOffset;
        return amount > 0 ? amount : 0;
      };

      // Create the pinning scroll trigger unconditionally with smooth damping
      gsap.to(container, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          pin: true,
          anticipatePin: 1,
          scrub: 0.8,
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
    <section ref={sectionRef} id="projects" className="bg-background text-foreground relative transition-colors duration-300">
      <div id="work" />
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
