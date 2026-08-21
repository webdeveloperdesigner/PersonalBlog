import Footer from "@/components/Footer";

export default function TimelinePage() {
  const events = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Stealth Startup",
      description: "Building scalable Web3 architectures and AI-driven products from the ground up.",
    },
    {
      year: "2023",
      title: "The Tour of IITM",
      company: "IIT Madras",
      description: "Explored the campus, engaged with the developer community, and participated in deep technical workshops.",
    },
    {
      year: "2022",
      title: "Computer Science Undergraduate",
      company: "GLA University",
      description: "Started my formal journey in Computer Science, focusing on algorithms, data structures, and software engineering principles.",
    },
    {
      year: "2021",
      title: "First Lines of Code",
      company: "Self Taught",
      description: "Wrote my first lines of HTML, CSS, and Python. The beginning of a lifelong passion for building digital experiences.",
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1">
        
        {/* Page Title */}
        <div className="text-center mb-24">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight text-center">Timeline</h1>
          <p className="text-foreground/60 font-sans max-w-2xl mx-auto text-center">
            My journey, milestones, and the experiences that shaped my engineering career.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />
          
          <div className="flex flex-col gap-16">
            {events.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node */}
                <div className="absolute left-[11px] md:left-1/2 w-[9px] h-[9px] rounded-full bg-background border border-primary md:-translate-x-1/2 shadow-[0_0_10px_rgba(243,117,18,0.8)] z-10 top-2 md:top-auto" />
                
                {/* Content Box */}
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="font-mono text-xl text-primary mb-2">{event.year}</div>
                  <h3 className="font-display text-2xl text-foreground mb-1">{event.title}</h3>
                  <div className="font-mono text-xs text-foreground/50 uppercase tracking-widest mb-4">{event.company}</div>
                  <p className="font-sans text-foreground/70 leading-relaxed text-sm md:text-base">
                    {event.description}
                  </p>
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
