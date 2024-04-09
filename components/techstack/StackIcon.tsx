import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

export const StackIcon = ({
  src,
  alt,
  backdrop,
}: {
  src: string;
  alt: string;
  backdrop: boolean;
}) => {
  return (
    <motion.div
      layout
      className="cursor-pointer"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      drag
      dragConstraints={{
        top: -125,
        right: 125,
        bottom: 125,
        left: -125,
      }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      dragElastic={0.1}
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
