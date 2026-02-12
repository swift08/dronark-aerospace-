import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Zap, Shield, Gauge, Leaf, Building2, Droplets } from "lucide-react";

import agriDronePng from "@/assets/agri drone.jpeg";
import industrialCleaningPng from "@/assets/industrial cleaning.jpeg";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const item3D = { hidden: { opacity: 0, rotateX: -12, y: 40 }, show: { opacity: 1, rotateX: 0, y: 0 } };

export default function ProductsPage() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const agriSectionRef = useRef<HTMLDivElement>(null);
  const industrialSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: mainRef, offset: ["start start", "end end"] });
  const heroProgress = useScroll({ target: heroRef, offset: ["start start", "end start"] }).scrollYProgress;

  const heroRotateX = useTransform(heroProgress, [0, 0.45], [0, 22]);
  const heroY = useTransform(heroProgress, [0, 0.4], [0, 100]);
  const heroScale = useTransform(heroProgress, [0, 0.35], [1, 0.88]);
  const heroOpacity = useTransform(heroProgress, [0.15, 0.5], [1, 0]);
  const orb1X = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const orb1Y = useTransform(scrollYProgress, [0, 0.15], [0, 80]);
  const orb2X = useTransform(scrollYProgress, [0.12, 0.28], [0, 120]);
  const orb2Y = useTransform(scrollYProgress, [0.12, 0.28], [0, -60]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const agriInView = useInView(agriSectionRef, { amount: 0.15, once: false });
  const industrialInView = useInView(industrialSectionRef, { amount: 0.15, once: false });

  const heroMouseRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const leftPortalRotateY = useTransform(springX, [-1, 0, 1], [14, 0, -14]);
  const rightPortalRotateY = useTransform(springX, [-1, 0, 1], [-14, 0, 14]);
  const portalRotateX = useTransform(springY, [-1, 0, 1], [6, 0, -6]);

  const onHeroMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroMouseRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  }, [mouseX, mouseY]);
  const onHeroMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <motion.div
        style={{ scaleX: progressWidth }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary origin-left z-50 pointer-events-none"
      />
      <main ref={mainRef} className="relative">
        {/* Page heading */}
        <header className="relative z-10 pt-24 md:pt-28 pb-4 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
          >
            Our <span className="gradient-text">Products</span>
          </motion.h1>
        </header>

        {/* Hero: Dual 3D portals — Agri + Industrial in one view */}
        <section
          ref={heroRef}
          className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden perspective-2000 -mt-4"
        >
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <motion.div style={{ x: orb1X, y: orb1Y }} className="absolute top-[15%] left-[10%] w-[380px] h-[380px] rounded-full bg-primary/25 blur-[90px] animate-glow-orb pointer-events-none" />
          <motion.div style={{ x: orb2X, y: orb2Y }} className="absolute bottom-[20%] right-[8%] w-[320px] h-[320px] rounded-full bg-accent/20 blur-[75px] animate-glow-orb pointer-events-none" />

          {/* Motion graphics layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                style={{
                  left: `${8 + (i * 7)}%`,
                  top: `${15 + (i % 5) * 18}%`,
                  animation: `particle-float ${10 + (i % 4) * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`r-${i}`}
                className="absolute w-1 h-1 rounded-full bg-accent/50"
                style={{
                  right: `${10 + (i * 10)}%`,
                  top: `${20 + (i % 4) * 20}%`,
                  animation: `particle-float ${12 + (i % 3) * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
            <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(199 89% 48% / 0)" />
                  <stop offset="50%" stopColor="hsl(199 89% 48% / 0.7)" />
                  <stop offset="100%" stopColor="hsl(185 80% 55% / 0)" />
                </linearGradient>
              </defs>
              <path
                d="M 0 50 Q 100 20 200 50 T 400 50"
                fill="none"
                stroke="url(#heroLineGrad)"
                strokeWidth="0.8"
                strokeDasharray="120 80"
                className="animate-line-flow"
              />
            </svg>
            <div className="absolute left-[18%] top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-data-stream" style={{ animationDuration: "6s" }} />
            <div className="absolute right-[18%] top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-data-stream" style={{ animationDuration: "7s", animationDelay: "1s" }} />
          </div>

          <motion.div
            ref={heroMouseRef}
            onMouseMove={onHeroMouseMove}
            onMouseLeave={onHeroMouseLeave}
            style={{
              rotateX: heroRotateX,
              y: heroY,
              scale: heroScale,
              opacity: heroOpacity,
              transformPerspective: 1400,
            }}
            className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 preserve-3d origin-center"
          >
            {/* Left portal — Agri Drone */}
            <Link to="/products#agri-drone" className="block w-full md:w-[48%] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
              <motion.div
                style={{
                  rotateY: leftPortalRotateY,
                  rotateX: portalRotateX,
                  transformPerspective: 1600,
                }}
                initial={{ opacity: 0, rotateY: -28, x: -80 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-[4/5] max-h-[70vh] rounded-2xl overflow-hidden preserve-3d origin-center [transform-style:preserve-3d] group cursor-pointer"
              >
              <div className="absolute inset-0 rounded-2xl border border-primary/30 animate-portal-edge shadow-[0_0_60px_hsl(199_89%_48%/0.15)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent z-[1]" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-primary/90 font-medium">Precision Farming</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">Agri Drone</h2>
                <p className="text-muted-foreground text-sm mt-0.5">Spray smarter. Cover more. Risk less.</p>
              </div>
              <img src={agriDronePng} alt="Dronark Agri Drone" className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-2xl animate-portal-glow bg-primary/20 pointer-events-none" />
              </motion.div>
            </Link>

            {/* Center headline — visible on desktop between portals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex flex-col items-center text-center"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium mb-2">Our Products</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
                Two <span className="gradient-text">Forces</span>
                <br />
                One Sky.
              </h1>
            </motion.div>

            {/* Right portal — Industrial Cleaning */}
            <Link to="/products#industrial-cleaning" className="block w-full md:w-[48%] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
              <motion.div
                style={{
                  rotateY: rightPortalRotateY,
                  rotateX: portalRotateX,
                  transformPerspective: 1600,
                }}
                initial={{ opacity: 0, rotateY: 28, x: 80 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-[4/5] max-h-[70vh] rounded-2xl overflow-hidden preserve-3d origin-center [transform-style:preserve-3d] group cursor-pointer"
              >
              <div className="absolute inset-0 rounded-2xl border border-accent/30 animate-portal-edge shadow-[0_0_60px_hsl(185_80%_55%/0.12)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-l from-sky-500/10 to-transparent z-[1]" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Infrastructure</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">Industrial Cleaning</h2>
                <p className="text-muted-foreground text-sm mt-0.5">Clean at height. Zero human risk.</p>
              </div>
              <img src={industrialCleaningPng} alt="Dronark Industrial Cleaning Drone" className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-2xl animate-portal-glow bg-accent/15 pointer-events-none" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile headline below portals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="relative z-20 mt-8 px-4 text-center md:hidden"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">Our Products</span>
            <h1 className="font-display text-2xl font-bold text-foreground mt-1">
              Two <span className="gradient-text">Forces</span>. One Sky.
            </h1>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-px h-8 rounded-full bg-primary/60" />
          </motion.div>
        </section>

        {/* ========== AGRI DRONE — 3D card section ========== */}
        <section id="agri-drone" ref={agriSectionRef} className="relative scroll-mt-24 perspective-1000">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                DRONARK <span className="gradient-text">AGRI DRONE</span>
              </h2>
              <p className="mt-3 text-xl text-primary font-display font-semibold">Precision Farming Elevated.</p>
              <p className="mt-1 text-muted-foreground">Built for the Farmers Who Feed the Future.</p>
            </motion.div>

            {/* 3D floating image block */}
            <motion.div
              initial={{ opacity: 0, rotateX: -20, y: 60 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1200 }}
              className="relative preserve-3d origin-center mb-16"
            >
              <motion.div
                animate={agriInView ? { rotateY: 0, rotateX: 0 } : {}}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="rounded-2xl overflow-hidden section-glass border border-primary/20 shadow-[0_0_60px_hsl(199_89%_48%/0.12)] [transform-style:preserve-3d]"
                style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.4), 0 0 60px hsl(199 89% 48% / 0.12)" }}
              >
                <img src={agriDronePng} alt="Dronark Agri Drone" className="w-full aspect-video object-cover object-center" loading="lazy" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="section-glass section-glass-hover rounded-2xl p-8 md:p-12 mb-14 border border-primary/10"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Dronark Agri Drone is an intelligent aerial spraying system engineered to transform
                traditional farming into a data-driven, highly efficient operation. Designed with aerospace-grade
                engineering and powered by smart navigation technology, our drone enables farmers to cover more
                land in less time — while reducing chemical waste, labor dependency, and operational risk.
              </p>
              <p className="mt-4 font-display text-lg gradient-text font-semibold">
                This is the future of agriculture taking flight.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
              className="grid md:grid-cols-2 gap-12 items-center mb-20"
            >
              <motion.div
                variants={item3D}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1000 }}
                className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 hover:shadow-[0_0_50px_hsl(199_89%_48%/0.15)] transition-all duration-500 [transform-style:preserve-3d] relative"
              >
                <div className="absolute inset-0">
                  <img src={agriDronePng} alt="Agri Drone card" className="w-full h-full object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-primary/90 font-medium">Precision Farming</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1">Agri Drone</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">Spray smarter. Cover more. Risk less.</p>
                </div>
              </motion.div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Why Choose Dronark Agri Drone?</h3>
                <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
                  {[
                    "Spray Smarter. Not Harder. — Precision-controlled nozzles for uniform droplet distribution.",
                    "Cover Massive Acreage — Fast. Dozens of acres in a single day.",
                    "Reduce Chemical Usage — Intelligent flow-control minimizes waste.",
                    "Protect Your Workforce — Operators control missions safely from a distance.",
                    "Fly with Stability — Advanced stabilization even in moderate wind.",
                  ].map((text, i) => (
                    <motion.li key={i} variants={item} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={container}
              className="mb-14"
            >
              <h3 className="font-display text-xl font-bold text-center text-foreground mb-6">Engineered for Performance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Aerospace-grade lightweight frame",
                  "High-thrust motor system",
                  "Precision multi-nozzle spray mechanism",
                  "Intelligent terrain-following",
                  "Long-endurance battery architecture",
                  "Weather-resistant construction",
                ].map((label, i) => (
                  <motion.div
                    key={i}
                    variants={item3D}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    style={{ transformPerspective: 800 }}
                    className="section-glass hover-container rounded-xl p-4 border border-border/50 text-sm text-foreground [transform-style:preserve-3d]"
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
            >
              {[
                { icon: Zap, label: "Up to 3X faster", sub: "than manual spraying" },
                { icon: Leaf, label: "30–40%", sub: "less chemical wastage" },
                { icon: Shield, label: "Significant", sub: "reduction in labor costs" },
                { icon: Gauge, label: "Improved", sub: "crop consistency" },
                { icon: ArrowRight, label: "Faster response", sub: "to pest outbreaks" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={i}
                  variants={item3D}
                  transition={{ duration: 0.5 }}
                  style={{ transformPerspective: 900 }}
                  className="section-glass rounded-xl p-5 text-center hover-container [transform-style:preserve-3d]"
                >
                  <Icon className="w-7 h-7 text-primary mx-auto mb-1" />
                  <div className="font-display font-semibold text-foreground text-sm">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/#contact-form" className="btn-glass-primary px-6 py-3 font-display text-sm tracking-widest uppercase rounded-lg hover-glow">
                Request a Demo — Agri Drone
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Divider with 3D line */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-center"
          />
        </div>

        {/* ========== INDUSTRIAL CLEANING — 3D card section ========== */}
        <section id="industrial-cleaning" ref={industrialSectionRef} className="relative scroll-mt-24 perspective-1000">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                DRONARK <span className="gradient-text">INDUSTRIAL CLEANING DRONE</span>
              </h2>
              <p className="mt-3 text-xl text-primary font-display font-semibold">Redefining Cleaning at Altitude</p>
              <p className="mt-1 text-muted-foreground">Where Aerospace Meets Infrastructure Maintenance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateX: -20, y: 60 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1200 }}
              className="relative preserve-3d origin-center mb-16"
            >
              <motion.div
                animate={industrialInView ? { rotateY: 0, rotateX: 0 } : {}}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="rounded-2xl overflow-hidden section-glass border border-primary/20 shadow-[0_0_60px_hsl(199_89%_48%/0.12)] [transform-style:preserve-3d]"
                style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.4), 0 0 60px hsl(199 89% 48% / 0.12)" }}
              >
                <img src={industrialCleaningPng} alt="Dronark Industrial Cleaning Drone" className="w-full aspect-video object-cover object-center" loading="lazy" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="section-glass section-glass-hover rounded-2xl p-8 md:p-12 mb-14 border border-primary/10"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                The Dronark Industrial Cleaning Drone is engineered to eliminate the risk, cost, and inefficiency
                associated with traditional high-rise cleaning methods. Built with precision flight control and
                high-pressure spray technology, our system allows organizations to maintain large structures
                faster, safer, and more intelligently — without putting human lives at risk.
              </p>
              <p className="mt-4 font-display text-lg gradient-text font-semibold">
                Because the future of infrastructure maintenance belongs in the air.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={container}
              className="grid md:grid-cols-2 gap-12 items-center mb-20"
            >
              <div className="order-2 md:order-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Why Dronark Cleaning Drone?</h3>
                <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
                  {[
                    "Zero Human Risk — No ropes, no suspended platforms.",
                    "Clean Faster Than Ever — Days of work in hours.",
                    "Precision Water Control — Directional high-pressure spraying.",
                    "Lower Operational Costs — Cut scaffolding, equipment, labor.",
                    "Access the Impossible — Curved facades, solar rooftops, tight gaps.",
                  ].map((text, i) => (
                    <motion.li key={i} variants={item} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div
                variants={item3D}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1000 }}
                className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 order-1 md:order-2 hover:shadow-[0_0_50px_hsl(199_89%_48%/0.15)] transition-all duration-500 [transform-style:preserve-3d] relative"
              >
                <div className="absolute inset-0">
                  <img src={industrialCleaningPng} alt="Industrial Cleaning card" className="w-full h-full object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Infrastructure</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1">Industrial Cleaning</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">Clean at height. Zero human risk.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={container}
              className="mb-14"
            >
              <h3 className="font-display text-xl font-bold text-center text-foreground mb-6">Aerospace-Grade Engineering</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "High-thrust stabilization for controlled hover",
                  "Advanced pressure-spray mechanism",
                  "Intelligent altitude lock",
                  "Carbon-reinforced structural frame",
                  "Long-flight endurance",
                  "Rapid deployment capability",
                ].map((label, i) => (
                  <motion.div
                    key={i}
                    variants={item3D}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    style={{ transformPerspective: 800 }}
                    className="section-glass hover-container rounded-xl p-4 border border-border/50 text-sm text-foreground [transform-style:preserve-3d]"
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
            >
              {[
                { icon: Zap, label: "Up to 70% faster", sub: "than manual cleaning" },
                { icon: Shield, label: "Eliminates", sub: "high-altitude labor risk" },
                { icon: Droplets, label: "Optimized", sub: "water consumption" },
                { icon: ArrowRight, label: "Minimal", sub: "operational downtime" },
                { icon: Building2, label: "Major reduction", sub: "in maintenance costs" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={i}
                  variants={item3D}
                  transition={{ duration: 0.5 }}
                  style={{ transformPerspective: 900 }}
                  className="section-glass rounded-xl p-5 text-center hover-container [transform-style:preserve-3d]"
                >
                  <Icon className="w-7 h-7 text-primary mx-auto mb-1" />
                  <div className="font-display font-semibold text-foreground text-sm">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground text-sm mb-6"
            >
              Ideal for: High-Rise Glass Buildings · Corporate Towers · Solar Farms · Industrial Warehouses · Airports & Mega Structures
            </motion.p>

              <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/#contact-form"
                className="btn-glass-primary px-4 md:px-6 py-2.5 md:py-3 font-display text-xs md:text-sm tracking-widest uppercase rounded-lg hover-glow whitespace-nowrap"
              >
                Schedule a Live Demo — Cleaning Drone
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA — 3D tilted card */}
        <section className="relative py-20 md:py-28 overflow-hidden perspective-1000">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <motion.div
            initial={{ opacity: 0, rotateX: -8, y: 40 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
            className="relative max-w-2xl mx-auto px-6"
          >
            <div className="section-glass glass-premium rounded-2xl p-10 md:p-12 text-center border border-primary/20 shadow-[0_25px_80px_rgba(0,0,0,0.3),0_0_40px_hsl(199_89%_48%/0.08)] [transform-style:preserve-3d]">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Ready to get started?</h2>
              <p className="text-muted-foreground text-sm mb-6">Request a demo or speak to our experts.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/#contact-form" className="btn-glass-primary px-6 py-2.5 text-xs tracking-widest uppercase rounded-lg hover-glow">
                  Request a Demo
                </Link>
                <Link to="/#contact-form" className="btn-glass px-6 py-2.5 text-xs tracking-widest uppercase rounded-lg border border-primary/30 text-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
