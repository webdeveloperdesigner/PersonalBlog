'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, Terminal } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "JOVAC",
    location: "Remote",
    period: "2023 - Present",
    description: "Architecting and developing full-stack web applications using the MERN stack and Next.js. Leading the transition to server-side rendering for improved SEO and performance. Integrating complex API systems and managing scalable MongoDB databases.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TailwindCSS"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Internship Studio",
    location: "Remote",
    period: "2022 - 2023",
    description: "Developed responsive and interactive user interfaces using React.js. Collaborated with design teams to implement pixel-perfect web experiences. Optimized frontend assets resulting in a 40% reduction in initial page load time.",
    tech: ["React.js", "JavaScript", "Figma", "CSS3", "Redux"]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experience" className="py-32 relative bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Career Path</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-tight"
          >
            Experience
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/10 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-[3px] border-primary md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(243,117,18,0.5)] mt-6 md:mt-0" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-[#1A1A1A]/40 backdrop-blur-md border border-foreground/10 p-8 rounded-3xl hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                      
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center text-primary">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="font-display text-2xl text-foreground">{exp.role}</h3>
                              <p className="font-sans text-primary">{exp.company}</p>
                            </div>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-foreground/50 uppercase tracking-widest mb-6 border-b border-foreground/10 pb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-sans text-foreground/70 leading-relaxed mb-8">
                          {exp.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          <Terminal className="w-4 h-4 text-primary mr-2" />
                          {exp.tech.map(t => (
                            <span key={t} className="font-mono text-[10px] text-foreground/60 uppercase tracking-widest px-2 py-1 rounded bg-background border border-foreground/10">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
