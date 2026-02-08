import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import droneImage from "@/assets/drone-agriculture.jpg";

const hotspots = [
  { x: "25%", y: "35%", label: "Precision Spraying", detail: "Variable-rate nozzle system with 98.5% accuracy" },
  { x: "70%", y: "30%", label: "Smart Flight Control", detail: "AI-powered autopilot with real-time path optimization" },
  { x: "50%", y: "65%", label: "High Payload", detail: "Up to 16L tank capacity for extended operations" },
  { x: "80%", y: "60%", label: "Terrain Adaptability", detail: "3D terrain mapping for altitude-adjusted operations" },
];

export default function FlagshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
            Flagship Platform
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Agridrone <span className="gradient-text">Series</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm">
            Built for the Future of Smart Farming. The Agridrone series represents a new generation
            of agricultural UAVs engineered to meet the evolving demands of modern farming.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-6"
        >
          <div className="overflow-hidden w-full">
            <div className="flex w-max animate-ticker gap-3 text-xs tracking-wider uppercase text-muted-foreground py-1">
              {[
                "High payload capacity",
                "Precision spraying",
                "Automated flight paths",
                "Intelligent navigation",
                "Wide-area coverage",
                "Diverse terrain",
              ]
                .flatMap((label) => [label, label])
                .map((label, i) => (
                  <span
                    key={`${label}-${i}`}
                    className="shrink-0 px-3 py-1.5 rounded-full border border-border/50 whitespace-nowrap transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_0_12px_hsl(199_89%_48%/0.15)]"
                  >
                    {label}
                  </span>
                ))}
            </div>
          </div>
          <p className="text-center mt-4 text-primary font-display text-sm font-medium">
            Higher efficiency. Lower waste. Better yields.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden box-glow hover-container">
            <img
              src={droneImage}
              alt="Agridrone series - agricultural UAV"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {hotspots.map((spot, i) => (
              <button
                key={i}
                className="absolute group z-10 rounded-full btn-glass border border-primary/30 p-1 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_16px_hsl(199_89%_48%/0.2)]"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveHotspot(i)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary border-2 border-primary-foreground" />
                </span>

                {activeHotspot === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 glass-strong rounded-lg p-4 text-left"
                  >
                    <h4 className="font-display text-xs font-semibold text-primary mb-1 tracking-wider">
                      {spot.label}
                    </h4>
                    <p className="text-xs text-muted-foreground">{spot.detail}</p>
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
