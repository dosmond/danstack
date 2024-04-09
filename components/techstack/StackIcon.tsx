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
    <motion.div layout>
      <div
        className={clsx(
          "w-32 h-32 lg:h-128 lg:w-128 rounded-md shadow-xl relative",
          backdrop && "bg-base-100"
        )}
      >
        <Image
          className={clsx("rounded object-contain", backdrop && "p-[8px]")}
          src={src}
          fill
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  );
};
