'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { writingsData } from '@/data/writings';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';

export default function WritingsSection() {
  const writingsList = Object.entries(writingsData).map(([id, data]) => ({
    id,
    ...data,
  }));

  return (
    <section id="blog" className="py-32 bg-background text-foreground relative border-t border-foreground/10">
      <div id="writings" />
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[#FF7029] text-sm font-bold">04</span>
              <div className="w-12 h-[1px] bg-[#FF7029]" />
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60 font-semibold">BLOG & WRITINGS</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Latest <span className="italic font-light text-[#FF7029]">Insights</span> & Articles
            </h2>
          </div>

          <Link 
            href="/writings" 
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF7029] hover:text-[#E65F1E] font-bold transition-colors group border-b border-[#FF7029]/30 pb-1 w-fit"
          >
            EXPLORE ALL WRITINGS 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Writings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writingsList.slice(0, 3).map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link 
                href={`/writing/${article.id}`}
                className="group block h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#121212] overflow-hidden hover:border-[#FF7029]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Hero Image Container */}
                <div className="w-full h-52 relative overflow-hidden bg-foreground/5">
                  <img 
                    src={article.heroImage} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {article.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata Row */}
                    <div className="flex items-center gap-4 font-mono text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FF7029]" />
                        {article.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FF7029]" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#FF7029] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-6">
                      {article.lead}
                    </p>
                  </div>

                  {/* Read Link CTA */}
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF7029] pt-4 border-t border-black/10 dark:border-white/10 group-hover:gap-3 transition-all">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
