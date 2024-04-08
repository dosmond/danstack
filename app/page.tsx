"use client";
import { Hello } from "@/components/Hello";
import { AboutMe } from "@/components/about/AboutMe";
import { TechStack } from "@/components/techstack/Stack";
import { useRef } from "react";

export default function Home() {
  const stackRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hello stackRef={stackRef} />
      <TechStack ref={stackRef} />
      <AboutMe />
    </main>
  );
}
