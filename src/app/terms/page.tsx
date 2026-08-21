import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1">
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-12 tracking-tight text-center">Terms & Conditions</h1>
        
        <div className="max-w-4xl mx-auto bg-[#1A1A1A]/30 backdrop-blur-md border border-foreground/10 rounded-3xl p-8 md:p-12">
          <div className="prose prose-invert max-w-none font-sans text-foreground/70 leading-loose">
            <p className="text-sm font-mono text-foreground/40 mb-8 uppercase tracking-widest border-b border-foreground/10 pb-6">
              Last updated: {new Date().getFullYear()}
            </p>
            
            <p className="text-lg text-foreground">
              Please read these terms and conditions carefully before using this website. By accessing or using this site, you agree to be bound by these terms.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">01. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these terms, we own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">02. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 font-mono text-sm marker:text-primary">
              <li>Publishing any website material in any other media without proper attribution.</li>
              <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
              <li>Using this website in any way that is or may be damaging to this website.</li>
              <li>Using this website contrary to applicable laws and regulations.</li>
            </ul>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">03. No Warranties</h2>
            <p>
              This website is provided "as is," with all faults, and we express no representations or warranties, of any kind related to this website or the materials contained on this website.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">04. Limitation of Liability</h2>
            <p>
              In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">05. Variation of Terms</h2>
            <p>
              We are permitted to revise these terms at any time as we see fit, and by using this website you are expected to review these terms on a regular basis.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">06. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of India. You submit to the exclusive jurisdiction of the courts located in Uttar Pradesh, India for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
