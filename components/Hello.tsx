"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const transitionSettings = {
  type: "spring",
  ease: "circIn",
  duration: 1.5,
};

export const Hello = ({
  stackRef,
}: {
  stackRef?: React.RefObject<HTMLDivElement>;
}) => {
  const handleOnClick = () => {
    if (stackRef?.current) {
      stackRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-8 flex-col h-[100vh] justify-center text-center">
      <AnimatePresence>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={transitionSettings}
          className="flex gap-3 justify-center"
        >
          <h1 className="text-5xl text-white font-extralight">Hey, I&apos;m</h1>{" "}
          <h1 className="text-5xl text-[#ADD8E6] font-medium">Daniel</h1>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={transitionSettings}
          className="text-5xl text-white font-extralight"
        >
          I&apos;m a fullstack developer
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence>
        {stackRef && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={transitionSettings}
          >
            <Link href="#stack" scroll={false}>
              <button onClick={handleOnClick} className="glass-button">
                Check out my site
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
