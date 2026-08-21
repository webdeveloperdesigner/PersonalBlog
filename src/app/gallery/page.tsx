'use client';

import { useState } from 'react';
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Oracle Cloud Infrastructure 2025', category: 'Certifications', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-[4/3]' },
  { id: 2, title: 'Web Development (DevTown)', category: 'Certifications', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-[3/4]' },
  { id: 3, title: 'Ethereal Light', category: 'Photography', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-square' },
  { id: 4, title: 'Urban Geometry', category: 'Design', src: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-[4/5]' },
  { id: 5, title: 'Abstract Flow', category: 'Art', src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-video' },
  { id: 6, title: 'Backend Development (Node.js)', category: 'Certifications', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-[3/4]' },
  { id: 7, title: 'NPTEL Certificate', category: 'Certifications', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-[4/3]' },
  { id: 8, title: 'Resume', category: 'Certifications', src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80', aspect: 'aspect-[4/5]' },
];

const categories = ['All', 'Certifications', 'Photography', 'Design', 'Art'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'All' ? true : item.category === activeFilter
  );

  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-12 md:py-24 flex-1">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8 tracking-tight text-center">
            Gallery <span className="text-foreground/40">— {filteredItems.length}</span>
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 flex items-center gap-2
                  ${activeFilter === cat 
                    ? 'bg-foreground text-background border border-foreground' 
                    : 'bg-transparent text-foreground/60 border border-foreground/20 hover:border-foreground/50 hover:text-foreground'
                  }
                `}
              >
                {activeFilter === cat && <span className="w-1.5 h-1.5 rounded-full bg-background" />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 group">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "backOut" }}
                key={item.id}
                className="mb-6 break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group/item
                           opacity-90 brightness-90 transition-all duration-500
                           group-hover:opacity-30 group-hover:brightness-50
                           hover:!opacity-100 hover:!brightness-110 hover:!scale-[1.02] hover:z-10"
              >
                <div className={`w-full relative ${item.aspect}`}>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70 group-hover/item:opacity-90 transition-opacity duration-300" />
                  
                  {/* Category Pill (Top Right) */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 font-mono text-[10px] text-white/80 uppercase tracking-widest opacity-0 translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-300 z-20">
                    {item.category}
                  </div>

                  {/* Certification Badge (Bottom Left) */}
                  {item.category === 'Certifications' && (
                    <div className="absolute bottom-14 left-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Award className="w-4 h-4 text-white/80" />
                    </div>
                  )}

                  {/* Title (Bottom Left) */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-xl md:text-2xl text-white font-medium drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
            More certifications & images coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
