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
    <motion.div layout className="avatar">
      <div
        className={clsx(
          "w-24 h-24 rounded-md shadow-xl",
          backdrop && "bg-base-100 m-[-8px]"
        )}
      >
        <Image
          className="rounded"
          src={src}
          layout="fill"
          objectFit="contain"
          alt={alt}
        />
      </div>
    </motion.div>
  );
};
