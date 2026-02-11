import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Building2, Droplets, Shield, Zap } from "lucide-react";

import industrialCleaningJpeg from "@/assets/industrial cleaning.jpeg";
import industrialCleaningPng from "@/assets/industrial cleaning 2.png";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function IndustrialCleaningPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center"
          >
            <span className="inline-block text-xs tracking-[0.35em] uppercase text-primary font-medium mb-4">
              Product
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              DRONARK <span className="gradient-text">INDUSTRIAL CLEANING DRONE</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary font-display font-semibold">
              Redefining Cleaning at Altitude
            </p>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Where Aerospace Meets Infrastructure Maintenance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 mt-10"
          >
            <div className="rounded-2xl overflow-hidden section-glass border border-primary/20 shadow-[0_0_60px_hsl(199_89%_48%/0.15)] [transform-style:preserve-3d] [perspective:1000px]">
              <img
                src={industrialCleaningPng}
                alt="Dronark Industrial Cleaning Drone"
                className="w-full aspect-video object-cover object-center"
              />
            </div>
          </motion.div>
        </section>

        {/* Intro */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="section-glass section-glass-hover rounded-2xl p-8 md:p-12"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Dronark Industrial Cleaning Drone is engineered to eliminate the risk, cost, and
                inefficiency associated with traditional high-rise cleaning methods.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Built with precision flight control and high-pressure spray technology, our system allows
                organizations to maintain large structures faster, safer, and more intelligently — without
                putting human lives at risk.
              </p>
              <p className="mt-6 font-display text-xl gradient-text font-semibold">
                Because the future of infrastructure maintenance belongs in the air.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose - with image */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 [transform-style:preserve-3d] hover:shadow-[0_0_40px_hsl(199_89%_48%/0.12)] transition-all duration-500 order-2 md:order-1">
                <img src={industrialCleaningJpeg} alt="Industrial Cleaning Drone" className="w-full h-auto object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Dronark Cleaning Drone?
                </h2>
                <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                  {[
                    "Zero Human Risk — No ropes, no suspended platforms, no exposure to hazardous environments.",
                    "Clean Faster Than Ever — Days of work completed in hours with autonomous aerial cleaning.",
                    "Precision Water Control — Directional high-pressure spraying reduces waste.",
                    "Lower Operational Costs — Cut scaffolding, equipment, labor, and safety compliance expenses.",
                    "Access the Impossible — Curved facades, solar rooftops, tight structural gaps effortlessly.",
                  ].map((text, i) => (
                    <motion.li key={i} variants={item} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Engineering + Measurable + Ideal For */}
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4"
            >
              Aerospace-Grade Engineering
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Mission-ready. Industry-proven. Future-built.
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
            >
              {[
                "High-thrust stabilization for controlled hover",
                "Advanced pressure-spray mechanism",
                "Intelligent altitude lock",
                "Wind-resistance flight tuning",
                "Carbon-reinforced structural frame",
                "Long-flight endurance",
                "Rapid deployment capability",
              ].map((label, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="section-glass hover-container rounded-xl p-4 border border-border/50"
                >
                  <span className="text-sm text-foreground font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-xl font-bold text-foreground mb-6 text-center"
            >
              Measurable Advantages
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
            >
              {[
                { icon: Zap, label: "Up to 70% faster", sub: "than manual cleaning" },
                { icon: Shield, label: "Eliminates", sub: "high-altitude labor risk" },
                { icon: Droplets, label: "Optimized", sub: "water consumption" },
                { icon: ArrowRight, label: "Minimal", sub: "operational downtime" },
                { icon: Building2, label: "Major reduction", sub: "in maintenance costs" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <motion.div key={i} variants={item} className="section-glass rounded-xl p-6 text-center hover-container">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-display font-semibold text-foreground text-sm">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{sub}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-xl font-bold text-foreground mb-4 text-center"
            >
              Ideal Applications
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 text-muted-foreground text-sm"
            >
              {["High-Rise Glass Buildings", "Corporate Towers", "Solar Farms", "Industrial Warehouses", "Airports & Mega Structures"].map((app, i) => (
                <li key={i} className="px-4 py-2 rounded-full border border-border/50 hover:border-primary/40 transition-colors">
                  {app}
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto px-6 md:px-10 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Elevate Your Maintenance Strategy
            </h2>
            <p className="text-muted-foreground mb-2">Safer operations. Faster results. Lower costs.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/#contact-form"
                className="btn-glass-primary px-8 py-3.5 font-display text-sm tracking-widest uppercase rounded-lg hover-glow transition-all"
              >
                Schedule a Live Demo
              </Link>
              <Link
                to="/#contact-form"
                className="btn-glass px-8 py-3.5 font-display text-sm tracking-widest uppercase rounded-lg border border-primary/30 text-primary hover:border-primary/50 transition-all"
              >
                Consult Our Experts
              </Link>
              <Link
                to="/#contact-form"
                className="btn-glass-ghost px-8 py-3.5 font-display text-sm tracking-widest uppercase rounded-lg transition-all"
              >
                Partner With Dronark Aerospace
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
