"use client";
import { Hello } from "@/components/Hello";
import { TechStack } from "@/components/Stack";
import useHash from "@/hooks/useHash";
import { useEffect, useRef } from "react";

export default function Home() {
  const stackRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hello stackRef={stackRef} />
      <TechStack ref={stackRef} />
    </main>
  );
}
