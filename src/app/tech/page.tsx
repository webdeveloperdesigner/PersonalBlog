'use client';

import React from 'react';
import NoticePopup from '@/components/NoticePopup';
import Footer from '@/components/Footer';
import { GitHubHeatmapCard } from '@/components/ui/GitHubHeatmapCard';

export default function TechPage() {
  return (
    <>
      <NoticePopup 
        storageKey="tech_page"
        title="Technical Portfolio & Activity"
        message="Live telemetry and GitHub contribution metrics computed dynamically."
        tag="LIVE METRICS"
      />

      <main className="relative min-h-screen bg-background text-foreground dark:bg-[#050507] dark:text-white pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden transition-colors duration-300">
        
        {/* Background Ambient Radial Glows */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none z-0 dark:opacity-100 opacity-60" />
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none z-0 dark:opacity-100 opacity-60" />

        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10 dark:opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <GitHubHeatmapCard username="webdeveloperdesigner" />
        </div>
      </main>
      <Footer />
    </>
  );
}
