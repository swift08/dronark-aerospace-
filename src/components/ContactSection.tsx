import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-16 md:py-20" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-3xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            Connect
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong className="text-foreground/90">Corporate Office:</strong> Dhule, Maharashtra, India
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Partner with us to explore next-generation aerial solutions.{" "}
            <a
              href="mailto:dronarkaerospace@gmail.com"
              className="text-primary hover:underline"
            >
              dronarkaerospace@gmail.com
            </a>
          </p>
          <p className="mt-4 text-xs tracking-wider uppercase text-muted-foreground">
            <a href="#contact-form" className="text-primary hover:underline">
              Contact Us
            </a>
            {" · "}
            <a href="#contact-form" className="text-primary hover:underline">
              Request a Consultation
            </a>
          </p>
        </motion.div>

        <motion.form
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-5"
        >
          {submitted ? (
            <div className="text-center py-16 glass rounded-xl hover-container border border-border/50">
              <div className="font-display text-xl text-primary text-glow mb-2">Message Received</div>
              <p className="text-muted-foreground text-sm">We'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(199_89%_48%/0.15)] transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(199_89%_48%/0.15)] transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Organization"
                className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(199_89%_48%/0.15)] transition-all duration-300"
              />
              <textarea
                placeholder="Tell us about your requirements"
                rows={4}
                required
                className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(199_89%_48%/0.15)] transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                className="btn-glass-primary w-full group relative font-display text-sm tracking-widest uppercase text-primary-foreground rounded-lg py-3.5 overflow-hidden hover-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-accent/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
