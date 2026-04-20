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

// Screenshots captured at 1000×1558px — portrait mobile ratio ~1:1.558
const featureImages = [
  "/budget.png",    // Budget Management
  "/dashboard.png", // Quick Spend Logging
  "/netWorth.png",  // Net Worth Tracking
  "/fingoals.png",  // Financial Goals
  "/dept.png",      // Debt & Lent Money
  "/ai.png",        // AlloCat AI
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

          {/* Left Column: Sticky phone mockup (hidden on mobile) */}
          <div className="hidden md:flex sticky top-10 h-screen items-center justify-center pl-4 pb-20">
            {/*
              Phone shell — sized to exactly match the screenshot's 1000×1558 ratio.
              w-[260px] → height = 260 × (1558/1000) ≈ 405px. Fits comfortably in viewport.
            */}
            <div
              className="relative top-5 bg-[#0a0a0a] border-[3px] border-white/[0.10] rounded-[2.5rem] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_48px_100px_-10px_rgba(0,0,0,0.85)]"
              style={{ width: "320px", aspectRatio: "1000 / 2000" }}
            >
              {/* Dynamic island / notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

              {/* Screenshot with cross-fade */}
              <div className="absolute inset-0 overflow-hidden rounded-[2.25rem]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFeature}
                    src={featureImages[activeFeature]}
                    alt={features[activeFeature].title}
                    initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>

              {/* Glare */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent z-10" />
            </div>
          </div>

          {/* Right Column: Scrolling text blocks */}
          <div className="flex flex-col py-10 md:py-[20vh] relative z-10 space-y-24 md:space-y-0">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                onViewportEnter={() => setActiveFeature(i)}
                viewport={{ margin: "-40% 0px -40% 0px", amount: "some" }}
                className="md:min-h-[80vh] flex flex-col justify-center"
              >
                {/* Mobile divider */}
                <div className="md:hidden w-full h-px bg-stroke mb-8" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-text-primary/70" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted/50 font-display">
                    Feature 0{i + 1}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-base text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Mobile-only phone mockup */}
                <div
                  className="md:hidden mt-10 mx-auto relative bg-[#0a0a0a] border-[3px] border-white/[0.10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
                  style={{ width: "200px", aspectRatio: "1000 / 2000" }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
                  <div className="absolute inset-0 overflow-hidden rounded-[2.25rem]">
                    <img
                      src={featureImages[i]}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />
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
