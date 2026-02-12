import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Play, Volume2, VolumeX, Instagram } from "lucide-react";
import agriDroneImage from "@/assets/WhatsApp Image 2026-02-10 at 6.11.31 PM.jpeg";
import successImage2 from "@/assets/WhatsApp Image 2026-02-10 at 6.12.40 PM.jpeg";
import dubaiOfficeVideo from "@/assets/dubai office.mp4";
import successStoriesVideo from "@/assets/success stories .mp4";

declare global {
  interface Window {
    YT: { Player: new (el: HTMLElement, opts: Record<string, unknown>) => { getIframe(): HTMLIFrameElement } };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
}

const featuredVideo = {
  type: "youtube" as const,
  url: "https://www.youtube.com/watch?v=vfYaUAnKmWM",
  thumbnail: "https://img.youtube.com/vi/vfYaUAnKmWM/hqdefault.jpg",
  title: "Featured",
  isShort: false,
};

const stories = [
  {
    type: "youtube" as const,
    url: "https://www.youtube.com/shorts/T10srT5gcHU",
    thumbnail: "https://img.youtube.com/vi/T10srT5gcHU/hqdefault.jpg",
    title: "YouTube Short",
    isShort: true,
  },
  {
    type: "youtube" as const,
    url: "https://www.youtube.com/shorts/gIIrqCTdxXA",
    thumbnail: "https://img.youtube.com/vi/gIIrqCTdxXA/hqdefault.jpg",
    title: "YouTube Short",
    isShort: true,
  },

  {
    type: "youtube" as const,
    url: "https://www.youtube.com/shorts/iZ1Tga9a6Eg",
    thumbnail: "https://img.youtube.com/vi/iZ1Tga9a6Eg/hqdefault.jpg",
    title: "YouTube Short",
    isShort: true,
  },
  {
    type: "youtube" as const,
    url: "https://youtube.com/shorts/9rbMZwYq8o8?si=rNw8KfzGgQbD3S3b",
    title: "Youtube short",
    isShort: true,
  },
  {
    type: "youtube" as const,
    url: "https://youtube.com/shorts/5sFg0FdlkJU?si=C3hD1BMDVcpMVfmX",
    title: "Youtube short",
    isShort: true,
  },
  {
    type: "local" as const,
    src: successStoriesVideo,
    title: "Success Story",
  },
];

function getYouTubeVideoId(url: string): string | null {
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];
  const embedMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  const embedShort = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (embedShort) return embedShort[1];
  return null;
}

/** Extract Instagram reel ID for embed URL. Avoids CORS by using iframe embed instead of oembed API. */
function getInstagramReelId(url: string): string | null {
  const m = url.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
}

type LocalVideoItem = {
  type: "local";
  src: string;
  title: string;
};

type YouTubeItem = {
  type: "youtube";
  url: string;
  thumbnail?: string;
  title: string;
  isShort?: boolean;
};

type InstagramItem = {
  type: "instagram";
  url: string;
  title: string;
  thumbnail?: string;
};

type StoryItem = YouTubeItem | LocalVideoItem | InstagramItem | typeof featuredVideo;

function LocalVideoCard({
  story,
  index,
  isInView,
  compact = false,
}: {
  story: LocalVideoItem;
  index: number;
  isInView: boolean;
  compact?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="group group/card relative block rounded-2xl overflow-hidden border border-border/50 bg-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.12)] aspect-[9/16]"
    >
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={story.src}
          loop
          muted
          playsInline
          autoPlay
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/20 transition-colors pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`rounded-full bg-primary/90 group-hover/card:bg-primary flex items-center justify-center shadow-lg transition-colors duration-300 group-hover/card:scale-110 opacity-90 ${
              compact ? "w-10 h-10" : "w-14 h-14"
            }`}
          >
            <Play
              className={`text-primary-foreground fill-primary-foreground ml-0.5 ${
                compact ? "w-4 h-4" : "w-6 h-6"
              }`}
            />
          </div>
        </div>
        <div
          className={`absolute top-3 right-3 z-10 pointer-events-auto ${compact ? "top-1.5 right-1.5" : ""}`}
          data-sound-toggle
        >
          <button
            type="button"
            onClick={toggleSound}
            className={`rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors ${compact ? "p-1.5" : "p-2"}`}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <VolumeX className={compact ? "w-3 h-3" : "w-4 h-4"} />
            ) : (
              <Volume2 className={compact ? "w-3 h-3" : "w-4 h-4"} />
            )}
          </button>
        </div>
      </div>
      <div className={`text-center ${compact ? "p-2" : "p-4"}`}>
        <span className="text-xs tracking-wider uppercase text-muted-foreground">
          {story.title}
        </span>
      </div>
    </motion.div>
  );
}

