"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lottieAnimationData from "@/content/loading-lottie.json";

export default function LottiePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animItem: any = null;

    import("lottie-web").then((lottieModule) => {
      const lottie = lottieModule.default || lottieModule;
      if (containerRef.current) {
        animItem = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: lottieAnimationData,
        });
      }
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => {
      clearTimeout(timer);
      if (animItem) {
        animItem.destroy();
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white select-none pointer-events-auto"
        >
          {/* ONLY the Lottie Animation, pure white, no extra text or logos */}
          <div
            ref={containerRef}
            className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
