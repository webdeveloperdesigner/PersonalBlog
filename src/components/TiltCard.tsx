'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export default function TiltCard({ children, className = '' }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 500, damping: 100 });
  const springY = useSpring(y, { stiffness: 500, damping: 100 });
  
  const [hovered, setHovered] = useState(false);
  
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    mouseX.set(mX);
    mouseY.set(mY);
    
    const xPct = mX / width - 0.5;
    const yPct = mY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }
  
  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }
  
  const rotateX = useMotionTemplate`${springY.get() * -20}deg`;
  const rotateY = useMotionTemplate`${springX.get() * 20}deg`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        perspective: '1200px'
      }}
      className={`relative rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 p-8 overflow-hidden group shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 ${className}`}
    >
      {/* Radial Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 112, 41, 0.12),
              transparent 40%
            )
          `,
        }}
      />
      
      {/* Metal Sheen Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-transparent via-foreground to-transparent mix-blend-overlay pointer-events-none transition-opacity duration-500 z-0" />
      
      {/* Sleek Corner Brackets */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

      <div style={{ transform: 'translateZ(50px)' }} className="h-full flex flex-col relative z-20">
        {children}
      </div>
    </motion.div>
  );
}
