import { motion } from "framer-motion";
import heroImage from "@/assets/hero-drone.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Futuristic drone in flight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      <div className="absolute inset-0 scan-line pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.4em] uppercase text-primary border border-primary/30 rounded-full">
            Precision. Intelligence. Reliability.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-display text-display-xl font-bold mb-6"
        >
          <span className="text-foreground">Engineering the Future of</span>
          <br />
          <span className="gradient-text">Autonomous Flight</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Dronark Aerospace Private Limited is an Indian drone manufacturing company building
          intelligent unmanned aerial systems designed to transform agriculture, infrastructure,
          surveillance, and industrial operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact-form"
            className="btn-glass-primary group relative px-8 py-3.5 font-display text-sm tracking-widest uppercase text-primary-foreground rounded-lg overflow-hidden hover-glow transition-all duration-300"
          >
            <span className="relative z-10">Request a Demo</span>
            <div className="absolute inset-0 bg-accent/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a
            href="#technology"
            className="btn-glass px-8 py-3.5 font-display text-sm tracking-widest uppercase border border-primary/30 text-primary hover:border-primary/50 rounded-lg hover-glow transition-all duration-300"
          >
            Explore Technology
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
}
