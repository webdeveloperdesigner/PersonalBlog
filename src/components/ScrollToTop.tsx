'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);

        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      } else {
        setIsVisible(false);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[90] p-3 rounded-full bg-white/90 dark:bg-[#121212]/90 border border-[#FF7029]/50 hover:border-[#FF7029] shadow-xl hover:shadow-2xl hover:shadow-[#FF7029]/30 text-foreground transition-all duration-300 flex items-center justify-center group cursor-pointer backdrop-blur-md"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-[#FF7029] group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
