'use client';

import { useParams } from 'next/navigation';
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Target, Lightbulb, LineChart, Layers, CheckCircle2, ExternalLink, Terminal } from 'lucide-react';
import Link from 'next/link';

// Placeholder Data - Replace this with your actual data source later
const caseStudiesData: Record<string, any> = {
  'bodhai': {
    title: "BodhAI",
    subtitle: "AI-powered learning and assessment platform with intelligent analytics.",
    year: "2024",
    status: "Live",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80",
    overview: "BodhAI is a comprehensive learning and assessment platform designed to scale the capabilities of educators and students alike. It leverages AI to generate smart mock tests, evaluate coding assignments, and provide deep analytical insights into student performance.",
    challenge: "The primary challenge was building a scalable infrastructure capable of handling concurrent real-time assessments while seamlessly integrating AI evaluation APIs without causing significant latency for the end-user.",
    solution: "We engineered a robust frontend architecture using React and Tailwind CSS, coupled with Firebase for real-time data synchronization. The AI evaluation was offloaded to optimized edge functions to ensure immediate feedback.",
    results: [
      "Successfully onboarded over 1,000+ active users.",
      "Reduced assessment evaluation time by 85%.",
      "Achieved a 99.9% uptime during peak examination hours."
    ],
    techStack: {
      languages: ["JavaScript", "TypeScript", "HTML/CSS"],
      frameworks: ["React", "Next.js", "Tailwind CSS"],
      tools: ["Firebase", "OpenAI API", "Git"]
    },
    liveLink: "#",
    sourceLink: "#"
  },
  'portfolio': {
    title: "Cinematic Portfolio",
    subtitle: "A premium, 3D-integrated personal portfolio demonstrating modern UI/UX.",
    year: "2025",
    status: "Live",
    heroImage: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1600&auto=format&fit=crop&q=80",
    overview: "This portfolio was designed to push the boundaries of standard web presentation, creating an immersive, cinematic experience inspired by industrial and digital workshop aesthetics.",
    challenge: "Integrating high-performance WebGL and complex GSAP scroll animations without degrading the Lighthouse performance score or causing layout jank on mobile devices.",
    solution: "Utilized Next.js 14 App Router for static generation, and carefully dynamically imported heavy Three.js components. Animations were hardware-accelerated and scroll-triggers were optimized for mobile.",
    results: [
      "Achieved a 98+ Lighthouse Performance Score.",
      "Seamless 60fps animations across all tested devices.",
      "Created a highly reusable and modular component architecture."
    ],
    techStack: {
      languages: ["TypeScript", "GLSL"],
      frameworks: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
      tools: ["Vercel", "GSAP", "Lenis"]
    },
    liveLink: "#",
    sourceLink: "#"
  }
};

export default function CaseStudyDetail() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : 'bodhai';
  
  // Fallback to BodhAI if ID is not found in mock data
  const data = caseStudiesData[id] || caseStudiesData['bodhai'];

  return (
    <main className="flex min-h-screen flex-col bg-background">

      {/* Cinematic Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-end">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-6 md:left-16 z-20">
          <Link href="/case-studies" className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/70 hover:text-white transition-colors text-sm font-mono">
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 md:px-16 pb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-mono text-[10px] text-white/90 tracking-widest">
                {data.year}
              </div>
              <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 font-mono text-[10px] text-white/90 tracking-widest flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${data.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                {data.status}
              </div>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
              {data.title}
            </h1>
            <p className="text-foreground/60 text-lg md:text-xl max-w-2xl font-sans">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container mx-auto px-6 md:px-16 py-16 md:py-24 max-w-5xl">
        
        {/* Overview */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="font-mono text-sm tracking-[0.2em] text-primary uppercase">Overview</h2>
          </div>
          <p className="text-foreground/80 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-sans">
            {data.overview}
          </p>
        </motion.section>

        {/* Challenge & Solution Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-foreground/10 p-8 md:p-10 bg-[#1A1A1A]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-mono text-sm tracking-widest text-foreground/60 uppercase">The Challenge</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed font-sans">
              {data.challenge}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-foreground/10 p-8 md:p-10 bg-[#1A1A1A]/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-mono text-sm tracking-widest text-foreground/60 uppercase">The Solution</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed font-sans">
              {data.solution}
            </p>
          </motion.div>
        </section>

        {/* Results & Impact */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <LineChart className="w-6 h-6 text-primary" />
            <h2 className="font-mono text-sm tracking-[0.2em] text-primary uppercase">Results & Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.results.map((result: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-foreground/10 bg-[#1A1A1A]/20 backdrop-blur-sm hover:bg-[#1A1A1A]/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground/80 font-sans">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-primary" />
            <h2 className="font-mono text-sm tracking-[0.2em] text-primary uppercase">Tech Stack</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-3xl border border-foreground/10 bg-[#1A1A1A]/20">
            <div>
              <h3 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.languages.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full border border-foreground/10 bg-[#1A1A1A]/50 font-sans text-xs text-foreground/70">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.frameworks.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full border border-foreground/10 bg-[#1A1A1A]/50 font-sans text-xs text-foreground/70">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.tools.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full border border-foreground/10 bg-[#1A1A1A]/50 font-sans text-xs text-foreground/70">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer CTAs */}
        <div className="pt-16 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-sans text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
            View Live Project
            <ExternalLink className="w-4 h-4" />
          </a>
          <a href={data.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-transparent text-foreground rounded-full font-sans text-sm font-medium hover:bg-[#1A1A1A]/50 transition-all border border-foreground/30 hover:scale-[1.02]">
            <Terminal className="w-4 h-4" />
            View Source
          </a>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}
