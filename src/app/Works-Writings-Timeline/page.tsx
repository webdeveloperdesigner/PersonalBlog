'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Code, Clock, ExternalLink, GitBranch } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Extracted exactly from user's legacy site
const timelineData = [
  {
    year: '2026',
    items: [
      {
        type: 'Writing',
        date: 'Jan 2026',
        title: 'Shaastra 2026 & The Tour of IIT Madras',
        subtitle: 'An unforgettable 5-day journey through Shaastra 2026',
        meta: '25 min',
      }
    ]
  },
  {
    year: '2025',
    items: [
      {
        type: 'Project',
        date: 'Jan 2025',
        title: 'BodhAI',
        subtitle: 'AI-Powered Learning Practice Platform',
        tags: ['React', 'Firebase', 'Tailwind CSS'],
        links: [{ label: 'Live', type: 'external' }, { label: 'Source', type: 'github' }]
      }
    ]
  },
  {
    year: '2024',
    items: [
      {
        type: 'Writing',
        date: 'Dec 2024',
        title: 'My Journey as a Developer',
        subtitle: 'From Varanasi to building AI-powered platforms',
        meta: '8 min',
      },
      {
        type: 'Writing',
        date: 'Nov 2024',
        title: 'Building BodhAI: An AI Learning Platform',
        subtitle: 'How I built an AI-powered learning platform',
        meta: '10 min',
      },
      {
        type: 'Writing',
        date: 'Oct 2024',
        title: 'Blockchain: Beyond Cryptocurrency',
        subtitle: 'Exploring decentralized applications',
        meta: '6 min',
      },
      {
        type: 'Project',
        date: 'Oct 2024',
        title: 'AI Healthcare Chatbot',
        subtitle: 'AI-powered medical assistance chatbot',
        tags: ['React.js', 'Node.js', 'OpenAI API'],
        links: [{ label: 'Source', type: 'github' }]
      },
      {
        type: 'Writing',
        date: 'Sep 2024',
        title: 'Lessons from My Internship Journey',
        subtitle: 'Key insights from MotionCut and DigiHero',
        meta: '7 min',
      },
      {
        type: 'Project',
        date: 'Aug 2024',
        title: 'Portfolio Website',
        subtitle: 'Personal portfolio with cinematic animations',
        tags: ['React', 'TypeScript', 'Framer Motion'],
      },
      {
        type: 'Project',
        date: 'Jun 2024',
        title: 'ERC-20 Token Contract',
        subtitle: 'Custom ERC-20 token with advanced tokenomics',
        tags: ['Solidity', 'Hardhat', 'OpenZeppelin'],
      },
      {
        type: 'Project',
        date: 'Apr 2024',
        title: 'ERC-721 NFT Collection',
        subtitle: 'Generative NFT collection with reveal mechanism',
        tags: ['Solidity', 'IPFS', 'React'],
      },
      {
        type: 'Project',
        date: 'Feb 2024',
        title: 'DeFi Staking Platform',
        subtitle: 'Decentralized staking with yield farming',
        tags: ['Solidity', 'Web3.js', 'TheGraph'],
      }
    ]
  },
  {
    year: '2023',
    items: [
      {
        type: 'Project',
        date: 'Nov 2023',
        title: 'ERC-1155 NFT Marketplace',
        subtitle: 'Multi-token marketplace',
        tags: ['Solidity', 'Next.js', 'MongoDB'],
      },
      {
        type: 'Project',
        date: 'Aug 2023',
        title: 'DAO Governance System',
        subtitle: 'On-chain governance with voting',
        tags: ['Solidity', 'React', 'Snapshot'],
      }
    ]
  }
];

