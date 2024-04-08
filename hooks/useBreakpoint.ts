import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [breakPoint, setBreakPoint] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setBreakPoint(
        window.innerWidth <= 640
          ? 0
          : window.innerWidth <= 768
          ? 1
          : window.innerWidth <= 1024
          ? 2
          : 3
      );
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return breakPoint;
};
