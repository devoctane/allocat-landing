import { useEffect, useRef } from "react";

interface HeroSectionProps {
  revealed: boolean;
}

const HeroSection = ({ revealed }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Very subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial vignette to frame the center */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Logo */}
        <div
          className="hero-logo mb-8 opacity-0"
          style={{ willChange: "opacity, transform" }}
        >
          <img
            src="/allocat.png"
            alt="Allocat logo"
            className="h-20 w-20 md:h-28 md:w-28 invert mx-auto"
          />
        </div>

        {/* Brand name */}
        <h1
          className="hero-brand opacity-0 text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-text-primary mb-6"
          style={{ willChange: "opacity, transform" }}
        >
          Allocat
        </h1>

        {/* Tagline */}
        <p
          className="hero-tagline opacity-0 text-xl md:text-2xl lg:text-3xl font-display font-medium text-muted mb-4 leading-tight"
          style={{ willChange: "opacity, transform, filter" }}
        >
          Plan your money.{" "}
          <span className="text-text-primary">Live your life.</span>
        </p>

        {/* Sub-tagline */}
        <p
          className="hero-sub opacity-0 text-sm md:text-base text-muted/70 max-w-md mb-12 leading-relaxed"
          style={{ willChange: "opacity, transform, filter" }}
        >
          A free, open-source personal finance app. No subscriptions. No noise.
          Just clarity.
        </p>

        {/* CTAs */}
        <div
          className="hero-cta opacity-0 inline-flex flex-col sm:flex-row gap-4"
          style={{ willChange: "opacity, transform" }}
        >
          <a
            href="https://allocat.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-sm px-8 py-3.5 bg-text-primary text-bg font-semibold transition-all duration-300 hover:opacity-80 hover:scale-105"
          >
            Try Allocat →
          </a>
          <a
            href="https://github.com/devoctane/allocat"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-sm px-8 py-3.5 border border-stroke bg-transparent text-muted font-medium transition-all duration-300 hover:border-white/20 hover:text-text-primary hover:scale-105"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-cta opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-muted/50 uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute w-full h-2 bg-white/40 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
