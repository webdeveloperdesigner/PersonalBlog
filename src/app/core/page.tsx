'use client';

import React, { useState, useEffect, useRef } from 'react';
import NoticePopup from '@/components/NoticePopup';
import Footer from '@/components/Footer';
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useVelocity, 
  useAnimationFrame, 
  useMotionValue 
} from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

// ==========================================
// 1. CAPABILITIES DATASET
// ==========================================
export const capabilities = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'SECURITY',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    category: 'INTELLIGENCE',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    category: 'WEB ARCHITECTURE',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'data',
    title: 'Data Science',
    category: 'INSIGHT ENGINE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'web3',
    title: 'Web3 & Blockchain',
    category: 'DECENTRALIZED',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    category: 'INFRASTRUCTURE',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80'
  }
];

// ==========================================
// 2. PERFECT CSS MARQUEE
// ==========================================
function KineticHeadingMarquee() {
  return (
    <div className="overflow-hidden w-full select-none py-3 my-2 border-y border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.01] backdrop-blur-sm min-h-[110px] sm:min-h-[140px] flex items-center relative">
      <style>{`
        @keyframes slowGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-slow-gradient {
          background-size: 300% 300%;
          animation: slowGradientMove 10s ease-in-out infinite;
        }

        @keyframes marqueeSlideRTL {
          0% {
            transform: translateX(100vw);
          }
          80% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee-rtl {
          animation: marqueeSlideRTL 45s linear infinite;
        }
      `}</style>
      
      <div className="animate-marquee-rtl whitespace-nowrap font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-tighter leading-none inline-flex items-center gap-6 sm:gap-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="inline-flex items-center gap-6 sm:gap-10 mr-6 sm:mr-10">
            <span className="text-black dark:text-white">
              Creative
            </span>
            <span 
              className="bg-clip-text text-transparent animate-slow-gradient"
              style={{
                backgroundImage: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc, #f472b6, #fb923c, #38bdf8)'
              }}
            >
              Engineering
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN SECTION COMPONENT WITH AUTO SCROLL 3D LOOP
// ==========================================
export default function CorePage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const numItems = capabilities.length;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % numItems);
  };

  const previous = () => {
    setActiveIndex((prev) => (prev - 1 + numItems) % numItems);
  };

  // Auto-scroll center cards every 3.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getCircularOffset = (index: number, active: number, total: number) => {
    let diff = index - active;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') previous();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const lastWheelTime = useRef<number>(0);
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 260) return;
    
    if (e.deltaY > 15 || e.deltaX > 15) {
      next();
      lastWheelTime.current = now;
    } else if (e.deltaY < -15 || e.deltaX < -15) {
      previous();
      lastWheelTime.current = now;
    }
  };

  return (
    <>
      <NoticePopup 
        storageKey="core_page"
        title="3D Core Capabilities Stage"
        message="Currently working on 3D Core Capabilities & kinetic marquee stage. Some interactions are under active development."
        tag="FEATURE PREVIEW"
      />

      <main 
        onWheel={handleWheel}
        className="relative min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white overflow-hidden flex flex-col items-center justify-between pt-36 sm:pt-44 pb-16 select-none transition-colors duration-300"
      >
        
        {/* Ambient Radial Blur Spots */}
        <div className="absolute top-[28%] left-[20%] w-[550px] h-[550px] bg-blue-500/10 dark:bg-[rgba(56,189,248,0.08)] rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-[28%] right-[15%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-[rgba(168,85,247,0.08)] rounded-full blur-[140px] pointer-events-none z-0" />

        {/* TOP HEADER & MARQUEE */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7029] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs text-black/70 dark:text-white/70 tracking-widest uppercase font-semibold">
              CORE CAPABILITIES
            </span>
          </div>

          <KineticHeadingMarquee />

          <p className="text-black/60 dark:text-white/60 text-center font-sans text-sm sm:text-base md:text-lg max-w-xl px-4 mt-2 font-medium">
            Specialized in cutting-edge technologies that power modern digital experiences
          </p>
        </div>

        {/* 3D ROTATION STAGE */}
        <div 
          className="relative w-full max-w-6xl h-[360px] sm:h-[400px] my-6 flex items-center justify-center z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Controls */}
          <button
            onClick={previous}
            className="absolute left-2 sm:left-8 z-30 p-2 sm:p-3 rounded-full bg-white/80 dark:bg-black/60 border border-black/10 dark:border-white/20 text-black dark:text-white hover:scale-110 active:scale-95 transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Previous Capability"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-8 z-30 p-2 sm:p-3 rounded-full bg-white/80 dark:bg-black/60 border border-black/10 dark:border-white/20 text-black dark:text-white hover:scale-110 active:scale-95 transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Next Capability"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D CARDS WRAPPER */}
          <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsHovered(true)}
            onDragEnd={(e, info) => {
              setIsHovered(false);
              if (info.offset.x < -60) next();
              if (info.offset.x > 60) previous();
            }}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing [perspective:1200px]"
          >
            {capabilities.map((item, index) => {
              const offset = getCircularOffset(index, activeIndex, numItems);
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);

              const translateX = offset * 220; 
              const translateZ = isActive ? 80 : -140 * absOffset;
              const rotateY = offset * -18; 
              const opacity = absOffset > 2 ? 0 : isActive ? 1 : 0.65 - absOffset * 0.15;
              const zIndex = 20 - absOffset;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    opacity: opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                  }}
                  style={{ zIndex }}
                  className={`absolute w-[260px] sm:w-[320px] h-[320px] sm:h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border transition-colors duration-300 ${
                    isActive 
                      ? 'border-[#FF7029] ring-2 ring-[#FF7029]/30 shadow-[#FF7029]/20' 
                      : 'border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/40'
                  }`}
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest font-semibold">
                        {item.category}
                      </span>
                      <span className="font-mono text-xs text-white/60 font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/70 font-mono tracking-wider">
                        ✦ CLICK TO FOCUS
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* FOOTER HINT */}
        <div className="relative z-10 flex items-center justify-center gap-4 text-black/40 dark:text-white/40 font-mono text-xs tracking-widest uppercase mt-4">
          <span className="w-12 h-[1px] bg-black/20 dark:bg-white/20" />
          <span>─── Drag or scroll to explore ───</span>
          <span className="w-12 h-[1px] bg-black/20 dark:bg-white/20" />
        </div>

      </main>
      <Footer />
    </>
  );
}
