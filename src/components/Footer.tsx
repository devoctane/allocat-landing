import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Features", "How It Works", "Contribute"],
  Resources: ["GitHub", "Privacy", "Terms"],
};

const Footer = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

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

  const marqueeText = "PLAN YOUR MONEY. LIVE YOUR LIFE. • ".repeat(10);

  return (
    <footer className="relative bg-bg pt-16 md:pt-24 pb-8 overflow-hidden border-t border-stroke">
      {/* Very faint background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div ref={marqueeRef} className="whitespace-nowrap inline-block">
            <span className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-primary/[0.04]">
              {marqueeText}
            </span>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mb-16 md:mb-24 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
            Start for free at
            <br />
            <span className="text-muted">allocat.xyz</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8">
            Open source, free forever. No credit card required.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://allocat.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl text-sm md:text-base px-10 py-4 bg-text-primary text-bg font-semibold transition-all duration-300 hover:opacity-80 hover:scale-105"
            >
              Try Allocat →
            </a>
            <a
              href="https://github.com/devoctane/allocat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl text-sm md:text-base px-10 py-4 border border-stroke text-muted font-medium transition-all duration-300 hover:border-white/20 hover:text-text-primary"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 border-t border-stroke pt-12">
            {/* Logo column */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src="/allocat.png"
                  alt="Allocat"
                  className="h-8 w-8 invert"
                />
                <span className="text-lg font-display font-bold text-text-primary">
                  allocat
                </span>
              </div>
              <p className="text-sm text-muted max-w-xs leading-relaxed mb-6">
                A free, open-source personal finance app. Plan your money. Live
                your life.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/devoctane/allocat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-display font-bold text-text-primary uppercase tracking-[0.15em] mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted hover:text-text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stroke pt-8">
            <span className="text-xs text-muted">
              © 2026 Allocat. Open source under MIT.
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
              <span className="text-xs text-muted">
                Open source & actively maintained
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
