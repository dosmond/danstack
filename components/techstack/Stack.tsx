"use client";
import React, { ForwardedRef, forwardRef, useRef } from "react";
import { StackPanel } from "./StackPanel";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import clsx from "clsx";

const logos = [
  {
    icon: "/javascript.png",
    alt: "Javascript",
    min: 3,
  },
  {
    icon: "/typescript.svg",
    alt: "Typescript",
    min: 0,
  },
  {
    icon: "/react.png",
    alt: "React",
    min: 0,
    backdrop: true,
  },
  {
    icon: "/tailwind.png",
    alt: "Tailwind CSS",
    backdrop: true,
    min: 3,
  },
  {
    icon: "/csharp.png",
    alt: "C sharp",
    min: 0,
    backdrop: true,
  },
  {
    icon: "/nestjs.png",
    alt: "Nestjs",
    backdrop: true,
    min: 0,
  },
  {
    icon: "/graphql.png",
    alt: "Graphql",
    backdrop: true,
    min: 3,
  },
  {
    icon: "/azure.png",
    alt: "Azure",
    min: 3,
    backdrop: true,
  },
  {
    icon: "/aws.png",
    alt: "AWS",
    min: 3,
    backdrop: true,
  },
];

// eslint-disable-next-line react/display-name
export const TechStack = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(innerRef);

  const breakpoint = useBreakpoint();

  return (
    <section
      ref={ref}
      id="stack"
      className="h-[110vh] w-full flex relative top-clip"
    >
      <div
        className={clsx(
          "h-full w-full glass-panel p-16 flex gap-8 flex-col lg:flex-row pb-[20vh]"
        )}
      >
        <div className="card w-full shadow-xl bg-base-100 h-[50%] lg:h-full">
          <div className="card-body">Hello world</div>
        </div>
        <div ref={innerRef} className="w-full h-full">
          <AnimatePresence>
            {isInView && (
              <motion.ul
                layout
                variants={{
                  hidden: { opacity: 1, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delayChildren: 0.6,
                      staggerChildren: 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                className={clsx(
                  "relative h-full w-full grid grid-cols-2 grid-rows-2 gap-8 align-center justify-center lg:grid-cols-3 lg:grid-rows-3"
                )}
              >
                {logos
                  .filter((logo) => logo.min <= breakpoint)
                  .map((logo, index) => (
                    <StackPanel key={index} {...logo} />
                  ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});
