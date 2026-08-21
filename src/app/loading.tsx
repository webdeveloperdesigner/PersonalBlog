'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#080808] flex items-center justify-center select-none overflow-hidden font-mono">
      <div className="relative z-10 w-[90%] max-w-sm bg-[#0F0F10]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3 text-sm text-[#FF7029] font-bold">
          <div className="w-4 h-4 border-2 border-[#FF7029] border-t-transparent rounded-full animate-spin" />
          <span>LOADING MODULE...</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#FF7029] to-emerald-400"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
        </div>
      </div>
    </div>
  );
}
