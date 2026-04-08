import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import explore1 from "@/assets/explore-1.jpg";
import explore2 from "@/assets/explore-2.jpg";
import explore3 from "@/assets/explore-3.jpg";
import explore4 from "@/assets/explore-4.jpg";
import explore5 from "@/assets/explore-5.jpg";
import explore6 from "@/assets/explore-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const leftItems = [
  { src: explore1, title: "Geometric Light" },
  { src: explore3, title: "Type Dissolution" },
  { src: explore5, title: "Crystal Forms" },
];
const rightItems = [
  { src: explore2, title: "Fluid Metal" },
  { src: explore4, title: "Fog Studies" },
  { src: explore6, title: "Wire Mesh" },
];

const ExplorationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax columns
      if (leftColRef.current) {
        gsap.to(leftColRef.current, {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
      if (rightColRef.current) {
        gsap.to(rightColRef.current, {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative min-h-[300vh] bg-bg">
        {/* Pinned center content */}
        <div
          ref={contentRef}
          className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Explorations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-light mb-4">
            Visual <em className="font-display italic">playground</em>
          </h2>
          <p className="text-sm text-muted max-w-md mb-8">
            A space for creative experiments and visual explorations outside
            client work.
          </p>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-text-primary transition-all duration-300 hover:border-transparent"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View on Dribbble <span>↗</span>
          </a>
        </div>

        {/* Parallax columns */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="max-w-[1400px] mx-auto h-full grid grid-cols-2 gap-12 md:gap-40 px-6">
            <div ref={leftColRef} className="flex flex-col gap-8 pt-[30vh]">
              {leftItems.map((item) => (
                <div
                  key={item.title}
                  className="aspect-square max-w-[320px] rounded-2xl overflow-hidden border border-stroke cursor-pointer pointer-events-auto hover:rotate-1 transition-transform duration-500"
                  onClick={() => setLightbox(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div
              ref={rightColRef}
              className="flex flex-col gap-8 items-end pt-[50vh]"
            >
              {rightItems.map((item) => (
                <div
                  key={item.title}
                  className="aspect-square max-w-[320px] rounded-2xl overflow-hidden border border-stroke cursor-pointer pointer-events-auto hover:-rotate-1 transition-transform duration-500"
                  onClick={() => setLightbox(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Exploration"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ExplorationsSection;
