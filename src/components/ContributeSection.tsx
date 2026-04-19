import { motion } from "framer-motion";
import { GitFork, Bug, Lightbulb, Github, Star } from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

const ways = [
  {
    icon: GitFork,
    title: "Fork & Build",
    description:
      "Clone the repo, build features you want to see, and open a pull request. Every contribution counts.",
  },
  {
    icon: Bug,
    title: "Report Bugs",
    description:
      "Found something broken? Open an issue on GitHub and help us squash it for everyone.",
  },
  {
    icon: Lightbulb,
    title: "Suggest Features",
    description:
      "Have an idea? Start a discussion and help shape what Allocat becomes next.",
  },
];

const ContributeSection = () => (
  <section id="contribute" className="bg-bg py-20 md:py-32">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div {...fadeUp} className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-muted text-xs font-medium px-4 py-1.5 mb-6 uppercase tracking-widest">
          Open Source
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
          Built in the open.
          <br />
          <span className="text-muted">Improved together.</span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
          Allocat is free and open source. Whether you want to fix a bug, ship a
          feature, or share an idea — you're welcome here.
        </p>
      </motion.div>

      {/* Contribution cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {ways.map((way, i) => (
          <motion.div
            key={way.title}
            {...fadeUp}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: i * 0.12,
            }}
            className="group rounded-3xl bg-surface border border-stroke p-8 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <way.icon className="w-6 h-6 text-text-primary/70" />
            </div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              {way.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {way.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA block */}
      <motion.div
        {...fadeUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="https://github.com/devoctane/allocat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 bg-text-primary text-bg text-sm font-semibold transition-all duration-300 hover:opacity-80 hover:scale-105"
        >
          <Github className="w-4 h-4" />
          Fork on GitHub →
        </a>
        <a
          href="https://github.com/devoctane/allocat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 border border-stroke text-muted text-sm font-medium transition-all duration-300 hover:border-white/20 hover:text-text-primary hover:scale-105"
        >
          <Star className="w-4 h-4" />
          Star the repo
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContributeSection;
