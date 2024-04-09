import clsx from "clsx";
import { Just_Another_Hand } from "next/font/google";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const handFont = Just_Another_Hand({ weight: "400", subsets: ["latin"] });

export const ThrowMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={clsx(
              handFont.className,
              "absolute w-[120px] right-0 bottom-[10%] lg:top-[10%]"
            )}
          >
            <Image
              src="/curved-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="absolute left-[-30px] scale-x-[-1] rotate-90 lg:scale-y-[1] lg:scale-x-[1] lg:left-[-30px] lg:top-[15px]"
            />
            <h1 className="font-2xl tracking-wider text-3xl absolute">
              Throw me!
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
