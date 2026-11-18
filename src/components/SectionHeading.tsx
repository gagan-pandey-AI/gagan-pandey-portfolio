"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const centered = align === "center";

  return (
    <m.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:text-[13px]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
        {description}
      </p>
    </m.div>
  );
}