export default function WorksWritingsTimeline() {
  const [filter, setFilter] = useState<'All' | 'Projects' | 'Writings'>('All');

  // Filter logic
  const filteredData = timelineData.map(group => ({
    ...group,
    items: group.items.filter(item => {
      if (filter === 'All') return true;
      if (filter === 'Projects') return item.type === 'Project';
      if (filter === 'Writings') return item.type === 'Writing';
      return true;
    })
  })).filter(group => group.items.length > 0);

  return (
    <main className="flex min-h-screen flex-col bg-background pt-32 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,100,255,0.03)] border-x-[8px] border-[#0A0A0A]" />
      
      <div className="container mx-auto px-6 md:px-16 py-12 flex-1 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">

          
          <div className="px-4 py-1.5 rounded-full border border-foreground/10 bg-[#1A1A1A]/50 font-mono text-xs text-foreground/70 uppercase tracking-widest mb-6">
            Works & Writings
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight">
            Creative Timeline
          </h1>
          <p className="font-sans text-foreground/60 max-w-xl text-lg mb-12">
            A chronological journey through my projects and thoughts
          </p>

          {/* Filters & Legend */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex bg-[#1A1A1A]/40 p-1.5 rounded-full border border-foreground/10">
              {['All', 'Projects', 'Writings'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                    filter === f 
                      ? 'bg-foreground text-background' 
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-foreground/40">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-foreground" /> Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF477E]" /> Writings
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-3xl mx-auto relative pl-4 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />

          <AnimatePresence mode="popLayout">
            {filteredData.map((group, groupIdx) => (
              <motion.div 
                key={group.year}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mb-16 relative"
              >
                {/* Year Marker */}
                <div className="flex items-center mb-12 relative">
                  <div className="absolute left-[-11px] md:left-[calc(10%-11px)] w-6 h-6 rounded-full bg-background border border-foreground/20 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-foreground/40" />
                  </div>
                  <h2 className="pl-12 md:pl-[15%] font-display text-3xl md:text-4xl text-foreground/80">
                    {group.year}
                  </h2>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-6">
                  {group.items.map((item, idx) => {
                    const isWriting = item.type === 'Writing';
                    
                    return (
                      <motion.div 
                        key={`${item.title}-${idx}`}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="pl-12 md:pl-[15%] relative group/card"
                      >
                        {/* Event Dot */}
                        <div className={`absolute left-[-5px] md:left-[calc(10%-5px)] top-10 w-3 h-3 rounded-full border-2 border-background z-10 transition-transform duration-300 group-hover/card:scale-150 ${isWriting ? 'bg-[#FF477E]' : 'bg-foreground'}`} />

                        {/* Card */}
                        <div className="bg-[#1A1A1A]/30 border border-foreground/5 hover:border-foreground/20 rounded-2xl p-6 md:p-8 transition-all duration-300">
                          
                          {/* Card Header: Badge & Date */}
                          <div className="flex items-center justify-between mb-4">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest ${
                              isWriting ? 'bg-[#FF477E]/10 text-[#FF477E]' : 'bg-foreground/10 text-foreground'
                            }`}>
                              {isWriting ? <PenTool className="w-3 h-3" /> : <Code className="w-3 h-3" />}
                              {item.type}
                            </div>
                            <span className="font-mono text-xs text-foreground/40 tracking-widest uppercase">
                              {item.date}
                            </span>
                          </div>

                          <h3 className="font-display text-2xl text-foreground mb-2">{item.title}</h3>
                          <p className="font-sans text-foreground/60 mb-6">{item.subtitle}</p>

                          {/* Meta Footer */}
                          <div className="flex flex-wrap items-center gap-4 border-t border-foreground/5 pt-4">
                            {isWriting && item.meta && (
                              <div className="flex items-center gap-2 font-mono text-xs text-foreground/50 uppercase tracking-widest">
                                <Clock className="w-3.5 h-3.5" /> {item.meta}
                              </div>
                            )}

                            {!isWriting && item.tags && (
                              <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                  <span key={tag} className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest px-2 py-1 bg-foreground/5 rounded border border-foreground/10">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            {!isWriting && item.links && (
                              <div className="flex items-center gap-4 ml-auto">
                                {item.links.map(link => (
                                  <Link key={link.label} href="#" className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">
                                    {link.type === 'external' ? <ExternalLink className="w-3.5 h-3.5" /> : <GitBranch className="w-3.5 h-3.5" />}
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>

                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>



      </div>
      <Footer />
    </main>
  );
}
