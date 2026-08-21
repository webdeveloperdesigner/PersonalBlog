'use client';

import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  return (
    <button
      suppressHydrationWarning
      onClick={onClick}
      className={`relative rounded-full overflow-hidden transition-all duration-300 active:scale-95 cursor-pointer ${className}`}
    >
      <span className="relative z-10 flex flex-row items-center justify-center gap-2 whitespace-nowrap">{children}</span>
    </button>
  );
}
