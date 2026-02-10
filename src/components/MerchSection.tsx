import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shirt, Send } from "lucide-react";
import tShirtsImg from "@/assets/t shirts.png";
import hoodiesImg from "@/assets/hoodies.png";

const inputClass =
  "w-full bg-muted/30 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(199_89%_48%/0.15)] transition-all duration-300";

export default function MerchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleMerchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      setError("Form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment.");
      setSubmitting(false);
      return;
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
          access_key: accessKey,
          subject: `Merchandise booking: ${fd.get("type")} from ${fd.get("name")}`,
          from_name: String(fd.get("name")),
          email: String(fd.get("email")),
          type: fd.get("type"),
          size: fd.get("size"),
          quantity: fd.get("quantity"),
          address: fd.get("address") || "",
          message: fd.get("message") || "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="merchandise" className="relative py-12 md:py-16 overflow-hidden" ref={ref}>
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
                loading="lazy"
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
                loading="lazy"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <h3 className="font-display text-lg font-semibold text-foreground text-center mb-4">
            Book your order
          </h3>
          {submitted ? (
            <div className="text-center py-10 glass rounded-xl border border-border/50 max-w-xl mx-auto">
              <div className="font-display text-xl text-primary text-glow mb-2">Order request received</div>
              <p className="text-muted-foreground text-sm">We’ll confirm at dronarkaerospace@gmail.com shortly.</p>
            </div>
          ) : (
            <form
              id="merch-form"
              onSubmit={handleMerchSubmit}
              className="space-y-4 max-w-xl mx-auto"
            >
              <div>
                <label htmlFor="merch-type" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Type
                </label>
                <select
                  id="merch-type"
                  name="type"
                  required
                  className={inputClass}
                >
                  <option value="">Select — T-Shirt or Hoodie</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Hoodie">Hoodie</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="merch-name" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    id="merch-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="merch-email" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    id="merch-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="merch-size" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Size
                  </label>
                  <select id="merch-size" name="size" className={inputClass}>
                    <option value="">Select size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="merch-quantity" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Quantity
                  </label>
                  <input
                    id="merch-quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={1}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="merch-address" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Home address
                </label>
                <textarea
                  id="merch-address"
                  name="address"
                  placeholder="Street, city, state, PIN code"
                  rows={2}
                  required
                  className={inputClass + " resize-none"}
                />
              </div>
              <div>
                <label htmlFor="merch-message" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Notes (optional)
                </label>
                <textarea
                  id="merch-message"
                  name="message"
                  placeholder="e.g. colour preference, delivery notes"
                  rows={2}
                  className={inputClass + " resize-none"}
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="btn-glass-primary w-full group relative font-display text-sm tracking-widest uppercase text-primary-foreground rounded-lg py-3.5 overflow-hidden hover-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
              >
                <span className="relative z-10">{submitting ? "Sending…" : "Submit order request"}</span>
                <Send className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-accent/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </form>
          )}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Bookings are sent to{" "}
          <a href="mailto:dronarkaerospace@gmail.com" className="text-primary hover:underline">
            dronarkaerospace@gmail.com
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
