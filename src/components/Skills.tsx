'use client';

import { motion } from 'framer-motion';
import { Layers, Server, Code2, Database, Smartphone, Wrench } from 'lucide-react';

const skillsData = [
  {
    id: "01",
    title: "Core Stack",
    category: "MERN",
    icon: <Layers className="w-5 h-5" />,
    items: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: "02",
    title: "Frontend",
    category: "UI/UX",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "03",
    title: "Backend",
    category: "Server",
    icon: <Server className="w-5 h-5" />,
    items: ["REST APIs", "GraphQL", "Firebase", "PostgreSQL"]
  },
  {
    id: "04",
    title: "Database",
    category: "Storage",
    icon: <Database className="w-5 h-5" />,
    items: ["Prisma ORM", "Mongoose", "Supabase", "Redis"]
  },
  {
    id: "05",
    title: "Mobile",
    category: "Cross-Platform",
    icon: <Smartphone className="w-5 h-5" />,
    items: ["React Native", "Expo", "Mobile UI", "App Deployment"]
  },
  {
    id: "06",
    title: "Tools & DevOps",
    category: "Workflow",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Git/GitHub", "Docker", "Vercel", "AWS/EC2"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-background">
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
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-tight"
          >
            Technical Arsenal
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1A1A1A]/30 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              {/* Subtle Faded Background Number */}
              <div 
                className="absolute -right-4 -bottom-4 font-display text-[10rem] leading-none pointer-events-none select-none z-0 transition-opacity duration-500"
                style={{ color: 'var(--foreground)', opacity: 0.04 }}
              >
                {skill.id}
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-background border border-foreground/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground">{skill.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">{skill.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <div 
                      key={item}
                      className="px-4 py-2 rounded-xl bg-background/50 border border-foreground/5 text-foreground/70 font-sans text-sm hover:border-foreground/20 hover:text-foreground transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
