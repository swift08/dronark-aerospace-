import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

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
    url: "https://www.youtube.com/shorts/DGWmr8rnRj8",
    thumbnail: "https://img.youtube.com/vi/DGWmr8rnRj8/hqdefault.jpg",
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

type StoryItem = (typeof stories)[0] | typeof featuredVideo;

function YouTubeCard({
  story,
  index,
  isInView,
  featured = false,
  compact = false,
}: {
  story: StoryItem;
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
    <section id="success-stories" className="relative py-16 md:py-20 overflow-hidden" ref={ref}>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-nowrap justify-center gap-4 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible pb-2 md:pb-0"
        >
          {stories.map((story, i) => (
            <div key={story.url} className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-auto">
              <YouTubeCard story={story} index={i} isInView={isInView} compact />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
