import clsx from "clsx";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export const StackIcon = ({
  src,
  alt,
  backdrop,
  containerRef,
}: {
  src: string;
  alt: string;
  backdrop: boolean;
  containerRef: React.RefObject<HTMLUListElement>;
}) => {
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) {
      controls.start({ x: 0, y: 0 });
    }
  }, [controls, isInView, containerRef]);

  return (
    <motion.div
      layout
      className="cursor-pointer"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      drag
      dragConstraints={containerRef}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      dragElastic={0.1}
      animate={controls}
    >
      <motion.div
        className={clsx(
          "w-32 h-32 lg:h-128 lg:w-128 rounded-md shadow-xl relative cursor-grab",
          backdrop && "bg-base-100"
        )}
        whileTap={{ cursor: "grabbing" }}
      >
        <Image
          className={clsx(
            "rounded object-contain pointer-events-none",
            backdrop && "p-[8px]"
          )}
          src={src}
          fill
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
};
