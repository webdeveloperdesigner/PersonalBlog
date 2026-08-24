'use client';

import React, { useState, useEffect, useRef } from 'react';
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
// 2. PERFECT CSS MARQUEE: STARTS 100% OFFSCREEN RIGHT (100vw), EXITS OFFSCREEN LEFT (-100%), PAUSES 3.5S
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

  // Auto-scroll center cards every 3.5 seconds (pauses on hover/drag)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // SHORTEST CIRCULAR OFFSET MATH (Never-ending Loop)
  const getCircularOffset = (index: number, active: number, total: number) => {
    let diff = index - active;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  // Keyboard Arrow Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') previous();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Wheel Scroll Listener with Debounce
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
    <main 
      onWheel={handleWheel}
      className="relative min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white overflow-hidden flex flex-col items-center justify-between pt-36 sm:pt-44 pb-16 select-none transition-colors duration-300"
    >
      
      {/* Subtle Ambient Radial Blur Spots */}
      <div className="absolute top-[28%] left-[20%] w-[550px] h-[550px] bg-blue-500/10 dark:bg-[rgba(56,189,248,0.08)] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[28%] right-[15%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-[rgba(168,85,247,0.08)] rounded-full blur-[140px] pointer-events-none z-0" />

      {/* TOP HEADER & MARQUEE */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        
        {/* Core Capabilities Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/15 backdrop-blur-md shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-purple-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-black/90 dark:text-white/90 font-bold">
            ● CORE CAPABILITIES ●
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-purple-400 animate-pulse" />
        </div>

        {/* Oversized Kinetic Marquee (Pure CSS 100vw -> -100% -> 3.5s pause) */}
        <KineticHeadingMarquee />

        {/* Subtitle */}
        <p className="text-center font-sans text-sm sm:text-base text-black/60 dark:text-white/60 max-w-xl px-4 mt-2 mb-4 leading-relaxed font-medium">
          Specialized in cutting-edge technologies that power modern digital experiences
        </p>
      </div>

      {/* 3D INFINITE CIRCULAR CAROUSEL STAGE */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10 w-full h-[450px] flex items-center justify-center overflow-hidden my-4"
      >
        
        {/* Navigation Arrow Buttons */}
        <button
          onClick={previous}
          aria-label="Previous capability"
          className="absolute left-4 sm:left-12 z-30 p-3.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/15 hover:text-black dark:hover:text-white hover:scale-110 transition-all backdrop-blur-md shadow-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          aria-label="Next capability"
          className="absolute right-4 sm:right-12 z-30 p-3.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-black/80 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/15 hover:text-black dark:hover:text-white hover:scale-110 transition-all backdrop-blur-md shadow-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

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
            // Compute shortest wrapped circular offset
            const offset = getCircularOffset(index, activeIndex, numItems);
            
            // Calculate 3D Ring Coordinates
            let x = offset * 265;
            let rotateY = offset * -14;
            let rotate = offset * 6;
            let scale = 0.92;
            let opacity = Math.abs(offset) > 2 ? 0 : 1;
            let zIndex = 10 - Math.abs(offset);

            const isCenter = offset === 0;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x,
                  rotateY,
                  rotate,
                  scale,
                  opacity
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 26
                }}
                style={{
                  position: 'absolute',
                  zIndex
                }}
                className="capability-card flex flex-col items-center group pointer-events-auto"
              >
                {/* Image Wrapper */}
                <div className="relative w-[185px] sm:w-[235px] h-[270px] sm:h-[335px] rounded-[28px] overflow-hidden border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-[#121212] transition-all duration-500 shadow-2xl group-hover:border-black/30 dark:group-hover:border-white/40">
                  {/* Card Cover Image */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Card Title */}
                <h3 className="mt-4 font-mono font-bold text-sm sm:text-base text-center tracking-wide text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.title}
                </h3>
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
  );
}
