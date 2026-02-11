import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Zap, Shield, Gauge, Leaf } from "lucide-react";

import agriDroneJpeg from "@/assets/agri drone.jpeg";
import agriDronePng from "@/assets/agri drone 2.png";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function AgriDronePage() {
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
              DRONARK <span className="gradient-text">AGRI DRONE</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary font-display font-semibold">
              Precision Farming. Elevated.
            </p>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Built for the Farmers Who Feed the Future.
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
                src={agriDronePng}
                alt="Dronark Agri Drone"
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
                The Dronark Agri Drone is an intelligent aerial spraying system engineered to transform
                traditional farming into a data-driven, highly efficient operation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Designed with aerospace-grade engineering and powered by smart navigation technology, our
                drone enables farmers to cover more land in less time — while reducing chemical waste, labor
                dependency, and operational risk.
              </p>
              <p className="mt-6 font-display text-xl text-foreground font-semibold">
                This is not just automation.
              </p>
              <p className="mt-1 font-display text-xl gradient-text font-semibold">
                This is the future of agriculture taking flight.
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
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 [transform-style:preserve-3d] hover:shadow-[0_0_40px_hsl(199_89%_48%/0.12)] transition-all duration-500">
                <img src={agriDroneJpeg} alt="Agri Drone in action" className="w-full h-auto object-cover" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Choose Dronark Agri Drone?
                </h2>
                <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                  {[
                    "Spray Smarter. Not Harder. — Uniform droplet distribution with precision-controlled nozzles.",
                    "Cover Massive Acreage — Fast. Treat dozens of acres in a single day.",
                    "Reduce Chemical Usage — Intelligent flow-control minimizes waste.",
                    "Protect Your Workforce — Operators control missions safely from a distance.",
                    "Fly with Stability — Advanced stabilization even in moderate wind.",
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

        {/* Engineered for Performance */}
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="relative max-w-6xl mx-auto px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4"
            >
              Engineered for Performance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Every component built for durability, reliability, and real-world farm conditions.
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                "Aerospace-grade lightweight frame",
                "High-thrust motor system for stable lift",
                "Precision multi-nozzle spray mechanism",
                "Intelligent terrain-following capability",
                "Long-endurance battery architecture",
                "Rapid refill tank design",
                "Weather-resistant construction",
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
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center font-display text-lg font-semibold text-primary mt-8"
            >
              Built to perform. Built to last.
            </motion.p>
          </div>
        </section>

        {/* Measurable Impact */}
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
            >
              Measurable Impact
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              {[
                { icon: Zap, label: "Up to 3X faster", sub: "than manual spraying" },
                { icon: Leaf, label: "30–40%", sub: "reduction in chemical wastage" },
                { icon: Shield, label: "Significant", sub: "reduction in labor costs" },
                { icon: Gauge, label: "Improved", sub: "crop consistency" },
                { icon: ArrowRight, label: "Faster response", sub: "to pest outbreaks" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <motion.div key={i} variants={item} className="section-glass rounded-xl p-6 text-center hover-container">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-display font-semibold text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{sub}</div>
                </motion.div>
              ))}
            </motion.div>
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
              Ready to Upgrade Your Farm?
            </h2>
            <p className="text-muted-foreground mb-8">
              Experience the power of precision aerial spraying.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact-form"
                className="btn-glass-primary px-8 py-3.5 font-display text-sm tracking-widest uppercase rounded-lg hover-glow transition-all"
              >
                Request a Demo
              </Link>
              <Link
                to="/#contact-form"
                className="btn-glass px-8 py-3.5 font-display text-sm tracking-widest uppercase rounded-lg border border-primary/30 text-primary hover:border-primary/50 transition-all"
              >
                Speak to Our Experts
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
