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
          "h-full w-full glass-panel p-16 flex gap-8 pb-[20vh] flex-col lg:flex-row lg:items-center "
        )}
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-8">
          <div className="card w-full shadow-xl bg-base-100 min-h-[580px%]">
            <div className="card-body">
              <article className="prose lg:prose-xl text-slate-300">
                <h2 className="text-slate-300">My tech stack</h2>
                <p>
                  I didn&apos;t always think that I would spend so much time in
                  the front end world. I used to imagine myself as a purely
                  backend developer. I hadn&apos;t even touched the front end
                  until my first internship while in college using Angular.
                </p>
                <p>
                  Now I find myself enjoying working on every aspect of
                  development. From project init, diving into all the config
                  files for optimal build sizes, to system architecture and
                  CI/CD.
                </p>
                <p>
                  I love discovering new tools and new languages. My next
                  adventure is going to be diving into Rust.
                </p>
              </article>
            </div>
          </div>
          <div className="mockup-code bg-base-100 text-primary-content w-full">
            <pre data-prefix="$" className="text-slate-300">
              <code>C:/dev/life_and_universe: node ./answer.js</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Analyzing everything...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Answer: 42</code>
            </pre>
          </div>
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
                      delayChildren: 0.2,
                      staggerChildren: 0.1,
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
