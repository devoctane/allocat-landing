import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
};

const StatsSection = () => (
  <section id="stats" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div
        {...fadeInView}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center md:text-left border-t border-stroke pt-8"
          >
            <span className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary">
              {stat.value}
            </span>
            <p className="text-sm text-muted mt-2 uppercase tracking-[0.2em]">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
