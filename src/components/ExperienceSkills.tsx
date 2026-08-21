'use client';

import { motion } from 'framer-motion';
import { 
  Eye, Code2, Calendar, Leaf, Atom, Hexagon, Wind, Flame, 
  Cloud, GitBranch, Send, Database, Lock, Network, ChevronUp,
  FileCode, TerminalSquare, Layout
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Full Stack Development — JOVAC",
    company: "Coding Blocks @ GLA University",
    date: "May 2024 - July 2024",
    icon: <Eye className="w-5 h-5 text-[#FF7029]" />,
    bullets: [
      "Completed job-oriented full-stack development course on the MERN stack.",
      "Built a fully functional e-commerce app with admin panel and Razorpay payment integration.",
      "Integrated secure JWT auth, real-time inventory, and Stripe/Razorpay payment gateway."
    ]
  },
  {
    id: 2,
    role: "Java Developer Training",
    company: "Internship Studio",
    date: "July 2024 - August 2024",
    icon: <Code2 className="w-5 h-5 text-[#FF7029]" />,
    bullets: [
      "Completed Java programming training with emphasis on OOP concepts.",
      "Built a 'Pizza Bill Generator' — ordering and billing system with dynamic pricing.",
      "Practised writing clean, modular Java code following industry best practices."
    ]
  }
];

// Helper to render tech stack icons pseudo-accurately using Lucide/Text
const renderTechIcon = (tech: string) => {
  const iconProps = { className: "w-6 h-6" };
  
  switch(tech) {
    case "MongoDB": return <Leaf {...iconProps} className="w-6 h-6 text-emerald-500" />;
    case "Express.js": return <span className="font-bold text-foreground text-sm tracking-tight">ex</span>;
    case "React.js": return <Atom {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case "Node.js": return <Hexagon {...iconProps} className="w-6 h-6 text-emerald-600" />;
    case "Next.js": return <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-[10px]">N</div>;
    case "HTML5": return <FileCode {...iconProps} className="w-6 h-6 text-orange-500" />;
    case "CSS3": return <FileCode {...iconProps} className="w-6 h-6 text-blue-500" />;
    case "JavaScript": return <div className="w-6 h-6 bg-yellow-400 text-black flex items-center justify-center font-bold text-[10px] rounded">JS</div>;
    case "TypeScript": return <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] rounded">TS</div>;
    case "Tailwind CSS": return <Wind {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case "REST APIs": return <Network {...iconProps} className="w-6 h-6 text-blue-500" />;
    case "JWT Auth": return <Lock {...iconProps} className="w-6 h-6 text-purple-500" />;
    case "Postman": return <Send {...iconProps} className="w-6 h-6 text-orange-500" />;
    case "PostgreSQL": return <Database {...iconProps} className="w-6 h-6 text-blue-400" />;
    case "SQL": return <Database {...iconProps} className="w-6 h-6 text-blue-500" />;
    case "Prisma ORM": case "Prisma": return <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-teal-500" />;
    case "Firebase": return <Flame {...iconProps} className="w-6 h-6 text-amber-500" />;
    case "AWS": return <Cloud {...iconProps} className="w-6 h-6 text-orange-400" />;
    case "Vercel": return <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-foreground" />;
    case "Git": return <GitBranch {...iconProps} className="w-6 h-6 text-orange-600" />;
    case "React Native": return <Atom {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case "Expo": return <ChevronUp {...iconProps} className="w-6 h-6 text-foreground stroke-[3]" />;
    case "Convex": return <Database {...iconProps} className="w-6 h-6 text-amber-400" />;
    case "Mobile UI": case "Mobile": return <Layout {...iconProps} className="w-6 h-6 text-orange-500" />;
    default: return <TerminalSquare {...iconProps} className="w-6 h-6 text-foreground/60" />;
  }
};

const skills = [
  { id: "01", title: "CORE MERN STACK", badge: "MAIN STACK", items: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js"] },
  { id: "02", title: "FRONTEND STACK", badge: "UI / UX", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { id: "03", title: "BACKEND & APIS", badge: "SERVER SIDE", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Postman"] },
  { id: "04", title: "DATABASE & ORM", badge: "DATA LAYER", items: ["MongoDB", "PostgreSQL", "SQL", "Prisma ORM", "Firebase"] },
  { id: "05", title: "CLOUD & DEVOPS", badge: "DEPLOYMENT", items: ["AWS", "Firebase", "Vercel", "Git", "Postman"] },
  { id: "06", title: "MOBILE DEVELOPMENT", badge: "CROSS-PLATFORM", items: ["React Native", "Expo", "Convex", "Mobile UI", "Firebase"] }
];

export default function ExperienceSkills() {
  return (
    <section id="experience" className="py-32 relative bg-background text-foreground min-h-screen transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 240, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 240, 240, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex gap-4 mb-6">
            <span className="font-mono text-xs text-[#FF7029] uppercase tracking-[0.2em]">Resume</span>
            <div className="px-3 py-1 border border-[#FF7029]/30 rounded font-mono text-[10px] text-[#FF7029] uppercase tracking-widest">
              Details
            </div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
            Experience <span className="text-[#FF7029]">&</span> <span className="text-[#FF7029]">Skills</span>
          </h2>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20">
          
          {/* LEFT COLUMN: EXPERIENCE */}
          <div className="relative">
            {/* Orange Timeline Line */}
            <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-[#FF7029] to-[#FF7029]/10 z-0" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Glowing Orange Dot */}
                  <div className="absolute left-[4px] top-8 w-4 h-4 rounded-full bg-[#FF7029] z-10 shadow-[0_0_15px_rgba(255,112,41,0.8)]" />

                  {/* Card */}
                  <div className="bg-background border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-[#FF7029]/45 transition-all duration-300">
                    
                    {/* Card Header Row */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      
                      <div className="flex items-start gap-4">
                        {/* Icon Box */}
                        <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 mt-1">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[#FF7029] text-sm">💼</span>
                            <p className="font-mono text-xs text-foreground/60 tracking-widest uppercase">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-foreground/10 bg-foreground/5 h-fit shrink-0">
                        <Calendar className="w-3 h-3 text-[#FF7029]" />
                        <span className="font-mono text-[10px] text-foreground/60 uppercase tracking-widest">{exp.date}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF7029] shrink-0 mt-2" />
                          <p className="font-sans text-sm text-foreground/70 leading-relaxed">{bullet}</p>
                        </li>
                      ))}
                    </ul>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background border border-foreground/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#FF7029]/45 transition-colors duration-300"
              >
                {/* Subtle Faded Background Number */}
                <div 
                  className="absolute right-2 bottom-0 font-display text-7xl pointer-events-none select-none z-0 transition-opacity"
                  style={{ color: 'var(--foreground)', opacity: 0.04 }}
                >
                  {skill.id}
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7029]" />
                    <h4 className="font-display text-sm tracking-wide text-foreground">{skill.title}</h4>
                  </div>
                  <div className="px-2 py-1 rounded border border-[#FF7029]/30 text-[#FF7029] font-mono text-[8px] uppercase tracking-widest">
                    {skill.badge}
                  </div>
                </div>

                {/* Icons Grid */}
                <div className="flex justify-between items-end relative z-10 w-full px-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        {renderTechIcon(item)}
                      </div>
                      <span className="font-mono text-[8px] text-[#858585] uppercase tracking-widest text-center w-12 truncate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
