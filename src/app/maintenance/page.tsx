'use client';

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Blue Glow Border */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,100,255,0.05)] border-[8px] border-[#0A0A0A]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-6 max-w-2xl relative z-10"
      >
        <div className="w-20 h-20 rounded-full bg-[#1A1A1A]/50 border border-foreground/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <Wrench className="w-8 h-8 text-foreground/80" />
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
          Under Maintenance
        </h1>
        
        <p className="font-sans text-foreground/60 text-lg md:text-xl leading-relaxed mb-12">
          We are currently performing scheduled maintenance. Please check back soon.
        </p>
        
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent mb-12" />
        
        <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
          We apologize for the inconvenience.<br/>Thank you for your patience.
        </p>
      </motion.div>
    </main>
  );
}
