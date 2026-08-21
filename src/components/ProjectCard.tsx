'use client';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-card group block w-full md:w-[500px] lg:w-[600px] shrink-0 h-[400px] md:h-[58vh] min-h-[440px] max-h-[600px] rounded-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 relative overflow-hidden transition-all duration-300 hover:border-[#FF7029]/60 shadow-xl"
    >
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

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/15 text-gray-800 dark:text-gray-200">
            {project.id}
          </div>
          <div className="font-mono text-xs text-gray-800 dark:text-gray-200 flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Live Project ↗
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-3 font-mono text-xs text-gray-600 dark:text-gray-400">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-[#FF7029]" />
            <span className="font-semibold text-[#FF7029]">{project.category}</span>
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
