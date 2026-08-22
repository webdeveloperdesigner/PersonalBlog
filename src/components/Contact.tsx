'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X, Mail, MessageSquare } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setShowToast(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-16 bg-background text-foreground relative border-t border-foreground/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <h2 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-12 leading-[1]">
              Let's build <br/>
              <span className="italic font-light text-primary">something rare.</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    suppressHydrationWarning 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-foreground/20 py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-colors peer" 
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-foreground/50 text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none font-medium">Your Name</label>
                </div>
                <div className="relative group">
                  <input 
                    suppressHydrationWarning 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-foreground/20 py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-colors peer" 
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-foreground/50 text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none font-medium">Your Email</label>
                </div>
              </div>
              
              <div className="relative group">
                <input 
                  suppressHydrationWarning 
                  type="text" 
                  id="company" 
                  placeholder="Company"
                  className="w-full bg-transparent border-b border-foreground/20 py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-primary transition-colors peer" 
                />
                <label htmlFor="company" className="absolute left-0 top-4 text-foreground/50 text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none font-medium">Company / Organization</label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message" 
                  required 
                  rows={4} 
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-foreground/20 py-4 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-primary peer transition-colors resize-none" 
                />
                <label htmlFor="message" className="absolute left-0 top-4 text-foreground/50 text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none font-medium">Message Details</label>
              </div>

              <div className="pt-4">
                <MagneticButton className="w-full md:w-auto bg-[#FF7029] hover:bg-[#E65F1E] text-white font-black text-xs px-8 py-3.5 rounded-full uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#FF7029]/30">
                  <span className="text-white font-bold">{formStatus === 'idle' ? 'Send Message ↗' : formStatus === 'submitting' ? 'Processing...' : 'Form Updating ↗'}</span>
                </MagneticButton>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-12 font-mono text-sm">
            <div>
              <h4 className="text-foreground/50 uppercase tracking-widest text-xs mb-4 font-bold">Direct Contact</h4>
              <a href="mailto:vivekxdev01@gmail.com" className="text-foreground hover:text-primary transition-colors text-lg font-semibold">vivekxdev01@gmail.com</a>
            </div>

            <div>
              <h4 className="text-foreground/50 uppercase tracking-widest text-xs mb-4 font-bold">Social Channels</h4>
              <ul className="space-y-3 text-foreground font-medium">
                <li><a href="https://linkedin.com/in/vivek-vns/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn ↗</a></li>
                <li><a href="https://github.com/webdeveloperdesigner" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub ↗</a></li>
                <li><a href="https://instagram.com/_.heyiamvivek._" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram ↗</a></li>
                <li><a href="https://wa.me/918765728985" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp ↗</a></li>
              </ul>
            </div>

            <div className="p-6 bg-foreground/5 border border-foreground/10 rounded-xl space-y-4">
              <div>
                <span className="text-foreground/50 text-xs block mb-1 font-bold">Currently</span>
                <span className="text-foreground font-semibold">B.Tech Student at GLA University</span>
              </div>
              <div>
                <span className="text-foreground/50 text-xs block mb-1 font-bold">Role</span>
                <span className="text-foreground font-semibold">Software Engineering Enthusiast</span>
              </div>
              <div>
                <span className="text-foreground/50 text-xs block mb-1 font-bold">Status</span>
                <span className="text-primary flex items-center gap-2 font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Open to collab
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:max-w-md z-[999] bg-white dark:bg-[#121212] border border-black/15 dark:border-white/15 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col gap-4 font-mono text-xs"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-[#FF7029] font-bold text-sm">
                <AlertCircle className="w-5 h-5 text-[#FF7029] shrink-0 animate-pulse" />
                <span>Form Service Notice</span>
              </div>
              <button
                suppressHydrationWarning
                onClick={() => setShowToast(false)}
                className="text-foreground/50 hover:text-foreground p-1 transition-colors cursor-pointer rounded-full hover:bg-foreground/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-sans text-xs text-foreground/80 leading-relaxed font-medium">
              The automated contact form is currently undergoing live service updates. Please reach out directly via email or WhatsApp below for an instant response:
            </p>

            <div className="flex flex-col gap-2 pt-2 border-t border-black/10 dark:border-white/10 font-mono text-[11px]">
              <a 
                href="mailto:vivekxdev01@gmail.com" 
                className="flex items-center gap-2 text-[#FF7029] hover:underline font-bold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>vivekxdev01@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/918765728985" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-500 hover:underline font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 8765728985</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
