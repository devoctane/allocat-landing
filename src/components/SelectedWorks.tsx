import { motion } from "framer-motion";
import projectAutomotive from "@/assets/project-automotive.jpg";
import projectArchitecture from "@/assets/project-architecture.jpg";
import projectPortrait from "@/assets/project-portrait.jpg";
import projectBrand from "@/assets/project-brand.jpg";

const projects = [
  { title: "Automotive Motion", image: projectAutomotive, span: "md:col-span-7", aspect: "aspect-[7/5]" },
  { title: "Urban Architecture", image: projectArchitecture, span: "md:col-span-5", aspect: "aspect-[5/7]" },
  { title: "Human Perspective", image: projectPortrait, span: "md:col-span-5", aspect: "aspect-[5/7]" },
  { title: "Brand Identity", image: projectBrand, span: "md:col-span-7", aspect: "aspect-[7/5]" },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
};

const SelectedWorks = () => (
  <section id="works" className="bg-bg py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div {...fadeInView} className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            Selected Work
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-light mb-2">
              Featured <em className="font-display italic">projects</em>
            </h2>
            <p className="text-sm text-muted max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          <button className="hidden md:inline-flex group relative items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-text-primary transition-all duration-300 hover:border-transparent">
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View all work <span>→</span>
          </button>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            {...fadeInView}
            transition={{ ...fadeInView.transition, delay: i * 0.1 }}
            className={`${project.span} group relative overflow-hidden rounded-3xl bg-surface border border-stroke cursor-pointer`}
          >
            <div className={`relative ${project.aspect} overflow-hidden`}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary overflow-hidden">
                  <span className="absolute inset-0 accent-gradient animate-gradient-shift rounded-full" />
                  <span className="relative z-10 bg-bg rounded-full px-4 py-1.5 flex items-center gap-2">
                    View —{" "}
                    <em className="font-display italic">{project.title}</em>
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWorks;
