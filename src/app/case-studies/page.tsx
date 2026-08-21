'use client';

import { useState } from 'react';
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Code2, Star, Calendar, Clock, Target, ArrowRight, Search, SlidersHorizontal, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'bodhai',
    title: 'BodhAI',
    description: 'An AI-powered learning and assessment platform with intelligent analytics and smart mock tests. Built to scale assessment capabilities.',
    year: '2024',
    readTime: '5 min read',
    difficulty: 'Advanced',
    status: 'Live',
    featured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    tech: ['React', 'Firebase', 'Tailwind', 'AI'],
    highlights: [
      { label: 'Users', value: '1K+' },
      { label: 'Role', value: 'Lead Frontend' }
    ],
    link: '#'
  },
  {
    id: 'portfolio',
    title: 'Cinematic Portfolio',
    description: 'A premium, 3D-integrated personal portfolio demonstrating modern UI/UX and WebGL capabilities with a dark industrial aesthetic.',
    year: '2025',
    readTime: '3 min read',
    difficulty: 'Intermediate',
    status: 'Live',
    featured: false,
    image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=800&auto=format&fit=crop&q=80',
    tech: ['Next.js 14', 'Three.js', 'GSAP', 'Tailwind CSS'],
    highlights: [
      { label: 'Performance', value: '98/100' },
      { label: 'Role', value: 'Design Engineer' }
    ],
    link: '#'
  },
  {
    id: 'healthcare-chatbot',
    title: 'AI Healthcare Chatbot',
    description: 'A responsive healthcare chatbot website providing user-friendly medical assistance and AI-powered insights.',
    year: '2024',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    status: 'In Development',
    featured: false,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    tech: ['React', 'JavaScript', 'GenAI'],
    highlights: [
      { label: 'Interactions', value: 'Smooth' },
      { label: 'Role', value: 'Frontend Dev' }
    ],
    link: '#'
  }
];

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          study.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = activeFilter === 'All' ? true : study.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1 flex flex-col items-center">
        {/* Deep Dive Badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Deep Dives</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight text-center">Case Studies</h1>
          <p className="text-foreground/60 font-sans max-w-2xl mx-auto text-center">
            Detailed breakdowns of my most significant projects, exploring the challenges, architecture, and solutions that drove them to success.
          </p>
        </div>

        {/* Top Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 w-full max-w-4xl mx-auto">
          {[
            { icon: Layers, value: '8+', label: 'Total Projects' },
            { icon: Code2, value: '17+', label: 'Technologies Used' },
            { icon: Star, value: '2+', label: 'Years Experience' }
          ].map((stat, i) => (
            <div key={i} className="bg-[#1A1A1A]/30 border border-foreground/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-[#1A1A1A]/50 transition-colors w-full">
              <stat.icon className="w-6 h-6 text-primary mb-2" />
              <div className="font-display text-3xl text-foreground">{stat.value}</div>
              <div className="font-mono text-xs text-foreground/50 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input 
              suppressHydrationWarning
              type="text" 
              placeholder="Search projects or tech..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A]/40 border border-foreground/20 rounded-full py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <button suppressHydrationWarning className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors font-mono text-xs">
              <SlidersHorizontal className="w-3 h-3" /> Filters
            </button>
            <div className="w-px h-6 bg-foreground/20 mx-2 hidden md:block" />
            {['All', 'Live', 'In Development'].map((filter) => (
              <button 
                suppressHydrationWarning
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-colors ${
                  activeFilter === filter ? 'bg-foreground text-background' : 'bg-[#1A1A1A]/40 text-foreground/60 hover:text-foreground border border-foreground/10'
                }`}
              >
                {filter}
              </button>
            ))}
            <div className="ml-auto md:ml-4 font-mono text-xs text-primary">
              {filteredStudies.length} matching
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-8 w-full">
          <AnimatePresence>
            {filteredStudies.map((study, i) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#1A1A1A]/20 border border-foreground/10 rounded-3xl overflow-hidden hover:bg-[#1A1A1A]/40 hover:border-foreground/20 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  
                  {/* Left: Image Container */}
                  <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-foreground/10">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                    
                    {/* Status Pill */}
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 font-mono text-[10px] text-white/90 uppercase tracking-widest flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${study.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                        {study.status}
                      </div>
                      {study.featured && (
                        <div className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 font-mono text-[10px] text-primary uppercase tracking-widest flex items-center gap-1">
                          <Star className="w-3 h-3 fill-[#F37512]" /> Featured
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Content Container */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      {/* Meta Icons Row */}
                      <div className="flex flex-wrap items-center gap-6 mb-6 font-mono text-xs text-foreground/50">
                        <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {study.year}</div>
                        <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {study.readTime}</div>
                        <div className="flex items-center gap-2"><Target className="w-3 h-3" /> {study.difficulty}</div>
                      </div>

                      {/* Title & Desc */}
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors">{study.title}</h2>
                      <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-8">{study.description}</p>
                      
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {study.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-md border border-foreground/10 bg-[#1A1A1A]/50 text-xs font-mono text-foreground/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-foreground/10 mt-auto">
                      <div className="flex gap-4">
                        {study.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-widest">{highlight.label}</span>
                            <span className="font-sans text-foreground font-medium">{highlight.value}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={`/case-studies/${study.id}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors group/btn">
                        Explore Case Study 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredStudies.length === 0 && (
            <div className="py-20 text-center font-mono text-foreground/40">
              No case studies found matching your criteria.
            </div>
          )}
        </div>

      </div>
      <Footer />
    </main>
  );
}
