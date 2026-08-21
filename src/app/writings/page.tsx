import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { writingsData } from "@/data/writings";

export default function WritingsPage() {
  const writings = Object.entries(writingsData).map(([id, data]) => ({
    id,
    ...data,
    excerpt: data.lead.substring(0, 150) + "..."
  }));


  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1 flex flex-col items-center">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight text-center">Writings</h1>
          <p className="text-foreground/60 font-sans max-w-2xl mx-auto text-center">
            Thoughts, technical deep dives, and reflections on engineering, design, and life.
          </p>
        </div>

        {/* Writings List */}
        <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
          {writings.map((post) => (
            <Link key={post.id} href={`/writing/${post.id}`} className="group block">
              <div className="bg-[#1A1A1A]/30 border border-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-[#1A1A1A]/60 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-10" />
                
                {/* Image Thumbnail */}
                <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-xl overflow-hidden shrink-0 border border-foreground/10">
                  <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 font-mono text-xs text-foreground/50 tracking-widest uppercase">
                      <span className="text-primary">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                    </div>
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="font-sans text-foreground/60 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 font-mono text-xs text-foreground uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}
