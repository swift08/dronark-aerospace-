import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wheat, Building2, Globe2, Truck, TreePine, ClipboardCheck } from "lucide-react";

const industries = [
  {
    icon: Wheat,
    label: "Agriculture",
    description: "Driving the transition toward data-powered, precision farming.",
  },
  {
    icon: Building2,
    label: "Infrastructure",
    description: "Enhancing inspection speed while improving operational safety.",
  },
  {
    icon: Globe2,
    label: "Smart Cities",
    description: "Supporting next-generation urban planning and monitoring.",
  },
  {
    icon: Truck,
    label: "Logistics & Operations",
    description: "Unlocking faster aerial movement and surveillance capabilities.",
  },
  {
    icon: TreePine,
    label: "Environmental Monitoring",
    description: "Helping organizations track ecological changes with accuracy.",
  },
  {
    icon: ClipboardCheck,
    label: "Industrial Inspection",
    description: "Reducing risk while increasing inspection efficiency.",
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="relative py-12" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 section-glass rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            Sectors
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group glass rounded-xl p-6 hover-glow cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors shrink-0">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-1">
                    {ind.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
