'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight, Wrench } from 'lucide-react';

interface NoticePopupProps {
  storageKey: string;
  title: string;
  message: string;
  tag?: string;
  linkText?: string;
  linkHref?: string;
}

export default function NoticePopup({
  storageKey,
  title,
  message,
  tag = 'WORK IN PROGRESS',
  linkText = "WHAT'S NEW",
  linkHref = '/whats-new'
}: NoticePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem(`notice_popup_dismissed_${storageKey}`);
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem(`notice_popup_dismissed_${storageKey}`, 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-[99] max-w-sm sm:max-w-md w-[calc(100vw-3rem)] p-5 rounded-3xl bg-white/90 dark:bg-[#0c0c0c]/90 border border-black/10 dark:border-white/15 shadow-2xl backdrop-blur-xl text-slate-900 dark:text-white"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7029]/10 border border-[#FF7029]/30 text-[#FF7029] font-mono text-[10px] uppercase font-bold tracking-widest">
              <Wrench className="w-3 h-3 animate-spin" />
              <span>{tag}</span>
            </div>

            <button
              onClick={handleDismiss}
              className="p-1 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Notice Popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title & Message */}
          <div className="space-y-1.5 mb-4">
            <h4 className="font-display font-bold text-base sm:text-lg tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF7029] shrink-0" />
              <span>{title}</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
              {message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-neutral-800/80">
            {linkHref && linkText && (
              <Link
                href={linkHref}
                onClick={handleDismiss}
                className="inline-flex items-center gap-1 font-mono text-xs text-[#FF7029] font-bold uppercase tracking-wider hover:underline"
              >
                <span>{linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            <button
              onClick={handleDismiss}
              className="ml-auto px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-mono text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            >
              GOT IT
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
