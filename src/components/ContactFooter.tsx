import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const HLS_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const SOCIALS = ["Twitter", "LinkedIn", "Dribbble", "GitHub"];

const ContactFooter = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  const marqueeText = "BUILDING THE FUTURE • ".repeat(10);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background video (flipped) */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) scaleY(-1)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="whitespace-nowrap inline-block">
            <span className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10">
              {marqueeText}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-light mb-6">
            Let's work <em className="font-display italic">together</em>
          </h2>
          <a
            href="mailto:hello@michaelsmith.com"
            className="group relative inline-flex items-center gap-2 rounded-full text-sm px-8 py-4 border border-stroke text-text-primary transition-all duration-300 hover:border-transparent hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            hello@michaelsmith.com <span>↗</span>
          </a>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stroke pt-8">
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-muted hover:text-text-primary transition-colors uppercase tracking-[0.15em]"
              >
                {s}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
