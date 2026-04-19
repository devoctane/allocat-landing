import { type VariantLabels } from "framer-motion";

// Shared fade-up + blur-in scroll reveal variant
// Use this in all section components instead of defining inline.
export const fadeUp = {
  initial: { opacity: 0, y: 32, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" } as VariantLabels,
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const },
};

// Staggered child for use inside a parent with fadeUp
export const fadeUpChild = {
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" } as VariantLabels,
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};
