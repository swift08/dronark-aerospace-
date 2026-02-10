import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-12 md:py-16 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Handshake className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Partners & <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dronark Aerospace actively seeks partnerships with technology providers, agricultural
            networks, enterprise organizations, and public-sector initiatives to accelerate drone
            adoption at scale. Through collaboration, we aim to unlock new possibilities in aerial
            innovation and create lasting industry impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
