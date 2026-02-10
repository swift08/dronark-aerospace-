import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Crosshair, Map, Building2 } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "Advanced UAV Manufacturing",
    description:
      "Dronark Aerospace specializes in the design and manufacturing of customized unmanned aerial vehicles tailored to meet diverse operational requirements. Every system is engineered with precision to ensure durability, efficiency, and high performance in demanding environments.",
  },
  {
    icon: Crosshair,
    title: "Precision Agriculture Systems",
    description:
      "Our agricultural drones help modernize farming practices through intelligent crop spraying, large-area coverage, and optimized resource usage. These systems enable farmers and agribusinesses to increase productivity while reducing manual effort and operational costs.",
  },
  {
    icon: Map,
    title: "Aerial Mapping & Monitoring",
    description:
      "Equipped with advanced imaging capabilities, our drones support land surveys, terrain mapping, infrastructure inspection, and environmental monitoring — delivering accurate data that supports faster and more informed decisions.",
  },
  {
    icon: Building2,
    title: "Enterprise Drone Solutions",
    description:
      "We provide scalable drone deployments for government initiatives, large agricultural programs, industrial operations, and infrastructure projects — designed to integrate seamlessly into existing workflows.",
  },
];

export default function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Innovation with </span>
            <span className="gradient-text">Purpose</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            At Dronark Aerospace, technology is developed with a clear objective: solving operational
            challenges through intelligent design. Our UAV platforms integrate advanced flight
            control systems, efficient propulsion mechanisms, and smart automation to deliver
            consistent results across mission-critical applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass rounded-lg p-8 hover-glow cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-lg bg-primary/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 tracking-wide">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {tech.description}
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
