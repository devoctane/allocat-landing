import { motion } from "framer-motion";
import { UserPlus, LayoutDashboard, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up",
    description:
      "Create your free account with just an email. No credit card, no subscription — start in seconds.",
  },
  {
    icon: LayoutDashboard,
    number: "02",
    title: "Set Up Your Finances",
    description:
      "Set your monthly budget, log income and expenses, add categories, and track assets and liabilities.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Talk to AlloCat AI",
    description:
      "Ask your AI assistant anything about your spending. Get real, data-backed answers drawn from your actual financial data.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-bg py-20 md:py-32">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div {...fadeUp} className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-muted text-xs font-medium px-4 py-1.5 mb-6 uppercase tracking-widest">
          How It Works
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
          Get started in
          <br />
          <span className="text-muted">three simple steps</span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
          No complex setup. No learning curve. Start managing your finances in
          under a minute.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            {...fadeUp}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: i * 0.15,
            }}
            className="relative group"
          >
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[calc(50%+3.5rem)] w-[calc(100%-4rem)] h-px bg-stroke" />
            )}

            <div className="relative rounded-3xl bg-surface border border-stroke hover:border-white/[0.12] hover:bg-white/[0.04] p-8 transition-all duration-500">
              {/* Icon + number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-text-primary/70" />
                </div>
                <span className="text-4xl font-display font-bold text-stroke">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
