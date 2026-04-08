import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];
const DURATION = 2700;

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const tick = useCallback(
    (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(Math.floor((elapsed / DURATION) * 100), 100);
      setCount(progress);
      if (progress < 100) {
        requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onComplete, 400);
      }
    },
    [onComplete]
  );

  useEffect(() => {
    requestAnimationFrame(tick);
  }, [tick]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between">
      {/* Top left label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-8"
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">
          Portfolio
        </span>
      </motion.div>

      {/* Center rotating word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom section */}
      <div className="p-8 flex flex-col items-end">
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] bg-stroke/50 w-full">
        <div
          className="h-full accent-gradient transition-transform duration-75 origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
