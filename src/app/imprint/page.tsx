import Footer from "@/components/Footer";

export default function Imprint() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1">
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-12 tracking-tight text-center">Imprint</h1>
        
        <div className="max-w-4xl mx-auto bg-[#1A1A1A]/30 backdrop-blur-md border border-foreground/10 rounded-3xl p-8 md:p-12">
          <div className="prose prose-invert max-w-none font-sans text-foreground/70 leading-loose">
            
            <h2 className="font-mono text-xl text-primary mt-0 mb-6 tracking-tight">01. Site Ownership & Operator</h2>
            <div className="bg-background/50 p-6 rounded-xl border border-foreground/5 mb-8 font-mono text-sm">
              <p className="m-0">
                <strong className="text-foreground font-normal">VK</strong><br />
                Varanasi, Uttar Pradesh<br />
                India
              </p>
            </div>
            
            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">02. Contact</h2>
            <div className="bg-background/50 p-6 rounded-xl border border-foreground/5 mb-8 font-mono text-sm">
              <p className="m-0">
                <span className="text-foreground/40 w-16 inline-block">Email:</span> <a href="mailto:vivekxdev01@gmail.com" className="text-primary hover:text-foreground transition-colors underline underline-offset-4">vivekxdev01@gmail.com</a><br />
                <span className="text-foreground/40 w-16 inline-block">Phone:</span> <span className="text-foreground">+91 8765728985</span>
              </p>
            </div>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">03. Legal Disclaimer</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg text-foreground mb-2 font-display">Liability for Content</h3>
                <p className="m-0">
                  As the operator of this website, we are responsible for our own content according to the Information Technology Act, 2000 and applicable laws of India. However, we are not obligated to actively monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-2 font-display">Liability for Links</h3>
                <p className="m-0">
                  Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-2 font-display">Copyright (Intellectual Property)</h3>
                <p className="m-0">
                  The content, design, and works created by the site operator on these pages are subject to the Copyright Act, 1957 of India. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of copyright law requires the prior written consent of the creator.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
