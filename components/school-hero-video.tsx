"use client";

import { useEffect, useRef } from "react";

export default function SchoolHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startPlayback = () => {
      if (video.paused && !video.ended) void video.play().catch(() => undefined);
    };
    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") startPlayback();
    };

    startPlayback();
    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    window.addEventListener("pageshow", startPlayback);
    document.addEventListener("visibilitychange", resumeWhenVisible);
    document.addEventListener("pointerdown", startPlayback, {
      once: true,
      passive: true,
    });

    return () => {
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      window.removeEventListener("pageshow", startPlayback);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
      document.removeEventListener("pointerdown", startPlayback);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="school-hero-video"
      autoPlay
      muted
      playsInline
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      preload="auto"
      aria-hidden="true"
    >
      <source
        src="/hero-mobile-v2.mp4"
        type="video/mp4"
        media="(max-width: 767px)"
      />
      <source
        src="/hero-desktop.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
    </video>
  );
}
