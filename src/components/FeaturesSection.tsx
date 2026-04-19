import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  PieChart,
  BarChart3,
  Brain,
  Target,
  CreditCard,
} from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

const features = [
  {
    icon: Wallet,
    title: "Budget Management",
    description:
      "Set a monthly budget, create spending categories, and track exactly how much is allocated vs. used — in real time.",
  },
  {
    icon: BarChart3,
    title: "Quick Spend Logging",
    description:
      "Log a spend in seconds from the dashboard. Pick a category, enter the amount — done. No tedious forms.",
  },
  {
    icon: PieChart,
    title: "Net Worth Tracking",
    description:
      "Add your assets and liabilities. Allocat calculates your net worth and shows your growth over time with a clean chart.",
  },
  {
    icon: Target,
    title: "Financial Goals",
    description:
      "Set savings goals — a new phone, an emergency fund, a vacation — and watch your progress move forward.",
  },
  {
    icon: CreditCard,
    title: "Debt & Lent Money",
    description:
      "Track what you owe and what others owe you. Manage debts and lent money in one place, with clear repayment records.",
  },
  {
    icon: Brain,
    title: "AlloCat AI",
    description:
      "Talk to your finances. The built-in AI assistant has access to your real data and can answer questions, spot patterns, and suggest actions.",
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="bg-bg py-20 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-muted text-xs font-medium px-4 py-1.5 mb-6 uppercase tracking-widest">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
            Everything you need to
            <br />
            <span className="text-muted">master your money</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
            From daily spend logging to AI-powered insights — Allocat is your
            complete, distraction-free financial companion.
          </p>
        </motion.div>

        {/* Sticky Scroll Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start relative">
          
          {/* Left Column: Sticky Container (Hidden on mobile) */}
          <div className="hidden md:flex sticky top-10 h-screen items-center justify-center pl-4 pb-20">
            <div className="w-full aspect-[4/5] bg-surface border border-stroke rounded-[2rem] p-4 relative overflow-hidden shadow-2xl shadow-black/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-4 rounded-[1.5rem] bg-bg border border-stroke flex items-center justify-center p-8 bg-grid-white/[0.02]"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mx-auto mb-6">
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="w-8 h-8 text-text-primary/70" />;
                      })()}
                    </div>
                    <p className="text-xs text-muted/40 uppercase tracking-[0.2em] mb-3">
                      Screenshot Placeholder
                    </p>
                    <p className="text-lg font-display font-bold text-text-primary">
                      {features[activeFeature].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Scrolling Text blocks */}
          <div className="flex flex-col py-10 md:py-[20vh] relative z-10 space-y-24 md:space-y-0">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                // Trigger feature activation when the text block's middle enters the middle 20% of the viewport height.
                onViewportEnter={() => setActiveFeature(i)}
                viewport={{ margin: "-40% 0px -40% 0px", amount: "some" }}
                className="md:min-h-[80vh] flex flex-col justify-center"
              >
                {/* Mobile top structural line */}
                <div className="md:hidden w-full h-px bg-stroke mb-8" />

                <div className="flex items-center gap-4 mb-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-text-primary/70" />
                  </div>
                  {/* Number tag */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted/50 font-display">
                    Feature 0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Mobile-only Image Fallback */}
                <div className="md:hidden mt-10 w-full aspect-[4/3] bg-surface border border-stroke rounded-[2rem] flex flex-col items-center justify-center p-6 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-text-primary/50" />
                    </div>
                  <span className="text-[10px] text-muted/40 uppercase tracking-[0.2em]">
                    Screenshot
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
