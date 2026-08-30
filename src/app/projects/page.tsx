import Footer from "@/components/Footer";
import { User, Users, Lock } from "lucide-react";

const allProjects = [
  { 
    id: "00", 
    year: "2026", 
    category: "Stealth / AI Systems", 
    type: "Personal Project",
    title: "heee hee", 
    desc: "Next-gen autonomous multi-agent platform for real-time Authentication", 
    tags: ["Authentication", "OAuth", "RAG"], 
    url: "#",
    isBlurred: true
  },
  { 
    id: "01", 
    year: "2026", 
    category: "GenAI / EdTech", 
    type: "Personal Project",
    title: "Veda Resume", 
    desc: "AI-powered smart resume builder, ATS analyzer, and optimization engine", 
    tags: ["Next.js", "TypeScript", "Tailwind", "AI"], 
    url: "https://github.com/webdeveloperdesigner/veda-resume" 
  },
  { 
    id: "02", 
    year: "2025", 
    category: "AI / EdTech", 
    type: "Personal Project",
    title: "BodhAI", 
    desc: "AI-powered learning practice platform with smart MCQs and coding quizzes", 
    tags: ["React", "Firebase", "Tailwind", "AI"], 
    url: "https://github.com/webdeveloperdesigner/BodhAI" 
  },
  { 
    id: "03", 
    year: "2024", 
    category: "Healthcare / AI", 
    type: "College Group Project",
    title: "AI Healthcare Chatbot", 
    desc: "Healthcare chatbot website for user-friendly medical assistance and diagnosis", 
    tags: ["React", "JavaScript", "AI", "Node.js"], 
    url: "https://github.com/webdeveloperdesigner/AI-Based-Chatbot-for-Healthcare-" 
  },
];

export default function ProjectsArchive() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1">
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight text-center">Project Archive</h1>
        <p className="text-foreground/60 mb-16 font-mono text-sm text-center">A complete list of things I've built.</p>
        
        <div className="w-full">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-foreground/20 font-mono text-xs text-foreground/40 uppercase tracking-wider mb-4">
            <div className="col-span-1">Year</div>
            <div className="col-span-3">Project</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-3">Built with</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-1 text-right">Link</div>
          </div>
          
          <div className="flex flex-col">
            {allProjects.map((p) => (
              <div 
                key={p.id} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-foreground/10 transition-colors group px-4 -mx-4 rounded-lg items-center relative ${
                  p.isBlurred ? 'bg-purple-500/[0.03] hover:bg-purple-500/[0.06]' : 'hover:bg-[#1A1A1A]/30'
                }`}
              >
                <div className="col-span-1 font-mono text-xs text-foreground/50 flex items-center">{p.year}</div>
                <div className="col-span-3 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <span className={`font-display text-xl transition-colors ${p.isBlurred ? 'blur-[3px] select-none text-foreground/70' : 'text-foreground group-hover:text-primary'}`}>
                      {p.title}
                    </span>
                    {p.isBlurred && (
                      <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/40 font-mono text-[9px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> IN DEV
                      </span>
                    )}
                  </div>
                  <span className={`text-sm mt-1 md:hidden ${p.isBlurred ? 'blur-[2px] select-none text-foreground/40' : 'text-foreground/50'}`}>
                    {p.desc}
                  </span>
                </div>
                <div className="col-span-2 flex items-center">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider ${
                    p.type === 'Personal Project'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                  }`}>
                    {p.type === 'Personal Project' ? (
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
                </div>
                <div className={`col-span-3 font-mono text-xs flex items-center flex-wrap gap-2 ${p.isBlurred ? 'blur-[2px] select-none text-foreground/40' : 'text-foreground/60'}`}>
                  {p.tags.join(" · ")}
                </div>
                <div className={`col-span-2 font-mono text-xs flex items-center hidden md:flex ${p.isBlurred ? 'text-purple-400 font-bold' : 'text-foreground/60'}`}>
                  {p.category}
                </div>
                <div className="col-span-1 flex items-center md:justify-end mt-4 md:mt-0">
                  {p.isBlurred ? (
                    <span className="text-purple-400 font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> SOON
                    </span>
                  ) : (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary font-mono text-xs hover:underline">
                      Visit ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
