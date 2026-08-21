'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyRow({ icon: Icon, text, copyValue }: { icon: any, text: string, copyValue: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between py-6 border-b border-foreground/10 group hover:bg-[#1A1A1A]/20 px-4 -mx-4 rounded-lg transition-colors cursor-pointer" onClick={handleCopy}>
      <div className="flex items-center gap-6">
        <Icon className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" strokeWidth={1.5} />
        <span className="font-sans text-foreground text-lg">{text}</span>
      </div>
      <button className="text-foreground/40 group-hover:text-primary transition-colors focus:outline-none">
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}
