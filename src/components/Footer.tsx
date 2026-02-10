import logo from "@/assets/logo.png";
import { Instagram, MapPin, Mail, Youtube } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/dronark.aerospace";
const YOUTUBE_URL = "https://www.youtube.com/@itsdroneprathap";
const EMAIL = "dronarkaerospace@gmail.com";
const ADDRESS = "DRONARK AEROSPACE PVT. LTD., #83, Ittamadu Main Road, BSK 3rd Stage, Padmanabha Nagar, Bangalore, Karnataka, India – 560085";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
          <img
            src={logo}
            alt="Dronark Aerospace"
            className="h-7 w-auto object-contain"
          />
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs"
            aria-label="Email Dronark Aerospace"
          >
            <Mail className="w-5 h-5" />
            <span className="tracking-wider">{EMAIL}</span>
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Dronark Aerospace on YouTube"
          >
            <Youtube className="w-5 h-5" />
            <span className="text-xs tracking-wider uppercase">YouTube</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Follow Dronark Aerospace on Instagram"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-xs tracking-wider uppercase">Instagram</span>
          </a>
        </div>
          <p className="text-xs text-muted-foreground tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} Dronark Aerospace Private Limited. All rights reserved.
          </p>
        </div>
        <div className="flex items-start justify-center gap-2 text-muted-foreground text-xs border-t border-border/20 pt-4">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden />
          <span className="max-w-xl">{ADDRESS}</span>
        </div>
      </div>
    </footer>
  );
}
