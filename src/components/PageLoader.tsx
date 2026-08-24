'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Database, Box, CheckCircle2, Check, Terminal } from 'lucide-react';

const steps = [
  { icon: <Brain className="w-4 h-4 text-[#FF7029]" />, text: 'Initializing Neural Network...' },
  { icon: <Database className="w-4 h-4 text-cyan-400" />, text: 'Loading Portfolio Data...' },
  { icon: <Box className="w-4 h-4 text-purple-400" />, text: 'Compiling 3D Assets...' },
  { icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, text: 'System Ready' },
];

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check if loader has already run in this session
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoaded = sessionStorage.getItem('portfolio_loaded') === 'true';
      if (!isLoaded) {
        setLoading(true);
      }
    }
  }, []);

  // Matrix Code Rain Canvas
  useEffect(() => {
    if (!loading) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const alphabet = katakana + latin;
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const rainDrops: number[] = Array(columns).fill(1);

    const render = () => {
      ctx.fillStyle = 'rgba(8, 8, 8, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillStyle = i % 3 === 0 ? '#FF7029' : 'rgba(255, 112, 41, 0.35)';
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [loading]);

  // Progress simulation (10 seconds total)
  useEffect(() => {
    if (!loading) return;
    document.body.style.overflow = 'hidden';

    // 10 seconds total: increment by 1 every 90ms (9s) + 1s hold at 100% = 10s
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          setCurrentStepIndex(3);
          setTimeout(() => {
            setLoading(false);
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('portfolio_loaded', 'true');
            }
            document.body.style.overflow = 'unset';
          }, 1000);
          return 100;
        }

        if (next < 25) setCurrentStepIndex(0);
        else if (next < 50) setCurrentStepIndex(1);
        else if (next < 85) setCurrentStepIndex(2);
        else setCurrentStepIndex(3);

        return next;
      });
    }, 90);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          id="page-loader-root"
          initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{ backgroundColor: '#0a0a0c', color: '#ffffff' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden font-mono"
        >
          {/* Matrix Rain Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 opacity-40 pointer-events-none" />

          {/* Interactive Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'rgba(18, 19, 22, 0.96)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            className="relative z-10 w-[90%] max-w-lg backdrop-blur-md border rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden text-xs md:text-sm"
          >
            {/* Terminal Window Header Bar */}
            <div 
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.15)' }}
              className="flex items-center justify-between px-4 py-3 border-b"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider font-semibold" style={{ color: '#d1d5db' }}>
                <Terminal className="w-3.5 h-3.5 text-[#FF7029]" />
                System Initialization
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color: '#FF7029' }}>
                vivek@portfolio:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 flex flex-col gap-4">
              {/* Active System Update Notice */}
              <div className="px-3 py-2 rounded-lg bg-[#FF7029]/10 border border-[#FF7029]/30 text-foreground font-mono text-[10px] uppercase tracking-wider flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 font-bold text-[#FF7029]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7029] animate-ping" />
                  [SYS_NOTICE] LIVE SYSTEM DATA & FEATURE UPDATES IN PROGRESS
                </span>
                <span className="text-[9px] opacity-70 font-mono" style={{ color: '#9ca3af' }}>v2.5.0</span>
              </div>

              <div className="font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-1" style={{ color: '#FF7029' }}>
                <span>[SYS_INIT]</span> INITIALIZING KERNEL v2.5...
              </div>

              {/* Steps List */}
              <div className="flex flex-col gap-3 my-1">
                {steps.map((step, idx) => {
                  const isDone = idx < currentStepIndex || progress === 100;
                  const isActive = idx === currentStepIndex && progress < 100;

                  return (
                    <div key={idx} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="shrink-0">{step.icon}</div>
                        <span 
                          className="font-mono transition-colors duration-300 text-xs md:text-sm"
                          style={{ 
                            color: isDone ? '#34d399' : isActive ? '#ffffff' : '#9ca3af',
                            fontWeight: isDone ? 700 : isActive ? 900 : 500
                          }}
                        >
                          {step.text}
                        </span>
                      </div>
                      <div>
                        {isDone ? (
                          <span className="font-extrabold flex items-center gap-1 text-xs" style={{ color: '#34d399' }}>
                            <Check className="w-3.5 h-3.5" /> DONE
                          </span>
                        ) : isActive ? (
                          <span className="animate-pulse flex items-center gap-1 font-bold text-xs" style={{ color: '#FF7029' }}>
                            RUNNING <span className="animate-ping inline-block w-1.5 h-1.5 rounded-full bg-[#FF7029]" />
                          </span>
                        ) : (
                          <span className="font-mono text-[10px] font-bold" style={{ color: '#6b7280' }}>PENDING</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cursor Line */}
              <div className="flex items-center gap-2 font-mono text-xs pt-1" style={{ color: '#e5e7eb' }}>
                <span className="font-bold" style={{ color: '#FF7029' }}>vivek@portfolio:~$</span>
                <span className="animate-pulse font-bold" style={{ color: '#FF7029' }}>_</span>
              </div>

              {/* Cyber Progress Bar & Percentage */}
              <div className="mt-4 pt-3 border-t flex flex-col gap-2" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="uppercase tracking-widest text-[10px] font-bold" style={{ color: '#d1d5db' }}>INITIALIZING</span>
                  <span className="font-bold text-base" style={{ color: '#FF7029' }}>{Math.min(progress, 100)}%</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden relative p-0.5 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#FF7029] via-amber-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(255,112,41,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