function DubaiOfficeBlock({ isInView }: { isInView: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 }}
      className="w-full mb-8"
    >
      <div className="rounded-2xl overflow-hidden glass-premium border border-primary/40 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_40px_hsl(199_89%_48%/0.25)]">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="relative flex justify-center bg-black/40 md:w-1/2 md:flex-shrink-0 md:max-w-md">
            <video
              ref={videoRef}
              src={dubaiOfficeVideo}
              loop
              muted
              playsInline
              autoPlay
              preload="metadata"
              className="w-full max-w-2xl max-h-[60vh] h-auto object-contain md:max-h-[50vh]"
            />
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors p-2"
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
            >
              {muted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="p-5 md:p-6 md:py-8 text-center md:text-left flex flex-col justify-center">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-primary/10 text-primary border border-primary/40 mb-3">
              Global expansion
            </span>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground text-glow">
              New office opening in Dubai
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl md:max-w-none mx-auto md:mx-0">
              Dronark Aerospace is expanding globally. Our new office in Dubai will bring aerial solutions
              and agri-tech innovation closer to partners across the Middle East and beyond. Watch a look
              at the space and stay tuned for the launch.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Instagram reels: link card only. Embed iframe is blocked by X-Frame-Options: SAMEORIGIN, so we always show a clickable card. */
function InstagramReelCard({
  url,
  title,
  index,
  isInView,
  compact = false,
}: {
  url: string;
  title: string;
  thumbnail?: string;
  index: number;
  isInView: boolean;
  compact?: boolean;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="group group/card relative block rounded-2xl overflow-hidden border border-border/50 bg-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.12)] aspect-[9/16]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] opacity-90">
        <div className="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
          <Play className="w-8 h-8 text-white fill-white ml-0.5" />
        </div>
        <Instagram className="w-8 h-8 text-white drop-shadow" />
        <span className="text-xs text-white/90 font-medium text-center drop-shadow">Watch on Instagram</span>
      </div>
      {!compact && (
        <div className="absolute bottom-10 left-2 right-2 text-center pointer-events-none">
          <span className="text-xs text-white/90 drop-shadow">Click to open</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center border-t border-white/10 bg-black/40 backdrop-blur-sm pointer-events-none">
        <span className="text-xs tracking-wider uppercase text-white/90">{title}</span>
      </div>
    </motion.a>
  );
}

function YouTubeCard({
  story,
  index,
  isInView,
  featured = false,
  compact = false,
}: {
  story: YouTubeItem | typeof featuredVideo;
  index: number;
  isInView: boolean;
  featured?: boolean;
  compact?: boolean;
}) {
  const videoId = getYouTubeVideoId(story.url);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [muted, setMuted] = useState(true);
  const [apiReady, setApiReady] = useState(false);
  const isShort = "isShort" in story ? story.isShort : false;
  const aspectClass = isShort ? "aspect-[9/16]" : "aspect-video";

  const initPlayer = useCallback(() => {
    if (!playerContainerRef.current || !videoId || !window.YT?.Player) return;
    const el = document.createElement("div");
    el.className = "w-full h-full";
    playerContainerRef.current.appendChild(el);
    new window.YT.Player(el, {
      videoId,
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: videoId,
        playsinline: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: (e: { target: YTPlayer }) => {
          playerRef.current = e.target;
        },
      },
    });
  }, [videoId]);

  useEffect(() => {
    if (window.YT?.Player) {
      setApiReady(true);
      return;
    }
    const check = setInterval(() => {
      if (window.YT?.Player) {
        setApiReady(true);
        clearInterval(check);
      }
    }, 100);
    return () => clearInterval(check);
  }, []);

  useEffect(() => {
    if (apiReady && videoId && playerContainerRef.current) initPlayer();
    return () => {
      playerRef.current = null;
    };
  }, [apiReady, videoId, initPlayer]);

  useEffect(() => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) p.mute();
    else p.unMute();
  }, [muted]);

  const handleSoundClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMuted((m) => !m);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("[data-sound-toggle]")) return;
    window.open(story.url, "_blank", "noopener,noreferrer");
  };

  if (!videoId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: featured ? 0.05 : 0.1 + index * 0.08 }}
      className={`group group/card relative block rounded-2xl overflow-hidden border border-border/50 bg-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.12)] cursor-pointer ${featured ? "w-full" : ""}`}
      onClick={handleCardClick}
    >
      <div className={`${aspectClass} relative w-full`}>
        {!apiReady && story.thumbnail && (
          <img
            src={story.thumbnail}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain bg-black"
          />
        )}
        <div
          ref={playerContainerRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: apiReady ? "block" : "none" }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/20 transition-colors pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`rounded-full bg-primary/90 group-hover/card:bg-primary flex items-center justify-center shadow-lg transition-colors duration-300 group-hover/card:scale-110 opacity-90 ${
              compact ? "w-10 h-10" : "w-14 h-14"
            }`}
          >
            <Play
              className={`text-primary-foreground fill-primary-foreground ml-0.5 ${
                compact ? "w-4 h-4" : "w-6 h-6"
              }`}
            />
          </div>
        </div>
        <div
          className={`absolute top-3 right-3 z-10 pointer-events-auto ${compact ? "top-1.5 right-1.5" : ""}`}
          data-sound-toggle
        >
          <button
            type="button"
            onClick={handleSoundClick}
            className={`rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors ${compact ? "p-1.5" : "p-2"}`}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <VolumeX className={compact ? "w-3 h-3" : "w-4 h-4"} />
            ) : (
              <Volume2 className={compact ? "w-3 h-3" : "w-4 h-4"} />
            )}
          </button>
        </div>
        {!compact && (
          <div className="absolute bottom-2 left-2 right-2 text-center pointer-events-none">
            <span className="text-xs text-white/90 drop-shadow">Click to watch on YouTube</span>
          </div>
        )}
      </div>
      {!featured && (
        <div className={`text-center ${compact ? "p-2" : "p-4"}`}>
          <span className="text-xs tracking-wider uppercase text-muted-foreground">
            {story.title}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function SuccessStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="success-stories" className="relative py-12 md:py-16 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 section-glass section-glass-hover rounded-2xl py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-primary/90 mb-3 block font-medium">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Hear from farmers and partners who are redefining agriculture with Dronark.
          </p>
        </motion.div>

        <div className="w-full mb-8">
          <YouTubeCard
            key={featuredVideo.url}
            story={featuredVideo}
            index={0}
            isInView={isInView}
            featured
          />
        </div>

        <DubaiOfficeBlock isInView={isInView} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8"
        >
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.12)]">
            <img
              src={agriDroneImage}
              alt="Success story"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.12)]">
            <img
              src={successImage2}
              alt="Success story"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-nowrap justify-center gap-4 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible pb-2 md:pb-0"
        >
          {stories.map((story, i) => (
            <div key={story.type === "local" ? story.src : story.url} className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-auto">
              {story.type === "local" ? (
                <LocalVideoCard story={story as LocalVideoItem} index={i} isInView={isInView} compact />
              ) : (
                <YouTubeCard story={story as YouTubeItem} index={i} isInView={isInView} compact />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}