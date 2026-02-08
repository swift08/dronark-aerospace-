import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-16 md:py-20 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-3 block font-medium">
            About the Company
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Who We <span className="gradient-text">Are</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-muted-foreground text-[15px] leading-[1.8] mb-10"
        >
          <p>
            Dronark Aerospace Private Limited is a forward-looking aerospace manufacturing company
            dedicated to designing and developing advanced unmanned aerial vehicles (UAVs) for
            real-world applications.
          </p>
          <p>
            Founded with a vision to accelerate the adoption of drone technology across India, the
            company focuses on engineering high-performance aerial systems that enhance efficiency,
            improve safety, and enable smarter decision-making.
          </p>
          <p>
            By combining innovation with practical deployment strategies, Dronark Aerospace is
            contributing to the evolution of modern aviation technology — empowering industries to
            operate faster, safer, and more intelligently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="glass rounded-xl p-8 border border-border/50 hover-container cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">Mission</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To engineer intelligent unmanned aerial systems that deliver precision, reliability,
              and measurable impact across critical industries.
            </p>
          </div>
          <div className="glass rounded-xl p-8 border border-border/50 hover-container cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">Vision</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To become a globally trusted aerospace technology company shaping the future of
              autonomous flight through innovation and engineering excellence.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary">
            <Lightbulb className="w-4 h-4" />
            <span className="font-display text-sm font-medium tracking-wide">
              Innovation must solve real problems.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
