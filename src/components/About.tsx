'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: "React / JavaScript", level: 90 },
  { name: "HTML / CSS / Tailwind", level: 85 },
  { name: "Python / C", level: 80 },
  { name: "Firebase / MongoDB", level: 75 },
  { name: "Responsive Web Dev", level: 85 }
];

const stats = [
  { label: "Live projects", value: 2, suffix: "" },
  { label: "Internships", value: 2, suffix: "" },
  { label: "Tools mastered", value: 12, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "" }
];

function Counter({ from, to, suffix }: { from: number, to: number, suffix: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count < 10 && count > 0 ? "0" + count : count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 bg-background relative border-t border-foreground/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left - Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 w-full aspect-[4/5] rounded-2xl bg-[#1A1A1A]/30 border border-foreground/10 p-8 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-primary opacity-50" />
              <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-primary opacity-50" />
              <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-primary opacity-50" />
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-primary opacity-50" />
              
              <div className="flex justify-between items-start font-mono text-xs text-foreground/50 uppercase tracking-widest relative z-10">
                <span>Profile - 001</span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Live
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center relative mt-12">
                <div className="relative flex items-center justify-center mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-700 w-full h-full">
                  <span className="font-display text-[150px] md:text-[200px] text-foreground leading-none absolute -left-4 md:-left-12">V</span>
                  <span className="font-display text-[150px] md:text-[200px] text-primary italic font-light leading-none absolute -right-4 md:-right-12 mix-blend-screen opacity-90 z-10">K</span>
                </div>
                <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent blur-3xl rounded-full pointer-events-none" />
              </div>

              <div className="relative z-10 font-mono text-[10px] md:text-xs text-foreground/60 uppercase tracking-wider text-center mt-8 pt-6 border-t border-foreground/10">
                Based in Varanasi, UP <br/> Open to collaborations - GLA University
              </div>
            </div>
          </div>

          {/* Right - Bio & Stack */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-12 leading-[1.1]">
              Designed end-to-end.<br/>
              <span className="italic font-light text-primary">Built with intention.</span>
            </h2>

            <div className="space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed mb-16">
              <p>
                I am a Computer Science undergraduate at GLA University, graduating in 2026. My focus lies at the intersection of beautiful interface design and robust front-end engineering.
              </p>
              <p>
                Recently, I interned at MotionCut and Digihero, where I developed responsive web applications, optimized performance, and implemented SEO strategies. 
              </p>
              <p>
                I'm passionate about building AI-driven products. Currently, I'm developing BodhAI, an AI-powered platform for MCQs, coding quizzes, and personalized learning insights using React and Firebase.
              </p>
            </div>

            {/* Stack Pills */}
            <div className="mb-16">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Categorised Tech Stack</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] text-foreground/40 uppercase w-24 shrink-0">Languages</span>
                  {["Python", "C", "JavaScript"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full border border-foreground/10 text-xs text-foreground/80 bg-[#1A1A1A]/50">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] text-foreground/40 uppercase w-24 shrink-0">Frameworks</span>
                  {["React.js", "HTML5", "CSS3", "Tailwind", "Bootstrap"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full border border-foreground/10 text-xs text-foreground/80 bg-[#1A1A1A]/50">{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] text-foreground/40 uppercase w-24 shrink-0">Tools/DB</span>
                  {["Firebase", "MongoDB", "VS Code", "Git", "Canva"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full border border-foreground/10 text-xs text-foreground/80 bg-[#1A1A1A]/50">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Bars */}
            <div className="mb-16 space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-6">Proficiency</h3>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between font-mono text-xs text-foreground/80 mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1A1A1A] rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level + '%' }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                      className="absolute top-0 left-0 h-full bg-primary relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[#FBD5A5]/30 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-foreground/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="font-display text-4xl text-foreground">
                    <Counter from={0} to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
