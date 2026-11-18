"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const titleReveal = {
    hidden: { opacity: 0, y: "112%" },
    visible: { opacity: 1, y: "0%" },
  };
  const enter = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: "easeOut" as const },
        };

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-section page-shell relative grid min-h-[calc(100svh-6rem)] items-center gap-12 pb-16 pt-12 sm:gap-14 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-12"
    >
      <div className="relative z-10 max-w-2xl">
        <m.div {...enter(0.05)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/15 bg-indigo-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-indigo-100/90 sm:text-[13px]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-blue-300" />
            </span>
            WEB DEVELOPER <span className="text-indigo-300/60">·</span> AI ENTHUSIAST
          </span>
        </m.div>

        <m.h1
          id="hero-title"
          aria-label="Building what's next."
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          transition={{
            staggerChildren: shouldReduceMotion ? 0 : 0.14,
            delayChildren: shouldReduceMotion ? 0 : 0.16,
          }}
          className="mt-7 text-[clamp(3.15rem,8vw,6.65rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-white"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <m.span variants={titleReveal} className="block">
              Building
            </m.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <m.span variants={titleReveal} className="gradient-text block">
              what&apos;s next.
            </m.span>
          </span>
        </m.h1>

        <m.p
          {...enter(0.25)}
          className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
        >
          I&apos;m Gagan Pandey — a web developer and AI enthusiast turning ambitious ideas into
          thoughtful, high-performing digital experiences.
        </m.p>

        <m.div {...enter(0.35)} className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
          <a
            href="#projects"
            className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 text-sm font-semibold text-white shadow-[0_8px_35px_rgba(93,92,255,0.28)] transition-[filter,transform,box-shadow] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_42px_rgba(93,92,255,0.38)] active:translate-y-0 active:scale-[0.98]"
          >
            Explore my work
            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#about"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-6 text-sm font-medium text-slate-200 transition-[background-color,border-color,transform] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] active:translate-y-0"
          >
            More about me
            <ArrowDown aria-hidden="true" size={16} />
          </a>
        </m.div>

        <m.div
          {...enter(0.45)}
          className="mt-12 flex items-center gap-3 text-sm text-slate-500"
        >
          <span aria-hidden="true" className="h-px w-9 bg-gradient-to-r from-blue-400/70 to-violet-400/70" />
          Available for select projects
        </m.div>
      </div>

      <m.div
        {...enter(0.25)}
        className="relative mx-auto w-full max-w-[31rem] lg:ml-auto lg:mr-0"
        aria-label="Abstract illustration of a modern digital workspace"
        role="img"
      >
        <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-transparent blur-3xl" />
        <div className="hero-float absolute -right-4 -top-8 size-36 rounded-full border border-indigo-300/[0.08] sm:-right-8 sm:-top-12 sm:size-52" />
        <div className="absolute -right-1 -top-5 size-28 rounded-full border border-blue-300/[0.08] sm:-right-2 sm:-top-6 sm:size-40" />

        <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-5 sm:p-7">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.08] via-transparent to-violet-400/[0.08]" />
          <div className="relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-blue-300/15 bg-blue-400/[0.09] text-blue-200">
                  <Code2 aria-hidden="true" size={19} />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-100">Digital experiences</p>
                  <p className="mt-1 text-xs text-slate-500">Thoughtfully engineered</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-200/80">
                In progress
              </span>
            </div>

            <div className="relative mt-5 flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#080b15]/70 px-4 py-8 sm:min-h-72">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(97,100,255,0.16),transparent_58%)]" />
              <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent" />
              <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-indigo-300/15 to-transparent" />
              <div className="absolute size-44 rounded-full border border-indigo-300/10 sm:size-52" />
              <div className="absolute size-32 rounded-full border border-blue-200/[0.12] sm:size-40" />
              <m.div
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute size-52 rounded-full border border-dashed border-violet-200/[0.18] sm:size-64"
              />
              <div className="relative grid size-24 place-items-center rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-blue-400/20 to-violet-400/20 shadow-[0_0_70px_rgba(111,108,255,0.22)] backdrop-blur-xl sm:size-28">
                <div className="absolute inset-2 rounded-[1.25rem] border border-white/[0.08]" />
                <Sparkles aria-hidden="true" className="text-indigo-100" size={34} strokeWidth={1.4} />
              </div>
              <span className="absolute left-[13%] top-[25%] size-2 rounded-full bg-blue-200 shadow-[0_0_18px_4px_rgba(125,170,255,0.35)]" />
              <span className="absolute bottom-[22%] right-[16%] size-1.5 rounded-full bg-violet-200 shadow-[0_0_16px_4px_rgba(186,142,255,0.4)]" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Focus</p>
                <p className="mt-2 text-sm font-medium text-slate-200">Web development</p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Exploring</p>
                <p className="mt-2 text-sm font-medium text-slate-200">Applied AI</p>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="absolute -bottom-5 -left-4 -z-10 h-24 w-32 rounded-full bg-blue-500/10 blur-3xl sm:-left-10" />
      </m.div>
    </section>
  );
}
