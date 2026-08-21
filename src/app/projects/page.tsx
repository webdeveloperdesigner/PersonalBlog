import Footer from "@/components/Footer";

const allProjects = [
  { id: "01", year: "2025", category: "AI/EdTech", title: "BodhAI", desc: "AI-powered learning practice platform with smart MCQs and coding quizzes", tags: ["React", "Firebase", "Tailwind"], url: "#" },
  { id: "02", year: "2024", category: "Healthcare", title: "AI Chatbot", desc: "Healthcare chatbot website for user-friendly medical assistance", tags: ["React", "JavaScript", "AI"], url: "#" },
  { id: "03", year: "2024", category: "Personal", title: "Forge", desc: "Digital forge platform", tags: ["Next.js", "Three.js"], url: "https://forge-pink-seven.vercel.app/" },
  { id: "04", year: "2024", category: "Personal", title: "LawLab", desc: "Legal management lab", tags: ["React", "Tailwind"], url: "https://lawlab-self.vercel.app/" },
  { id: "05", year: "2025", category: "GenAI", title: "ResumeIQ", desc: "AI-powered resume builder", tags: ["OpenAI", "Next.js"], url: "https://resumeiq-harsh.vercel.app/" },
  { id: "06", year: "2025", category: "Design", title: "Notch", desc: "Notch design system", tags: ["Figma", "Design"], url: "https://notch-zeta.vercel.app/" }
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
            <div className="col-span-4">Project</div>
            <div className="col-span-3">Built with</div>
            <div className="col-span-3">Category</div>
            <div className="col-span-1 text-right">Link</div>
          </div>
          
          <div className="flex flex-col">
            {allProjects.map((p) => (
              <div key={p.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-foreground/10 hover:bg-[#1A1A1A]/30 transition-colors group px-4 -mx-4 rounded-lg">
                <div className="col-span-1 font-mono text-xs text-foreground/50 flex items-center">{p.year}</div>
                <div className="col-span-4 flex flex-col justify-center">
                  <span className="font-display text-xl text-foreground group-hover:text-primary transition-colors">{p.title}</span>
                  <span className="text-sm text-foreground/50 mt-1 md:hidden">{p.desc}</span>
                </div>
                <div className="col-span-3 font-mono text-xs text-foreground/60 flex items-center flex-wrap gap-2">
                  {p.tags.join(" · ")}
                </div>
                <div className="col-span-3 font-mono text-xs text-foreground/60 flex items-center hidden md:flex">
                  {p.category}
                </div>
                <div className="col-span-1 flex items-center md:justify-end mt-4 md:mt-0">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary font-mono text-xs hover:underline">
                    Visit ↗
                  </a>
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
