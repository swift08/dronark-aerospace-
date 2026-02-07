import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Lightbulb, Factory, Rocket, Shield } from "lucide-react";

const strengths = [
  {
    label: "Engineering-first approach",
    icon: Wrench,
  },
  {
    label: "Industry-focused innovation",
    icon: Lightbulb,
  },
  {
    label: "Scalable manufacturing capability",
    icon: Factory,
  },
  {
    label: "Real-world deployment readiness",
    icon: Rocket,
  },
  {
    label: "Quality-driven processes",
    icon: Shield,
  },
];

export default function WhyDronarkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-dronark" className="relative py-12 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,600px)] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 section-glass rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-black text-foreground tracking-tight leading-none">
              ENGINEERED
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 mt-2 mb-2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
            />
            <h2 className="font-display text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="gradient-text">NOT ASSEMBLED</span>
            </h2>
          </div>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            What differentiates Dronark Aerospace is a commitment to building systems that
            prioritize reliability, adaptability, and long-term performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10"
        >
          {strengths.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm p-5 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.12)] transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs tracking-wider uppercase text-foreground/90 font-medium leading-snug">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative"
        >
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <p className="relative text-center font-display text-lg md:text-xl text-primary font-medium py-6 px-4 bg-background/80">
            We don&apos;t just build drones — we build aerial intelligence platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
