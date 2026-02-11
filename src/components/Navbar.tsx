import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks: { label: string; href?: string; path?: string }[] = [
  { label: "Founder", href: "#founder" },
  { label: "Merchandise", href: "#merchandise" },
  { label: "Products", path: "/products" },
  { label: "About", href: "#about" },
  { label: "Success Stories", href: "#success-stories" },
  { label: "Contact", href: "#contact-form" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: location.pathname === "/" ? 2 : 0 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-primary/10 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(199_50%_7%)]"
          : "bg-[hsl(199_50%_7%_/0.97)] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 min-w-0">
          <Link to="/" className="group flex items-center shrink-0 -ml-1">
            <img
              src={logo}
              alt="Dronark Aerospace"
              className="h-12 md:h-14 w-auto object-contain animate-breathe animate-breathe-glow"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.path ? (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase whitespace-nowrap"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : location.pathname === "/" ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={{ pathname: "/", hash: link.href!.replace("#", "") }}
                  className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 uppercase whitespace-nowrap"
                >
                  {link.label}
                </Link>
              )
            )}
            {location.pathname === "/" ? (
              <a
                href="#contact-form"
                className="btn-glass px-5 py-2.5 text-sm tracking-widest uppercase border border-primary/30 text-primary hover:border-primary/50 transition-all duration-300 hover-glow rounded-lg whitespace-nowrap ml-1"
              >
                Request Demo
              </a>
            ) : (
              <Link
                to="/#contact-form"
                className="btn-glass px-5 py-2.5 text-sm tracking-widest uppercase border border-primary/30 text-primary hover:border-primary/50 transition-all duration-300 hover-glow rounded-lg whitespace-nowrap ml-1"
              >
                Request Demo
              </Link>
            )}
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden btn-glass rounded-lg p-2.5 text-foreground border border-white/10 hover:border-primary/30 transition-all duration-300 shrink-0"
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
            <div className="px-5 py-5 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.path ? (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                  >
                    {link.label}
                  </Link>
                ) : location.pathname === "/" ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      const selector = link.href!;
                      setTimeout(() => {
                        const el = document.querySelector(selector);
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 350);
                    }}
                    className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={{ pathname: "/", hash: link.href!.replace("#", "") }}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
