import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", target: "features" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Contribute", target: "contribute" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (target: string) => {
    setMobileOpen(false);
    const el = document.getElementById(target);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-bg/30 backdrop-blur-xl border-white/[0.08] shadow-lg shadow-black/20 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <button
            onClick={() => handleNav("hero")}
            className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
          >
            <img src="/allocat.png" alt="Allocat" className="h-7 w-7 invert" />
            <span className="text-base font-display font-bold text-text-primary tracking-wide">
              allocat
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.target)}
                className="text-sm font-medium text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://github.com/devoctane/allocat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text-primary transition-colors"
              title="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://allocat.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm rounded-full px-6 py-2.5 bg-text-primary text-bg font-semibold transition-all duration-300 hover:opacity-80 hover:scale-105"
            >
              Try Allocat
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.target)}
              className="text-2xl font-display font-semibold text-text-primary hover:text-muted transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4">
            <a
              href="https://github.com/devoctane/allocat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-muted hover:text-text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://allocat.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg rounded-full px-8 py-3.5 bg-text-primary text-bg font-semibold transition-all duration-300 hover:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              Try Allocat
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
