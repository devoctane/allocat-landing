import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started with personal finance tracking.",
    features: [
      "Unlimited expense tracking",
      "5 custom categories",
      "Monthly budget setting",
      "Basic analytics & charts",
      "1 savings goal",
      "Smart notifications",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/month",
    description:
      "For serious savers who want AI-powered insights and unlimited access.",
    features: [
      "Everything in Free",
      "Unlimited categories",
      "AI-powered insights",
      "Advanced visual reports",
      "Unlimited savings goals",
      "Financial calculators",
      "Priority support",
      "Export to CSV/PDF",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

const PricingSection = () => (
  <section id="pricing" className="bg-bg py-20 md:py-32">
    <div className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div {...fadeInView} className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-DEFAULT/10 border border-emerald-DEFAULT/20 text-emerald-light text-xs font-medium px-4 py-1.5 mb-6">
          Pricing
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
          Simple,
          <br />
          <span className="gradient-text">
            transparent pricing
          </span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
          Start free and upgrade when you're ready. No hidden fees, cancel
          anytime.
        </p>
      </motion.div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            {...fadeInView}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: i * 0.15,
            }}
            className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
              plan.highlighted
                ? "bg-gradient-to-b from-emerald-DEFAULT/10 to-surface border-2 border-emerald-DEFAULT/30 shadow-xl shadow-emerald-DEFAULT/5"
                : "bg-surface border border-stroke hover:border-emerald-DEFAULT/15"
            }`}
          >
            {/* Popular badge */}
            {plan.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-emerald-DEFAULT text-white text-xs font-semibold px-4 py-1.5">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </div>
            )}

            {/* Plan name */}
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-5xl font-display font-bold text-text-primary">
                {plan.price}
              </span>
              <span className="text-sm text-muted">{plan.period}</span>
            </div>

            <p className="text-sm text-muted mb-8">{plan.description}</p>

            {/* CTA */}
            <button
              className={`w-full rounded-2xl text-sm font-semibold px-6 py-4 transition-all duration-300 mb-8 ${
                plan.highlighted
                  ? "bg-emerald-DEFAULT text-white hover:bg-emerald-light hover:shadow-lg hover:shadow-emerald-DEFAULT/20 hover:scale-[1.02]"
                  : "bg-surface border border-stroke text-text-primary hover:border-emerald-DEFAULT/30 hover:bg-emerald-DEFAULT/5"
              }`}
            >
              {plan.cta}
            </button>

            {/* Features */}
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? "text-emerald-light" : "text-muted"
                    }`}
                  />
                  <span className="text-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
