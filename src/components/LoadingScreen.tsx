import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Track", "Budget", "Grow"];
const DURATION = 2700;

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
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
        // Trigger exit animation then call onComplete
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 700);
        }, 200);
      }
    },
    [onComplete]
  );

  useEffect(() => {
    requestAnimationFrame(tick);
  }, [tick]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top left — Logo */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-8 flex items-center gap-3"
          >
            <img src="/allocat.png" alt="Allocat" className="h-8 w-8 invert" />
            <span className="text-sm font-display font-semibold text-text-primary tracking-wide">
              allocat
            </span>
          </motion.div>

          {/* Center — rotating word */}
          <div className="flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary/80"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bottom — counter */}
          <div className="p-8 flex flex-col items-end">
            <span className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-text-primary tabular-nums">
              {String(count).padStart(3, "0")}
            </span>
          </div>

          {/* Progress bar — monochrome white */}
          <div className="h-[2px] bg-stroke/50 w-full">
            <div
              className="h-full bg-text-primary/80 transition-transform duration-75 origin-left"
              style={{ transform: `scaleX(${count / 100})` }}
            />
          </div>
        </motion.div>
      ) : (
        // Curtain panel that slides up and off screen
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[9999] bg-bg"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
