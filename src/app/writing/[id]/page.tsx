'use client';

import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from 'next/navigation';
import { writingsData } from '@/data/writings';

export default function WritingDetail() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : 'thetourofiitm';
  
  // Fetch post from our data file, fallback to iitm if not found
  const post = writingsData[id] || writingsData['thetourofiitm'];

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-background">
      
      {/* Cinematic Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-end">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 md:left-16 z-20">
          <Link href="/writings" className="inline-flex items-center gap-2 px-5 py-2.5 bg-background/40 backdrop-blur-md rounded-full border border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-background/60 transition-all text-sm font-mono tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4" />
            Writings
          </Link>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 md:px-16 pb-16 relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-foreground/50 tracking-widest uppercase mb-6">
              <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Editorial Layout */}
      <div className="container mx-auto px-6 md:px-16 py-16 lg:py-24 flex-1 relative max-w-7xl">
        
        {/* Floating Share Button Desktop */}
        <div className="hidden lg:flex flex-col gap-4 sticky top-32 float-left -ml-24 mt-4">
          <button 
            onClick={handleShare}
            className="p-3 rounded-full bg-[#1A1A1A]/30 border border-foreground/10 text-foreground/50 hover:text-primary hover:border-primary/30 transition-all relative group shadow-xl" 
            title="Share Article"
          >
            <Share2 className="w-4 h-4" />
            {copied && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary bg-[#1A1A1A] px-2 py-1 rounded border border-primary/30 whitespace-nowrap">Copied!</span>
            )}
          </button>
        </div>

        <div className="w-full">
          {/* Intro & Highlights (Full Width) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-24"
          >
            <p className="text-xl md:text-2xl text-foreground/90 font-sans leading-relaxed mb-12 border-l-2 border-primary pl-6 md:pl-8 py-2">
              {post.lead}
            </p>
            
            <div className="bg-[#1A1A1A]/20 border border-foreground/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-8">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {post.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <p className="text-foreground/80 font-sans">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Alternating Image/Text Sections */}
          <div className="flex flex-col gap-24 lg:gap-32 mb-24">
            {post.sections.map((section: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image Column */}
                <div className={`relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-foreground/10 ${idx % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                
                {/* Text Column */}
                <div className={`prose prose-invert prose-lg max-w-none font-sans leading-loose text-foreground/80 
                               prose-headings:font-display prose-headings:text-foreground prose-headings:font-normal
                               prose-p:mb-6
                               ${idx % 2 !== 0 ? 'lg:col-start-1' : ''}`}
                >
                  <h2 className="text-3xl lg:text-4xl text-primary mb-8">{section.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center border-t border-foreground/10 pt-24"
          >
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-12">{post.conclusion.title}</h2>
            
            <div 
              className="prose prose-invert prose-lg max-w-none font-sans leading-loose text-foreground/80 text-left mb-16"
              dangerouslySetInnerHTML={{ __html: post.conclusion.content }} 
            />

            <blockquote className="text-xl md:text-2xl text-primary font-display italic leading-relaxed py-8 px-12 bg-[#1A1A1A]/30 rounded-3xl border border-primary/20 relative">
              <span className="absolute -top-6 left-6 text-6xl text-primary/20 font-serif">"</span>
              {post.conclusion.quote}
              <span className="absolute -bottom-12 right-6 text-6xl text-primary/20 font-serif">"</span>
            </blockquote>
          </motion.div>

          {/* Author Block */}
          <div className="mt-32 pt-12 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-foreground/10 flex items-center justify-center text-foreground font-display text-xl shadow-[0_0_15px_rgba(243,117,18,0.1)]">
                V<span className="text-primary">K</span>
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Written by Vivek</h4>
                <p className="font-mono text-xs text-foreground/50 tracking-widest uppercase">Blockchain Engineer & Full Stack Developer</p>
              </div>
            </div>
            
            {/* Mobile Share Button */}
            <button 
              onClick={handleShare}
              className="lg:hidden flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A]/30 border border-foreground/10 text-foreground/80 hover:text-primary transition-all font-mono text-xs uppercase tracking-widest"
            >
              <Share2 className="w-4 h-4" /> {copied ? "Copied!" : "Share Article"}
            </button>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
