'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, Calendar, Award, Code2, Globe, Sparkles, 
  GraduationCap, Briefcase, Rocket, ExternalLink, Cpu, BookOpen
} from 'lucide-react';

const timelineEvents = [
  {
    year: "2026",
    period: "Jan 2026 — Featured Article",
    badge: "IIT MADRAS WRITING",
    title: "Shaastra 2026 & The Tour of IIT Madras",
    company: "IIT Madras / Shaastra Summit",
    type: "Tech Festival & AI Symposium Publication",
    description: "An unforgettable 5-day journey through Shaastra 2026 at IIT Madras (Jan 2-6, 2026) — experiencing workshops, hackathons, robotics exhibitions, tech talks, and AI research.",
    tags: ["IIT Madras", "Shaastra 2026", "AI & Robotics", "Publication"],
    linkUrl: "/writing/thetourofiitm",
    linkLabel: "Read Publication ↗"
  },
  {
    year: "2025",
    period: "Jan 2025 — Present",
    badge: "FLAGSHIP STARTUP",
    title: "Founder & Lead Architect @ BodhAI",
    company: "BodhAI Learning Platform",
    type: "AI Product Engineering",
    description: "Architected and launched BodhAI, an intelligent edtech platform featuring AI Smart MCQs, automated coding challenge evaluations, exam proctoring, and real-time performance analytics.",
    tags: ["BodhAI", "React", "Firebase", "Gemini API", "AI EdTech"],
    linkUrl: "https://github.com/webdeveloperdesigner/BodhAI",
    linkLabel: "View BodhAI Repository ↗"
  },
  {
    year: "2025",
    period: "Jan — Feb 2025",
    badge: "INTERNSHIP",
    title: "Web Developer Intern @ Digihero",
    company: "Digihero Digital Agency",
    type: "SEO & Content Management",
    description: "Optimized technical SEO and content management workflows for high-traffic WordPress platforms. Conducted keyword research, structured meta tags, and boosted search engine visibility.",
    tags: ["WordPress", "SEO Optimization", "Digital Marketing", "Content Engineering"],
    linkUrl: "https://github.com/webdeveloperdesigner/PersonalBlog",
    linkLabel: "View Internship Projects ↗"
  },
  {
    year: "2024",
    period: "Oct — Dec 2024",
    badge: "AI HEALTHCARE",
    title: "AI Healthcare Diagnostic Chatbot",
    company: "Independent Product",
    type: "AI & Medical Guidance",
    description: "Engineered an intelligent medical assistant providing preliminary symptom evaluation, AI health advice, and triage routing using React, Python, and OpenAI API.",
    tags: ["React", "Python", "OpenAI API", "Node.js"],
    linkUrl: "https://github.com/webdeveloperdesigner/AI-Based-Chatbot-for-Healthcare-",
    linkLabel: "View Healthcare Repository ↗"
  },
  {
    year: "2024",
    period: "Jun — Jul 2024",
    badge: "INTERNSHIP",
    title: "Web Development Intern @ MotionCut",
    company: "MotionCut Software",
    type: "Frontend Engineering",
    description: "Developed and maintained responsive web applications, executed interface audits, optimized asset loading, and debugged cross-browser layout compatibility issues.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    linkUrl: "https://github.com/webdeveloperdesigner/PersonalBlog",
    linkLabel: "View Internship Projects ↗"
  },
  {
    year: "2022 — 2026",
    period: "2022 — 2026 (Final Year)",
    badge: "ACADEMIC DEGREE",
    title: "B.Tech in Computer Science Engineering (Blockchain)",
    company: "GLA University",
    type: "Undergraduate Degree",
    description: "Specializing in Blockchain Technology and Distributed Systems. Built strong foundations in Data Structures, Algorithms, Smart Contracts (Solidity), Web3.js, and Full-Stack MERN Architecture.",
    tags: ["GLA University", "B.Tech CSE", "Blockchain Specialization", "Solidity"],
    linkUrl: "/me",
    linkLabel: "View Student Deck ↗"
  }
];

export default function TimelinePage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground pt-40 pb-24 px-6 md:px-16 relative selection:bg-primary/30 selection:text-primary">
        
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          
          {/* Top Back Navigation */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-primary transition-colors group uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#FF7029]" />
              <span>RETURN TO PORTFOLIO</span>
            </Link>

            <div className="flex items-center gap-3 font-mono text-xs text-foreground/60">
              <Link href="/writings" className="hover:text-primary transition-colors">
                Writings Hub
              </Link>
              <span>•</span>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects Archive
              </Link>
              <span>•</span>
              <Link href="/changelog" className="hover:text-primary transition-colors">
                Changelog
              </Link>
            </div>
          </div>

          {/* Header Title Section */}
          <div className="mb-20 border-b border-foreground/10 pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7029]/10 border border-[#FF7029]/30 font-mono text-xs font-bold text-[#FF7029] tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF7029] animate-pulse" />
              <span>ENGINEERING CHRONOLOGY (2022 — 2026)</span>
            </div>

            <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight text-foreground uppercase mb-6">
              CAREER TIMELINE
            </h1>
            
            <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-2xl leading-relaxed">
              Milestones, professional internships, product launches, academic credentials, and conference publications with direct linked destinations.
            </p>
          </div>

          {/* Timeline Vertical Track */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF7029] via-[#FF7029]/40 to-foreground/10 md:-translate-x-1/2" />

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-[11px] md:left-1/2 w-3.5 h-3.5 rounded-full bg-[#FF7029] border-2 border-background md:-translate-x-1/2 z-20 shadow-[0_0_12px_rgba(255,112,41,0.8)] top-6 md:top-auto" />

                  {/* Event Card Container */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'
                  }`}>
                    <div className="p-8 rounded-3xl bg-foreground/[0.03] border border-foreground/10 hover:border-[#FF7029]/50 transition-all duration-300 group shadow-lg">
                      
                      {/* Year & Badge */}
                      <div className={`flex flex-wrap items-center gap-3 mb-3 ${
                        index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        <span className="font-mono text-sm font-bold text-[#FF7029]">
                          {event.period}
                        </span>
                        <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-foreground/10 border border-foreground/20 text-foreground/80 uppercase tracking-wider">
                          {event.badge}
                        </span>
                      </div>

                      {/* Title & Subhead */}
                      <h3 className="font-display font-extrabold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="font-mono text-xs text-foreground/50 uppercase tracking-widest mb-4 font-semibold">
                        {event.company} • {event.type}
                      </div>

                      {/* Description */}
                      <p className="font-sans text-foreground/70 text-sm leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 mb-6 ${
                        index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        {event.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/60">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Direct Link */}
                      <div>
                        {event.linkUrl.startsWith('http') ? (
                          <a 
                            href={event.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF7029] hover:underline"
                          >
                            <span>{event.linkLabel}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link 
                            href={event.linkUrl}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF7029] hover:underline"
                          >
                            <span>{event.linkLabel}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>

                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
