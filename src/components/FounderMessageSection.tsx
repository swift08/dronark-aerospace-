import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FounderMessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="border-l-4 border-primary pl-6 py-2 text-left md:text-center md:pl-0 md:border-l-0 md:border-t-4 md:border-t-primary md:pt-6"
        >
          <p className="font-display text-xl md:text-2xl text-foreground font-medium leading-snug mb-6">
            &ldquo;The future belongs to technologies that enhance human capability.&rdquo;
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Dronark Aerospace, our mission is to engineer aerial systems that empower industries,
            strengthen infrastructure, and support smarter decision-making. We believe drones will
            soon become foundational tools across multiple sectors, and our commitment is to ensure
            that this transformation is driven by reliability, innovation, and purpose.
          </p>
          <footer className="text-foreground font-display font-semibold">
            — N. M. Prathap
          </footer>
          <p className="text-xs tracking-[0.2em] uppercase text-primary mt-1">
            Founder, Dronark Aerospace
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
