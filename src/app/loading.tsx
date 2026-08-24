'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Rapid surge progression (15% -> 45% -> 75% -> 92% -> 100% within ~900ms)
    const t1 = setTimeout(() => setProgress(45), 150);
    const t2 = setTimeout(() => setProgress(75), 350);
    const t3 = setTimeout(() => setProgress(92), 600);
    const t4 = setTimeout(() => setProgress(100), 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-background/85 backdrop-blur-md flex items-center justify-center select-none overflow-hidden font-mono transition-colors">
      <div className="relative z-10 w-[90%] max-w-xs bg-background border border-foreground/15 rounded-2xl shadow-2xl p-5 flex flex-col items-center gap-4 text-foreground">
        <div className="flex items-center justify-between w-full text-xs text-[#FF7029] font-extrabold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 border-2 border-[#FF7029] border-t-transparent rounded-full animate-spin" />
            <span>LOADING MODULE...</span>
          </div>
          <span className="font-mono text-xs text-foreground/60">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#FF7029] via-amber-400 to-emerald-400"
            initial={{ width: '15%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}
