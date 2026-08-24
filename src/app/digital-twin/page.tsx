'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import NoticePopup from '@/components/NoticePopup';
import { 
  ArrowLeft, 
  Sparkles, 
  Bot, 
  Send, 
  Cpu, 
  Database, 
  Zap, 
  ShieldCheck, 
  MessageSquare,
  Clock,
  Terminal,
  CheckCircle2
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.45-3.7 4.9 4.9 0 0 0-.14-3.6s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0C6.18 2.5 5 2.88 5 2.88a4.9 4.9 0 0 0-.14 3.6A5.2 5.2 0 0 0 3 10.24c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M3 19s1-1 3-1"></path></svg>;
}

export default function DigitalTwinPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <NoticePopup
        storageKey="digital_twin_page"
        title="AI Digital Twin Under Training"
        message="I'm currently fine-tuning a custom RAG model on my complete codebase, projects, and work experience. Stay tuned!"
        tag="COMING SOON"
      />

      <main className="min-h-screen bg-background text-foreground pt-36 sm:pt-44 pb-24 px-6 md:px-16 relative selection:bg-primary/30 selection:text-primary overflow-hidden">
        {/* Ambient Radial Background Glows */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-[#FF7029]/10 dark:bg-[#FF7029]/10 rounded-full blur-[180px] pointer-events-none z-0" />

        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 bg-foreground/5 font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary hover:border-primary transition-all shadow-sm font-bold"
            >
              <ArrowLeft className="w-4 h-4 text-primary" />
              <span>BACK TO PORTFOLIO</span>
            </Link>

            <div className="flex items-center gap-3">
              <Link 
                href="/whats-new"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/15 bg-foreground/5 font-mono text-xs uppercase tracking-widest text-foreground/80 hover:text-foreground transition-all"
              >
                <span>WHAT&apos;S NEW</span>
              </Link>
              
              <a 
                href="https://github.com/webdeveloperdesigner/PersonalBlog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7029] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md hover:bg-[#E65F1E] transition-all"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GITHUB REPO</span>
              </a>
            </div>
          </div>

          {/* Hero Heading Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs uppercase font-bold tracking-widest shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>✦ AI EXPERIMENTAL LAB • COMING SOON</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground"
            >
              Chat with my <br className="hidden sm:inline" />
              <span className="text-[#FF7029] italic font-light">Digital Twin</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-foreground/75 leading-relaxed font-medium max-w-2xl mx-auto"
            >
              Don&apos;t want to read through a traditional resume? I&apos;ve trained a custom AI agent on my complete portfolio, skills, and work history. Get instant, context-aware answers about my engineering background.
            </motion.p>
          </div>

          {/* Interactive AI Chat Mockup Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-foreground/15 bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden mb-16 relative"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/10 bg-foreground/[0.03]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-foreground/60 font-semibold flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-purple-400" />
                  vivek_digital_twin_v1.0.py
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase font-bold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  MODEL TRAINING (88%)
                </span>
              </div>
            </div>

            {/* Chat Conversation Thread */}
            <div className="p-6 md:p-8 space-y-6 font-sans text-sm md:text-base">
              
              {/* AI Agent Welcome Message */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1 rounded-2xl bg-foreground/5 border border-foreground/10 p-4 sm:p-5 text-foreground/90 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-1">
                    <span className="font-bold text-purple-400">VIVEK DIGITAL TWIN [AI]</span>
                    <span>System Ready</span>
                  </div>
                  <p className="leading-relaxed">
                    Hello! I&apos;m Vivek&apos;s AI Digital Twin. I have full context on his engineering experience, full-stack Next.js 16 architectures, AI/EdTech projects (BodhAI, Healthcare Chatbot), skills, and resume milestones. Ask me anything!
                  </p>
                </div>
              </div>

              {/* Sample User Prompt */}
              <div className="flex gap-4 items-start justify-end">
                <div className="max-w-xl rounded-2xl bg-[#FF7029] text-white p-4 sm:p-5 shadow-lg">
                  <div className="text-[11px] font-mono text-white/70 mb-1 font-semibold">USER QUERY</div>
                  <p className="leading-relaxed font-medium">
                    What software engineering projects has Vivek built, and what is his primary tech stack?
                  </p>
                </div>
              </div>

              {/* Sample AI Agent Response */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center shrink-0 text-purple-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1 rounded-2xl bg-foreground/5 border border-foreground/10 p-4 sm:p-5 text-foreground/90 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-1">
                    <span className="font-bold text-purple-400">VIVEK DIGITAL TWIN [AI]</span>
                    <span>Verified Response</span>
                  </div>
                  <p className="leading-relaxed">
                    Vivek specializes in modern full-stack web applications, AI automation, and EdTech platforms. Here are his top highlights:
                  </p>
                  <ul className="space-y-2 font-mono text-xs text-foreground/80 list-disc pl-4">
                    <li><strong className="text-[#FF7029]">BodhAI</strong> — Interactive AI-powered learning & practice platform built with React, Firebase, and Tailwind CSS.</li>
                    <li><strong className="text-[#FF7029]">AI Healthcare Chatbot</strong> — Medical assistant site with symptom evaluation and doctor referral dispatch.</li>
                    <li><strong className="text-[#FF7029]">Tech Stack</strong> — Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Python, PyTorch, OpenCV.</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Disabled Interactive Input Bar */}
            <div className="p-4 border-t border-foreground/10 bg-foreground/[0.02] flex items-center justify-between gap-4 flex-wrap">
              <div className="flex-1 flex items-center gap-3 bg-foreground/5 border border-foreground/10 rounded-full px-5 py-3 text-foreground/50 font-mono text-xs">
                <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="truncate">SYSTEM STATUS: CUSTOM RAG MODEL UNDER FINE-TUNING — LAUNCHING SOON</span>
              </div>
              <button 
                disabled 
                className="px-6 py-3 rounded-full bg-foreground/10 text-foreground/40 font-mono text-xs uppercase font-bold tracking-wider cursor-not-allowed flex items-center gap-2"
              >
                <span>OFFLINE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Features & Capabilities Grid */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                How the Digital Twin Works
              </h2>
              <p className="font-sans text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
                Engineered with custom RAG (Retrieval-Augmented Generation) indexing directly on Vivek&apos;s personal codebase and career timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  color: 'text-purple-400',
                  title: 'Complete Portfolio Index',
                  desc: 'Indexes all 40+ components, Next.js routes, case studies, and engineering blog articles.'
                },
                {
                  icon: Cpu,
                  color: 'text-[#FF7029]',
                  title: 'Context-Aware Reasoning',
                  desc: 'Answers questions about specific technical decisions, stack choices, and architecture patterns.'
                },
                {
                  icon: Zap,
                  color: 'text-emerald-400',
                  title: 'Instant Resume Q&A',
                  desc: 'Skip static PDFs — ask direct questions about achievements, projects, and career milestones.'
                }
              ].map((feat) => (
                <div 
                  key={feat.title}
                  className="rounded-3xl border border-foreground/15 bg-background p-6 md:p-8 hover:border-primary/40 transition-colors shadow-lg"
                >
                  <feat.icon className={`w-8 h-8 ${feat.color} mb-4`} />
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Early Access Email Subscription Box */}
          <div className="rounded-3xl border border-[#FF7029]/30 bg-gradient-to-br from-[#FF7029]/10 via-purple-500/5 to-transparent p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Get Notified When Live
            </h3>
            <p className="font-sans text-sm text-foreground/75 mb-6 max-w-md mx-auto">
              Be the first to test Vivek&apos;s AI Digital Twin when public access opens. No spam, only single launch invite.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>YOU&apos;RE ON THE LAUNCH LIST!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full bg-background border border-foreground/20 text-foreground font-sans text-xs focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#FF7029] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E65F1E] transition-all shadow-md shrink-0 cursor-pointer"
                >
                  NOTIFY ME
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
