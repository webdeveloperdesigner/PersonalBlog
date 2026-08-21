import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      <div className="container mx-auto px-6 md:px-16 py-24 flex-1">
        <h1 className="font-display text-5xl md:text-7xl text-foreground mb-12 tracking-tight text-center">Privacy Policy</h1>
        
        <div className="max-w-4xl mx-auto bg-[#1A1A1A]/30 backdrop-blur-md border border-foreground/10 rounded-3xl p-8 md:p-12">
          <div className="prose prose-invert max-w-none font-sans text-foreground/70 leading-loose">
            <p className="text-sm font-mono text-foreground/40 mb-8 uppercase tracking-widest border-b border-foreground/10 pb-6">
              Last updated: {new Date().getFullYear()}
            </p>
            
            <p className="text-lg text-foreground">
              This Privacy Policy describes how your personal information is collected, used, and protected when you visit this website, in compliance with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 of India.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">01. Personal Information We Collect</h2>
            <p>
              When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p>
              If you contact me via the contact form, I collect the information you provide (Name, Email, Company, Message) strictly for the purpose of responding to your inquiry.
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">02. How We Use Your Information</h2>
            <p>
              We use the order information that we collect generally to fulfill any requests placed through the site (such as responding to a contact form submission).
            </p>

            <h2 className="font-mono text-xl text-primary mt-12 mb-6 tracking-tight">03. Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:vivekxdev01@gmail.com" className="text-primary hover:text-foreground transition-colors underline underline-offset-4">vivekxdev01@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
