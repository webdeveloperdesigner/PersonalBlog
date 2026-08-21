'use client';

import Footer from "@/components/Footer";
import LiveClock from "@/components/LiveClock";
import CopyRow from "@/components/CopyRow";
import { Mail, Phone, Calendar, Terminal, Briefcase, Code, Trophy, Camera } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1 flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 tracking-tight">Contact</h1>
        
        <p className="text-foreground/60 italic font-sans text-center max-w-lg mb-4 text-sm md:text-base">
          "Here to make a dent in the universe. If you're building something cool, weird or fun, always down to talk."
        </p>
        
        <div className="mb-16">
          <LiveClock />
        </div>

        <div className="w-full max-w-3xl flex flex-col">
          <CopyRow icon={Mail} text="vivekxdev01@gmail.com" copyValue="vivekxdev01@gmail.com" />
          <CopyRow icon={Mail} text="vivek.glacs22@gla.ac.in" copyValue="vivek.glacs22@gla.ac.in" />
          <CopyRow icon={Phone} text="+91-8765728985" copyValue="+918765728985" />
          <CopyRow icon={Calendar} text="cal.com/devxvivek/meeting" copyValue="https://cal.com/devxvivek/meeting" />
          <CopyRow icon={Terminal} text="github.com/webdeveloperdesigner" copyValue="https://github.com/webdeveloperdesigner" />
          <CopyRow icon={Briefcase} text="linkedin.com/in/vivek-vns" copyValue="https://linkedin.com/in/vivek-vns" />
          <CopyRow icon={Code} text="leetcode.com/u/Vivek_cs" copyValue="https://leetcode.com/u/Vivek_cs" />
          <CopyRow icon={Trophy} text="codeforces.com/profile/Vivek_csed" copyValue="https://codeforces.com/profile/Vivek_csed" />
          <CopyRow icon={Camera} text="instagram.com/_.heyiamvivek._" copyValue="https://instagram.com/_.heyiamvivek._" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
