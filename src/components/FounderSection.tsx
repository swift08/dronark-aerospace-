import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImage from "@/assets/founder.jpg";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="founder" className="relative py-12 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-3 block font-medium">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Meet The <span className="gradient-text">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid lg:grid-cols-[minmax(0,440px)_1fr] gap-10 lg:gap-14 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] hover-container rounded-2xl border border-border/50 overflow-hidden">
              <img
                  src={founderImage}
                  alt="N. M. Prathap - Founder, Dronark Aerospace"
                  className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/10 object-cover object-top"
                  fetchPriority="high"
                />
            </div>
          </motion.div>

          <div className="space-y-6 order-1 lg:order-2">
            <blockquote className="border-l-4 border-primary pl-5 py-0.5">
              <p className="font-display text-lg md:text-xl text-foreground font-medium leading-snug tracking-tight">
                “Innovation takes flight when vision meets engineering.”
              </p>
            </blockquote>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                N. M. Prathap
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-primary mt-1 font-medium">
                Founder, Dronark Aerospace
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground text-[15px] leading-[1.8]">
              <p>
                N. M. Prathap is a drone technologist and entrepreneur driven by a mission to make
                advanced aerial systems accessible and impactful. As the founder of Dronark
                Aerospace, he leads the company with a focus on engineering-driven innovation and
                practical implementation.
              </p>
              <p>
                With a deep passion for flight technology and autonomous systems, he established
                Dronark Aerospace to transform drones from emerging tools into essential
                infrastructure for modern industries.
              </p>
              <p>
                Under his leadership, the company is committed to building reliable, scalable UAV
                solutions aligned with the future of intelligent aviation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
