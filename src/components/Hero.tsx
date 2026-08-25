'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Download, MonitorPlay, Code2, 
  Database, Smartphone, Briefcase, Zap, Globe, Clock, Layers, Hexagon, Terminal, Play,
  Mail, MapPin, Network
} from 'lucide-react';
import Link from 'next/link';

// Mock tech stack for the dense grid
const roles = [
  "REACT NATIVE + EXPO DEV",
  "FULL STACK ENGINEER",
  "REACT & NEXT.JS DEV",
  "NODE.JS BACKEND DEV",
  "MERN STACK DEV",
  "SOFTWARE ENGINEER",
  "AI INTEGRATION EXPERT",
  "FRONTEND ARCHITECT",
  "WEB3 & BLOCKCHAIN DEV",
  "CLOUD INFRA ENGINEER",
  "TECHNICAL LEAD",
  "UI/UX ENTHUSIAST"
];
const techStack = [
  { name: 'REACT', icon: <img src="https://cdn.simpleicons.org/react/61DAFB" className="w-3.5 h-3.5" alt="React" /> },
  { name: 'NEXT.JS', icon: <img src="https://cdn.simpleicons.org/nextdotjs" className="w-3.5 h-3.5 dark:invert" alt="Next.js" /> },
  { name: 'NODE.JS', icon: <img src="https://cdn.simpleicons.org/nodedotjs/339933" className="w-3.5 h-3.5" alt="Node.js" /> },
  { name: 'TYPESCRIPT', icon: <img src="https://cdn.simpleicons.org/typescript/3178C6" className="w-3.5 h-3.5" alt="TypeScript" /> },
  { name: 'MONGODB', icon: <img src="https://cdn.simpleicons.org/mongodb/47A248" className="w-3.5 h-3.5" alt="MongoDB" /> },
  { name: 'POSTGRESQL', icon: <img src="https://cdn.simpleicons.org/postgresql/4169E1" className="w-3.5 h-3.5" alt="PostgreSQL" /> },
  { name: 'REACT NATIVE', icon: <img src="https://cdn.simpleicons.org/react/61DAFB" className="w-3.5 h-3.5" alt="React Native" /> },
  { name: 'EXPO', icon: <img src="https://cdn.simpleicons.org/expo" className="w-3.5 h-3.5 dark:invert" alt="Expo" /> }
];

const bottomLogos = [
  { name: "VERCEL", icon: <img src="https://cdn.simpleicons.org/vercel" className="w-3 h-3 dark:invert" alt="Vercel" /> },
  { name: "REACT NATIVE", icon: <img src="https://cdn.simpleicons.org/react/61DAFB" className="w-3 h-3" alt="React Native" /> },
  { name: "EXPO", icon: <img src="https://cdn.simpleicons.org/expo" className="w-3 h-3 dark:invert" alt="Expo" /> },
  { name: "CONVEX", icon: <img src="https://cdn.simpleicons.org/convex/0052FF" className="w-3 h-3" alt="Convex" /> },
  { name: "HTML5", icon: <img src="https://cdn.simpleicons.org/html5/E34F26" className="w-3 h-3" alt="HTML5" /> },
  { name: "CSS3", icon: <img src="https://cdn.simpleicons.org/css3/1572B6" className="w-3 h-3" alt="CSS3" /> },
  { name: "POSTMAN", icon: <img src="https://cdn.simpleicons.org/postman/FF6C37" className="w-3 h-3" alt="Postman" /> },
  { name: "GIT", icon: <img src="https://cdn.simpleicons.org/git/F05032" className="w-3 h-3" alt="Git" /> },
  { name: "REACT.JS", icon: <img src="https://cdn.simpleicons.org/react/61DAFB" className="w-3 h-3" alt="React" /> },
  { name: "NEXT.JS", icon: <img src="https://cdn.simpleicons.org/nextdotjs" className="w-3 h-3 dark:invert" alt="Next.js" /> },
  { name: "TYPESCRIPT", icon: <img src="https://cdn.simpleicons.org/typescript/3178C6" className="w-3 h-3" alt="TypeScript" /> },
  { name: "NODE.JS", icon: <img src="https://cdn.simpleicons.org/nodedotjs/339933" className="w-3 h-3" alt="Node.js" /> }
];

function GithubIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

function LinkedinIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative bg-background min-h-screen pt-44 sm:pt-48 md:pt-52 pb-0 overflow-hidden flex flex-col selection:bg-primary/30 selection:text-primary">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(242, 242, 236, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(242, 242, 236, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 xl:px-8 w-full max-w-7xl relative z-10 flex flex-col">
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center border-b border-foreground/10 pb-4 w-full mb-12">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium">
            VIVEK . PORTFOLIO '26
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
            AVAILABLE FOR WORK
          </div>
        </div>
        
        {/* Giant Typography */}
        <div className="mb-14 relative w-full flex flex-col items-start lg:flex-row lg:justify-between lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 block font-bold">
              CREATIVE ENGINEER
            </span>
            <h1 className="font-sans font-black text-[16vw] md:text-[10rem] xl:text-[12rem] leading-[0.8] text-foreground tracking-tighter m-0 p-0">
              VIVEK
            </h1>
          </div>
          {/* Floating Pill on Right (Desktop) */}
          <div className="hidden lg:flex px-6 py-2 rounded-full border border-foreground/10 bg-[#1A1A1A]/40 backdrop-blur-md font-mono text-xs text-foreground/60 uppercase tracking-[0.2em] items-center gap-2 mb-6">
            <MonitorPlay className="w-4 h-4 text-primary" />
            MERN . NEXT.JS . REACT NATIVE
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start pb-24">
          
          {/* LEFT COLUMN: IMAGE & STATS */}
          <div className="w-full flex flex-col gap-6">
            {/* Image Container with Orange Brackets */}
            <div className="relative w-full aspect-[4/5] bg-transparent group p-4 lg:p-5">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] border-primary z-20 transition-all duration-500 group-hover:w-16 group-hover:h-16" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-[3px] border-r-[3px] border-primary z-20 transition-all duration-500 group-hover:w-16 group-hover:h-16" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3px] border-l-[3px] border-primary z-20 transition-all duration-500 group-hover:w-16 group-hover:h-16" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] border-primary z-20 transition-all duration-500 group-hover:w-16 group-hover:h-16" />
              
              {/* Inner Overlays */}
              <div className="absolute top-8 right-8 z-20 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-green-400 font-bold">ACCEPTING PROJECTS</span>
              </div>

              <div className="absolute bottom-8 left-8 z-20 flex flex-col">
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1 font-bold">FULL STACK DEVELOPER</span>
                <span className="font-sans font-black text-2xl text-foreground mb-1">Vivek</span>
                <span className="font-mono text-[9px] text-foreground/60 uppercase tracking-widest">Delhi NCR, India</span>
              </div>

              <div className="w-full h-full relative overflow-hidden bg-[#1A1A1A]">
                {/* The Image */}
                <img 
                  src="/image.png" 
                  alt="Vivek Portrait"  
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for bottom text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/95 to-transparent z-10" />
              </div>
            </div>

            {/* Below Image Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A]/30 border border-foreground/5 p-6 flex flex-col items-start justify-center hover:border-primary/30 transition-colors group">
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-sans font-black text-4xl text-primary">1yr+</span>
                  <Zap className="w-4 h-4 text-foreground/20 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-mono text-[9px] text-foreground/40 uppercase tracking-widest font-bold">EXPERIENCE</span>
              </div>
              <div className="bg-[#1A1A1A]/30 border border-foreground/5 p-6 flex flex-col items-start justify-center hover:border-primary/30 transition-colors group">
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-sans font-black text-4xl text-primary">10+</span>
                  <Briefcase className="w-4 h-4 text-foreground/20 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-mono text-[9px] text-foreground/40 uppercase tracking-widest font-bold">PROJECTS BUILT</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT & BUTTONS */}
          <div className="w-full flex flex-col pt-4 lg:pt-0">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/10 bg-[#1A1A1A]/50 font-mono text-[10px] text-foreground/60 uppercase tracking-widest mb-8 w-fit">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              AVAILABLE FOR HIRE . REMOTE . WORLDWIDE
            </div>

            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-tight leading-[1.1] min-h-[2.5em] md:min-h-[1.2em]">
              I'M A <span className="text-primary inline-flex">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>

            <p className="font-sans text-lg text-foreground/60 leading-relaxed mb-10 max-w-xl">
              I design and ship <strong className="text-foreground font-normal">production-grade web & mobile products</strong> — SaaS platforms, e-commerce systems, AI tools, and LMS apps — for tech companies and startups across the <strong className="text-primary font-normal">US, UK, EU, UAE & India.</strong>
            </p>

            {/* Dense Tech Stack Pill Grid */}
            <div className="flex flex-wrap gap-3 mb-12">
              {techStack.map((tech, idx) => (
                <div key={`${tech.name}-${idx}`} className="flex items-center gap-2 px-4 py-2 border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-default">
                  {tech.icon}
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/70 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link 
                href="/#projects" 
                className="inline-flex items-center gap-3 bg-[#FF7029] hover:bg-[#E65F1E] text-white font-mono font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#FF7029]/25 hover:shadow-xl hover:shadow-[#FF7029]/40 hover:scale-[1.03] active:scale-[0.98] group"
              >
                <span>VIEW MY WORK</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 text-foreground font-mono font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                LET&apos;S TALK
              </Link>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-[#FF7029] transition-colors ml-2 sm:ml-4 font-mono text-xs uppercase tracking-widest font-bold px-4 py-3 rounded-full hover:bg-foreground/5"
              >
                <Download className="w-4 h-4 text-[#FF7029]" /> 
                <span>DOWNLOAD CV</span>
              </a>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-[#121212] p-6 flex items-center justify-between hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group rounded-xl">
                <div>
                  <span className="block font-sans font-black text-3xl text-primary mb-1">Global</span>
                  <span className="font-mono text-[9px] text-foreground/50 uppercase tracking-widest font-bold">CLIENT REACH</span>
                </div>
                <Globe className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-[#121212] p-6 flex items-center justify-between hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group rounded-xl">
                <div>
                  <span className="block font-sans font-black text-3xl text-primary mb-1">&lt; 24h</span>
                  <span className="font-mono text-[9px] text-foreground/50 uppercase tracking-widest font-bold">RESPONSE TIME</span>
                </div>
                <Clock className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
            </div>

            {/* Contact Details Row */}
            <div className="flex flex-wrap items-center justify-between gap-6 font-mono text-[10px] text-foreground/50 uppercase tracking-widest border-t border-foreground/10 pt-8">
              <div className="flex items-center gap-6 flex-wrap font-medium">
                <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><MapPin className="w-4 h-4" /> DELHI NCR</span>
                <a href="mailto:vivekxdev01@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> VIVEKXDEV01@GMAIL.COM
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/webdeveloperdesigner" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><GithubIcon className="w-4 h-4" /></a>
                <a href="https://linkedin.com/in/vivek-vns" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><LinkedinIcon className="w-4 h-4" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 pb-8 relative z-20 mt-12">
        {/* Bottom Banner */}
        <div className="w-full border-y border-foreground/10 bg-background">
          <div className="container mx-auto px-6 md:px-12 xl:px-8 max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] font-bold">REMOTE-FIRST . AVAILABLE NOW</span>
              <span className="font-sans text-sm text-foreground/80 font-medium">
                Serving tech companies & startups in <strong className="text-foreground">USA . UK . Canada . Australia . UAE . India</strong>
              </span>
            </div>
            <Link href="/contact" className="shrink-0 flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground font-mono text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all font-bold group">
              START A PROJECT <Network className="w-4 h-4 text-primary group-hover:text-background transition-colors" />
            </Link>
          </div>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="w-full overflow-hidden bg-background py-4 border-y border-foreground/5">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, arrayIdx) => (
              <div key={arrayIdx} className="flex items-center shrink-0">
                {bottomLogos.map((logo, idx) => (
                  <div key={`${arrayIdx}-${idx}`} className="flex items-center mx-6 gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default">
                    {logo.icon}
                    <span className="font-mono text-[10px] uppercase tracking-widest text-foreground font-bold">{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
