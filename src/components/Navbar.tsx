import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "Work", "Resume"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [hoverSayHi, setHoverSayHi] = useState(false);
  const [hoverLogo, setHoverLogo] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link: string) => {
    setActive(link);
    const sectionMap: Record<string, string> = {
      Home: "hero",
      Work: "works",
      Resume: "stats",
    };
    const el = document.getElementById(sectionMap[link]);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <button
          onMouseEnter={() => setHoverLogo(true)}
          onMouseLeave={() => setHoverLogo(false)}
          className="relative w-9 h-9 rounded-full p-[2px] transition-transform duration-300 hover:scale-110"
          style={{
            background: hoverLogo
              ? "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)"
              : "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
          }}
          onClick={() => handleNav("Home")}
        >
          <span className="flex items-center justify-center w-full h-full rounded-full bg-bg font-display italic text-[13px] text-text-primary">
            JA
          </span>
        </button>

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
              active === link
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {link}
          </button>
        ))}

        {/* Divider */}
        <span className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {/* Say hi */}
        <button
          className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary transition-all duration-200"
          onMouseEnter={() => setHoverSayHi(true)}
          onMouseLeave={() => setHoverSayHi(false)}
          onClick={() => {
            window.location.href = "mailto:hello@michaelsmith.com";
          }}
        >
          {hoverSayHi && (
            <span
              className="absolute inset-[-2px] rounded-full animate-gradient-shift"
              style={{
                background:
                  "linear-gradient(90deg, #89AACC, #4E85BF, #89AACC)",
                backgroundSize: "200% 200%",
              }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1 bg-surface rounded-full px-3 py-1 backdrop-blur-md">
            Say hi <span>↗</span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
