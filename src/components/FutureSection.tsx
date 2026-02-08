import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import fleetImage from "@/assets/drone-fleet.jpg";

export default function FutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={fleetImage} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-6 block">
            Vision
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Powering the Next Era of <span className="gradient-text">Autonomous Aviation</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            The future of aviation is autonomous, data-driven, and deeply integrated into everyday
            operations. Dronark Aerospace is investing in technologies that will define this
            transformation — enabling industries to leverage aerial intelligence for faster
            insights, improved safety, and greater efficiency.
          </p>
          <p className="font-display text-primary font-medium">
            Build smarter skies for a smarter world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
