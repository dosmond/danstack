"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { StackIcon } from "./StackIcon";

export const StackPanel = ({
  icon,
  alt,
  backdrop = false,
}: {
  icon: string;
  alt: string;
  backdrop?: boolean;
}) => {
  const [iconRef, iconAnimate] = useAnimate();

  useEffect(() => {
    if (iconRef?.current) {
      iconAnimate(
        iconRef.current,
        { y: 10 },
        {
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatType: "reverse",
          delay: 1.5 + Math.random() * 0.5,
        }
      );
    }
  }, [iconAnimate, iconRef]);

  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="h-full w-full flex items-center justify-center"
    >
      <motion.div layout ref={iconRef}>
        <StackIcon src={icon} alt={alt} backdrop={backdrop} />
      </motion.div>
    </motion.li>
  );
};
