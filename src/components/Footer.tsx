import logo from "@/assets/logo.PNG";
import { Instagram, Mail, Youtube } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/dronark.aerospace";
const YOUTUBE_URL = "https://www.youtube.com/@itsdroneprathap";
const EMAIL = "dronarkaerospace@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
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
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Dronark Aerospace Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
