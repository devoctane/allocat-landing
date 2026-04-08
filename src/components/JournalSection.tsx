import { motion } from "framer-motion";

const entries = [
  { title: "The Future of Design Systems", readTime: "5 min", date: "Mar 2026" },
  { title: "Building Scalable Interfaces", readTime: "8 min", date: "Feb 2026" },
  { title: "Creative Coding with GSAP", readTime: "6 min", date: "Jan 2026" },
  { title: "Minimal Design Philosophy", readTime: "4 min", date: "Dec 2025" },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
};

const JournalSection = () => (
  <section className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div {...fadeInView} className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-light mb-2">
              Recent <em className="font-display italic">thoughts</em>
            </h2>
            <p className="text-sm text-muted max-w-md">
              Writing about design, development, and the creative process.
            </p>
          </div>
          <button className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-text-primary transition-all duration-300 hover:border-transparent">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View all <span>→</span>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4">
        {entries.map((entry, i) => (
          <motion.article
            key={entry.title}
            {...fadeInView}
            transition={{ ...fadeInView.transition, delay: i * 0.08 }}
            className="flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-stroke/50 flex-shrink-0 flex items-center justify-center">
              <span className="text-xs text-muted font-display italic">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm md:text-base text-text-primary truncate group-hover:text-text-primary/80 transition-colors">
                {entry.title}
              </h3>
            </div>
            <span className="text-xs text-muted hidden sm:block">{entry.readTime}</span>
            <span className="text-xs text-muted hidden md:block">{entry.date}</span>
            <span className="text-muted group-hover:text-text-primary transition-colors text-sm">→</span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default JournalSection;
