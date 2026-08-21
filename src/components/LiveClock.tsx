'use client';

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true,
        timeZone: 'Asia/Kolkata' 
      };
      
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTime(`${formatted} IST (GMT+5:30) - Varanasi, India`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">{time}</p>;
}
