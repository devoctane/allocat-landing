import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    quote:
      "Allocat completely changed how I manage my money. The AI insights helped me save ₹15,000 in my first month!",
    rating: 5,
    initials: "PS",
    gradient: "from-emerald-DEFAULT to-emerald-dark",
  },
  {
    name: "Rahul Patel",
    role: "College Student",
    quote:
      "Finally an app that's simple enough for students. I can track my allowance and actually know where my money goes.",
    rating: 5,
    initials: "RP",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Ananya Reddy",
    role: "Freelance Designer",
    quote:
      "The budget alerts are a lifesaver. I used to overspend every month — now I'm consistently under budget and saving for my goals.",
    rating: 5,
    initials: "AR",
    gradient: "from-purple-500 to-purple-600",
  },
];

const fadeInView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-bg py-20 md:py-32">
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div {...fadeInView} className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-DEFAULT/10 border border-emerald-DEFAULT/20 text-emerald-light text-xs font-medium px-4 py-1.5 mb-6">
          Testimonials
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-display font-bold mb-4">
          Loved by users
          <br />
          <span className="gradient-text">
            across India
          </span>
        </h2>
        <p className="text-sm md:text-base text-muted max-w-lg mx-auto">
          Join thousands of people who've taken control of their finances with
          Allocat.
        </p>
      </motion.div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            {...fadeInView}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1] as const,
              delay: i * 0.12,
            }}
            className="group rounded-3xl bg-surface border border-stroke p-8 hover:border-emerald-DEFAULT/20 transition-all duration-500"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm md:text-base text-text-primary/80 leading-relaxed mb-8">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-text-primary">
                  {t.name}
                </p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
