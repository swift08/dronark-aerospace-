import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt } from "lucide-react";
import tShirtsImg from "@/assets/t shirts.png";
import hoodiesImg from "@/assets/hoodies.png";

export default function MerchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="merchandise" className="relative py-12 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 section-glass glass-premium section-glass-hover rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-3 block font-medium">
            Official merchandise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Dronark <span className="gradient-text">Merchandise</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            We are offering official Dronark Aerospace logo merchandise: black and white
            T-shirts and hoodies. Wear the brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-8 md:gap-10 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-2xl overflow-hidden glass-card-premium hover-card cursor-default transition-all duration-300"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={tShirtsImg}
                alt="Dronark Aerospace logo T-shirts in black and white"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 pointer-events-none" />
            </div>
            <div className="p-5 text-center border-t border-border/40 bg-background/5">
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                <Shirt className="w-5 h-5 text-primary" />
                Logo T-Shirts
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Black & white • Official logo</p>
              <p className="mt-3 text-xl font-bold text-primary">₹499</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group rounded-2xl overflow-hidden glass-card-premium hover-card cursor-default transition-all duration-300"
          >
            <div className="aspect-square relative overflow-hidden">
              <img
                src={hoodiesImg}
                alt="Dronark Aerospace logo hoodies"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 pointer-events-none" />
            </div>
            <div className="p-5 text-center border-t border-border/40 bg-background/5">
              <h3 className="font-display text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                <Shirt className="w-5 h-5 text-primary" />
                Logo Hoodies
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Black & white • Official logo</p>
              <p className="mt-3 text-xl font-bold text-primary">₹999</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Interested? Reach out at{" "}
          <a href="mailto:dronarkaerospace@gmail.com" className="text-primary hover:underline">
            dronarkaerospace@gmail.com
          </a>{" "}
          or via the{" "}
          <a href="#contact" className="text-primary hover:underline">
            contact form
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
