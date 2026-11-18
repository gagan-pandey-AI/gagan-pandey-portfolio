"use client";

import { m, useReducedMotion } from "framer-motion";
import { ClipboardList, Compass, PackageCheck, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const steps: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your requirements, goals, and expectations.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the project structure, technology stack, and development approach.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Develop",
    description: "Build a responsive, modern, and functional solution.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Deliver",
    description: "Test the final product, fix issues, and deliver the completed project.",
    icon: PackageCheck,
  },
];

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" aria-labelledby="process-title" className="relative scroll-mt-8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[26rem] rounded-full bg-blue-500/[0.06] blur-[110px]"
      />
      <div className="page-shell relative">
        <SectionHeading
          id="process-title"
          eyebrow="My working process"
          align="center"
          title={
            <>
              How I Bring <span className="gradient-text">Ideas to Life</span>
            </>
          }
          description="A simple and transparent process to turn your ideas into reality."
        />

        <div className="relative mt-12 md:mt-16">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[17px] top-4 w-px bg-white/[0.08] md:hidden"
          />
          <m.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute bottom-8 left-[17px] top-4 w-px origin-top bg-gradient-to-b from-blue-400/70 via-indigo-300/50 to-violet-400/70 md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[17px] hidden h-px bg-white/[0.08] md:block"
          />
          <m.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-[12.5%] right-[12.5%] top-[17px] hidden h-px origin-left bg-gradient-to-r from-blue-400/70 via-indigo-300/50 to-violet-400/70 md:block"
          />

          <ol className="relative grid gap-7 md:grid-cols-4 md:gap-3">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <m.li
                key={number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                className="relative pl-12 md:px-3 md:pl-3 md:pt-12"
              >
                <span className="absolute left-0 top-0 z-10 grid size-[35px] place-items-center rounded-full border border-indigo-200/20 bg-[#0b0d17] text-[10px] font-semibold tracking-wide text-indigo-100 shadow-[0_0_24px_rgba(115,120,255,0.12)] md:left-1/2 md:top-0 md:-translate-x-1/2">
                  {number}
                </span>
                <m.article
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="glass-panel min-h-44 rounded-2xl p-5 transition-[border-color,background-color] duration-300 hover:border-indigo-200/20 hover:bg-white/[0.05] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl border border-blue-200/10 bg-gradient-to-br from-blue-300/[0.09] to-violet-300/[0.09] text-indigo-100">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                      Step {number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold uppercase tracking-[0.08em] text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </m.article>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
