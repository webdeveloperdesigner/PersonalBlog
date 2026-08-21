'use client';

import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Home, User, Folder, PenTool, Image as ImageIcon, 
  Clock, Archive, Mail, Wrench, FileText, ArrowRight 
} from "lucide-react";

export default function Sitemap() {
  const sitemapData = [
    {
      category: "Core Navigation",
      description: "Primary routes and modules",
      links: [
        { name: "Home Portfolio", path: "/", icon: <Home className="w-4 h-4" /> },
        { name: "Interactive Presentation", path: "/me", icon: <User className="w-4 h-4" /> },
        { name: "Case Studies", path: "/case-studies", icon: <Folder className="w-4 h-4" /> },
        { name: "Writings & Articles", path: "/writings", icon: <PenTool className="w-4 h-4" /> },
        { name: "Photography Gallery", path: "/gallery", icon: <ImageIcon className="w-4 h-4" /> },
      ]
    },
    {
      category: "Archives & History",
      description: "Chronological data and legacy views",
      links: [
        { name: "Event Timeline", path: "/timeline", icon: <Clock className="w-4 h-4" /> },
        { name: "Works & Writings (Legacy)", path: "/Works-Writings-Timeline", icon: <Archive className="w-4 h-4" /> },
      ]
    },
    {
      category: "System & Legal",
      description: "Administrative and compliance pages",
      links: [
        { name: "Start a Project", path: "/contact", icon: <Mail className="w-4 h-4" /> },
        { name: "System Status", path: "/maintenance", icon: <Wrench className="w-4 h-4" /> },
        { name: "Privacy Policy", path: "/privacy", icon: <FileText className="w-4 h-4" /> },
        { name: "Terms & Conditions", path: "/terms", icon: <FileText className="w-4 h-4" /> },
        { name: "Imprint", path: "/imprint", icon: <FileText className="w-4 h-4" /> },
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background pt-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 py-12 flex-1 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="px-4 py-1.5 rounded-full border border-foreground/10 bg-[#1A1A1A]/50 font-mono text-xs text-foreground/70 uppercase tracking-widest mb-6">
            Directory Index
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight">
            Sitemap
          </h1>
          <p className="font-sans text-foreground/60 max-w-xl text-lg">
            A complete architectural overview of the Sovereign Noir platform
          </p>
        </div>
        
        {/* Architecture Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {sitemapData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1A1A1A]/30 backdrop-blur-xl border border-foreground/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="mb-8 relative">
                <h2 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {section.category}
                </h2>
                <p className="font-sans text-sm text-foreground/40 leading-relaxed">
                  {section.description}
                </p>
                <div className="absolute -left-8 top-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />
              </div>

              {/* Links List */}
              <ul className="flex flex-col gap-3 mt-auto">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} className="flex items-center justify-between p-3 rounded-xl hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition-all group/link">
                      <div className="flex items-center gap-3">
                        <span className="text-foreground/40 group-hover/link:text-primary transition-colors">
                          {link.icon}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-foreground/70 group-hover/link:text-foreground transition-colors">
                          {link.name}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-foreground/20 group-hover/link:text-primary group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}
