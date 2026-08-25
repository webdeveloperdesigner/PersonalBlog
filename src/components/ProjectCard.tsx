'use client';

import { User, Users, Lock } from 'lucide-react';

export default function ProjectCard({ project }: { project: any }) {
  const isBlurred = project.isBlurred;

  return (
    <a 
      href={isBlurred ? '#' : project.url} 
      target={isBlurred ? '_self' : '_blank'} 
      rel="noopener noreferrer"
      onClick={(e) => {
        if (isBlurred) {
          e.preventDefault();
        }
      }}
      className={`project-card group block w-full md:w-[500px] lg:w-[600px] shrink-0 h-[400px] md:h-[58vh] min-h-[440px] max-h-[600px] rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 relative overflow-hidden transition-all duration-300 shadow-xl ${
        isBlurred ? 'cursor-not-allowed select-none' : 'hover:border-[#FF7029]/60'
      }`}
    >
      {/* Blurred Overlay for In-Development / Confidential Projects */}
      {isBlurred && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/50 backdrop-blur-md p-6 text-center">
          <div className="p-3.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 mb-3 shadow-xl backdrop-blur-lg">
            <Lock className="w-6 h-6 animate-pulse" />
          </div>
          <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-white px-4 py-1.5 rounded-full bg-purple-600/40 border border-purple-400/50 mb-2 shadow-md">
            🔒 IN DEVELOPMENT
          </span>
          <p className="font-mono text-xs text-white/80 font-semibold tracking-wider uppercase">
            CLASSIFIED • LAUNCHING SOON
          </p>
        </div>
      )}

      {/* Corner Brackets */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#FF7029] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#FF7029] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#FF7029] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#FF7029] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />

      {/* Procedural Pattern Visualizer */}
      <div className="absolute inset-0 bg-[#f4f5f8] dark:bg-[#0A0A0C] overflow-hidden z-0">
        <div className="absolute inset-0 opacity-25 transition-transform duration-700 group-hover:scale-105" 
             style={{
               backgroundImage: project.pattern === 'grid' 
                 ? `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`
                 : project.pattern === 'lines'
                 ? `repeating-linear-gradient(45deg, ${project.color} 0, ${project.color} 1px, transparent 0, transparent 50%)`
                 : project.pattern === 'circles'
                 ? `radial-gradient(circle, ${project.color} 1px, transparent 2px)`
                 : `linear-gradient(135deg, ${project.color} 25%, transparent 25%) -50px 0, linear-gradient(225deg, ${project.color} 25%, transparent 25%) -50px 0`,
               backgroundSize: project.pattern === 'grid' ? '40px 40px' 
                 : project.pattern === 'lines' ? '20px 20px'
                 : project.pattern === 'circles' ? '30px 30px'
                 : '40px 40px',
               filter: 'blur(1px)'
             }} 
         />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#0A0A0C] dark:via-[#0A0A0C]/85" />
      </div>

      <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 ${isBlurred ? 'blur-sm select-none opacity-40' : ''}`}>
        <div className="flex justify-between items-start">
          <div className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/15 text-gray-800 dark:text-gray-200">
            {project.id}
          </div>
          <div className="font-mono text-xs text-gray-800 dark:text-gray-200 flex items-center gap-2 font-medium">
            <span className={`w-1.5 h-1.5 rounded-full ${isBlurred ? 'bg-purple-500 animate-ping' : 'bg-emerald-500 dark:bg-emerald-400 animate-pulse'}`} />
            {isBlurred ? 'In Dev 🔒' : 'Live Project ↗'}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3 font-mono text-xs text-gray-600 dark:text-gray-400">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-[#FF7029]" />
            <span className="font-semibold text-[#FF7029]">{project.category}</span>
            {project.projectType && (
              <>
                <span className="w-1 h-1 rounded-full bg-foreground/30" />
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider ${
                  project.projectType === 'Personal Project'
                    ? 'bg-purple-500/10 text-purple-500 border border-purple-500/30'
                    : 'bg-blue-500/10 text-blue-500 border border-blue-500/30'
                }`}>
                  {project.projectType === 'Personal Project' ? (
                    <>
                      <User className="w-3 h-3" />
                      <span>PERSONAL</span>
                    </>
                  ) : (
                    <>
                      <Users className="w-3 h-3" />
                      <span>GROUP</span>
                    </>
                  )}
                </span>
              </>
            )}
          </div>
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#FF7029] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm md:text-base mb-6 max-w-sm font-sans leading-relaxed text-gray-600 dark:text-gray-300">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <span key={i} className="text-[10px] uppercase font-mono tracking-wider px-3 py-1.5 rounded-full border border-black/10 dark:border-white/15 text-gray-700 dark:text-gray-200 bg-black/5 dark:bg-white/10 backdrop-blur-md font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
