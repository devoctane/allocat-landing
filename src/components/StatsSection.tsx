import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "₹10Cr+", label: "Expenses Tracked" },
  { value: "30%", label: "Avg. Savings Increase" },
  { value: "4.8★", label: "User Rating" },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
};

const StatsSection = () => (
  <section id="stats" className="bg-bg py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      <motion.div
        {...fadeInView}
        className="rounded-3xl bg-gradient-to-br from-emerald-DEFAULT/10 to-emerald-dark/5 border border-emerald-DEFAULT/15 p-10 md:p-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary">
                {stat.value}
              </span>
              <p className="text-xs md:text-sm text-muted mt-2 uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
