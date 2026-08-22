'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight, AlertCircle } from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

export default function NoticeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#FF7029]/10 border-b border-[#FF7029]/20 text-foreground py-2 sm:py-2.5 px-3 md:px-12 font-mono text-xs z-[55] relative backdrop-blur-md">
      <div className="container mx-auto flex flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 font-medium text-[10px] sm:text-[11px] md:text-xs leading-tight">
          <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7029] shrink-0 animate-pulse" />
          <span>
            <strong className="text-[#FF7029]">NOTICE:</strong>{' '}
            <span className="hidden sm:inline">Portfolio is currently undergoing live updates. Some data or links may be actively changing. Check GitHub to know more.</span>
            <span className="inline sm:hidden">Portfolio updating live. Check GitHub for updates.</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 justify-end">
          <a
            href="https://github.com/webdeveloperdesigner/PersonalBlog"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xs:flex items-center gap-1 text-foreground/80 hover:text-primary font-bold tracking-wider uppercase text-[9px] sm:text-[10px] transition-colors border-b border-foreground/30 hover:border-primary pb-0.5"
          >
            <GithubIcon className="w-3 h-3 text-[#FF7029]" />
            <span className="hidden sm:inline">CHECK GITHUB</span>
            <span className="inline sm:hidden">GITHUB</span>
          </a>

          <Link 
            href="/whats-new" 
            className="flex items-center gap-1 text-[#FF7029] hover:text-[#E65F1E] font-bold tracking-wider uppercase text-[9px] sm:text-[10px] transition-colors border-b border-[#FF7029]/40 pb-0.5 whitespace-nowrap"
          >
            <span>WHAT&apos;S NEW</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <button 
            suppressHydrationWarning
            onClick={() => setIsVisible(false)}
            className="p-1 text-foreground/60 hover:text-foreground transition-colors cursor-pointer rounded-full hover:bg-foreground/10 shrink-0"
            aria-label="Dismiss Notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
