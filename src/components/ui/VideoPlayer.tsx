"use client";
import { useState, useEffect, useRef, useId } from "react";
import MuteIcon from "@/components/icons/mute-icon";
import UnmuteIcon from "@/components/icons/unmute-icon";

interface YTPlayer {
  mute: () => void;
  unMute: () => void;
  playVideo: () => void;
  pauseVideo: () => void;
}

interface YTEvent {
  target: YTPlayer;
  data: number;
}

declare global {
  interface Window {
    YT: { Player: new (id: string, opts: object) => YTPlayer };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoPlayerProps {
  src: string;
  label: string;
  className?: string;
}

export default function VideoPlayer({ src, label, className = "" }: VideoPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const rawId = useId();
  const playerId = `yt-player-${rawId.replace(/:/g, "")}`;

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player(playerId, {
        events: {
          onReady: (e: YTEvent) => { playerRef.current = e.target; playerRef.current.mute(); playerRef.current.playVideo(); },
          onStateChange: (e: YTEvent) => {
            if (e.data === 1) setIsPlaying(true);
            if (e.data === 2) setIsPlaying(false);
            if (e.data === 0) playerRef.current?.playVideo();
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, [playerId]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.unMute();
    else playerRef.current.mute();
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className={`group relative aspect-video overflow-hidden ${className}`}>
      {/* iframe is 120px taller than container; YouTube letterboxes the 16:9 video
          with 60px black bars top/bottom where its title/bottom UI overlays live.
          overflow-hidden clips those bars. */}
      <iframe
        id={playerId}
        src={src}
        title={label}
        className="absolute left-0 w-full"
        style={{ border: 0, top: "-60px", height: "calc(100% + 120px)" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Blocks all mouse interaction with the iframe */}
      <div className="absolute inset-0 z-6 cursor-pointer" onClick={togglePlay} />

      {/* Center play/pause icon sits above the iframe and covers YouTube's own center icon.
          Hidden with opacity when playing, visible on hover. Always visible when paused. */}
      <div className="absolute inset-0 z-7 flex items-center justify-center pointer-events-none">
        <div
          className={`bg-black/40 rounded-full p-5 transition-opacity duration-300 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Mute / unmute */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors cursor-pointer"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <MuteIcon /> : <UnmuteIcon />}
      </button>
    </div>
  );
}
