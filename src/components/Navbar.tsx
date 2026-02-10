import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Founder", href: "#founder" },
  { label: "Merchandise", href: "#merchandise" },
  { label: "Technology", href: "#technology" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Contact", href: "#contact-form" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-primary/10 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(199_50%_7%)]"
          : "bg-[hsl(199_50%_7%_/0.97)] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3 -ml-2 md:-ml-3">
          <img
            src={logo}
            alt="Dronark Aerospace"
            className="h-14 md:h-16 w-auto object-contain animate-breathe animate-breathe-glow"
          />
        </a>

        <div className="hidden md:flex items-center gap-10 ml-6 md:ml-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-form"
            className="btn-glass px-5 py-2 text-sm tracking-widest uppercase border border-primary/30 text-primary hover:border-primary/50 transition-all duration-300 hover-glow rounded-lg whitespace-nowrap"
          >
            Request Demo
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden btn-glass rounded-lg p-2.5 text-foreground border border-white/10 hover:border-primary/30 transition-all duration-300"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(199_50%_7%_/0.98)] border-t border-primary/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    const selector = link.href;
                    setTimeout(() => {
                      const el = document.querySelector(selector);
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 350);
                  }}
                  className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
