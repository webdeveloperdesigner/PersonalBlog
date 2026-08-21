import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

const services = [
  {
    id: "01",
    title: "Front-end Development",
    description: "Building responsive, high-performance web applications using modern Javascript frameworks.",
    pills: ["React.js", "JavaScript", "Tailwind CSS", "HTML/CSS"]
  },
  {
    id: "02",
    title: "AI Integration",
    description: "Integrating artificial intelligence to build smarter applications like learning platforms and healthcare chatbots.",
    pills: ["Python", "AI Chatbots", "Personalized Insights"]
  },
  {
    id: "03",
    title: "Backend & Databases",
    description: "Setting up secure, scalable backends, authentication, and admin panels.",
    pills: ["Firebase", "MongoDB", "User Analytics"]
  },
  {
    id: "04",
    title: "UI/UX & Responsive Design",
    description: "Ensuring seamless interaction across devices with clean, intuitive interfaces.",
    pills: ["Figma", "Canva", "Responsive Web Design"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-16 bg-background relative border-t border-foreground/10">
      <div className="container mx-auto">
        <div className="mb-20 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-primary text-sm">02</span>
            <div className="w-12 h-[1px] bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">Disciplines</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">
            What I <span className="italic font-light text-primary">Do</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <TiltCard key={s.id} className="min-h-[320px]">
              <div className="font-mono text-primary mb-6">{s.id}.</div>
              <h3 className="font-display text-2xl text-foreground mb-4">{s.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-auto pb-8">
                {s.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2">
                {s.pills.map((pill, i) => (
                  <span key={i} className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 text-foreground/80 bg-black/5 dark:bg-white/10">
                    {pill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}

          {/* 6th CTA Card */}
          <TiltCard className="min-h-[320px] flex flex-col justify-center items-center text-center bg-white dark:bg-[#121212] border-primary/30">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">Have something else in mind?</h3>
            <p className="text-foreground/70 text-sm font-medium mb-8">
              Let's discuss how we can build it together.
            </p>
            <MagneticButton className="bg-[#FF7029] hover:bg-[#E65F1E] text-white font-black text-xs px-8 py-3.5 rounded-full uppercase tracking-wider transition-all duration-300 w-full shadow-md hover:shadow-lg hover:shadow-[#FF7029]/30">
              <span className="text-white font-bold">Get in touch</span>
            </MagneticButton>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
