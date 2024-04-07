"use client";

import React, { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const TechStack = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section ref={ref} id="stack" className="h-[100vh] w-full flex relative">
      <div className="h-full w-full glass-panel"></div>
    </section>
  );
});
