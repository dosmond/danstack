"use client";

import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const transitionSettings = { type: "spring", ease: "circIn", duration: 1 };

const _Hello = ({
  stackRef,
}: {
  stackRef: React.RefObject<HTMLDivElement>;
}) => {
  const handleOnClick = () => {
    if (stackRef?.current) {
      stackRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div className="flex gap-8 flex-col h-[100vh] justify-center text-center">
        <AnimatePresence>
          <m.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={transitionSettings}
            className="flex gap-3 justify-center"
          >
            <h1 className="text-5xl text-white font-extralight">Hey, I'm</h1>{" "}
            <h1 className="text-5xl text-[#ADD8E6] font-medium">Daniel</h1>
          </m.div>
        </AnimatePresence>
        <AnimatePresence>
          <m.h1
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={transitionSettings}
            className="text-5xl text-white font-extralight"
          >
            I'm a fullstack developer
          </m.h1>
        </AnimatePresence>
        <Link href="#stack" scroll={false}>
          <button
            onClick={handleOnClick}
            className="glass-button"
            style={{ backdropFilter: "blur(10px)" }}
          >
            Check out my site
          </button>
        </Link>
      </m.div>
    </LazyMotion>
  );
};

export const Hello = dynamic(() => Promise.resolve(_Hello), {
  ssr: false,
});
