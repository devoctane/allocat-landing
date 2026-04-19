import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

const insights = [
  {
    icon: TrendingUp,
    title: "Spending Alert",
    message: "You spent 30% more on food this week compared to your average.",
  },
  {
    icon: TrendingDown,
    title: "Savings Opportunity",
    message: "Reducing subscriptions could save you ₹2,000/month. Review now?",
  },
  {
    icon: Target,
    title: "Goal Progress",
    message: "You're on track! 67% of your vacation goal reached. Keep it up!",
  },
  {
    icon: Lightbulb,
    title: "Smart Tip",
    message:
      "Auto-saving ₹500/week could grow your emergency fund by ₹26,000/year.",
  },
  {
    icon: ShieldCheck,
    title: "Budget Shield",
    message:
      "Great job! You stayed within budget for Travel this month — 3 months running.",
  },
  {
    icon: Zap,
    title: "Quick Insight",
    message:
      "Weekends account for 45% of your dining expenses. Consider meal prepping?",
  },
];

const InsightsSection = () => (
  <section id="insights" className="relative bg-bg py-20 md:py-32 overflow-hidden">
    {/* Very faint background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[120px]" />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div {...fadeUp} className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-muted text-xs font-medium px-4 py-1.5 mb-6 uppercase tracking-widest">
          <Zap className="w-3 h-3" />
          AI-Powered
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
          Insights that
          <br />
          <span className="text-muted">actually help</span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
          AlloCat AI reads your real financial data and surfaces patterns,
          alerts, and suggestions — not generic advice.
        </p>
      </motion.div>

      {/* Insights grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.title + i}
            {...fadeUp}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: i * 0.08,
            }}
            className="group relative rounded-2xl bg-surface border border-stroke p-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 cursor-default"
          >
            {/* Icon + title */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <insight.icon className="w-5 h-5 text-text-primary/60" />
              </div>
              <div>
                <h3 className="text-sm font-display font-bold text-text-primary">
                  {insight.title}
                </h3>
                <p className="text-xs text-muted/50 mt-0.5">Just now</p>
              </div>
            </div>

            {/* Message */}
            <p className="text-sm text-muted leading-relaxed pl-[52px]">
              {insight.message}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
