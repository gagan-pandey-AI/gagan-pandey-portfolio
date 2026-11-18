"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, GraduationCap, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const interests = ["Web Development", "Artificial Intelligence", "Data Science"];
const technologies = ["React", "TypeScript", "Python", "AI"];

const highlights = [
  {
    icon: GraduationCap,
    title: "Currently studying",
    detail: "BCA Artificial Intelligence",
  },
  {
    icon: Code2,
    title: "Learning by building",
    detail: "Academic and independent projects",
  },
  {
    icon: Sparkles,
    title: "How I work",
    detail: "Clean code, usability, continuous learning",
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-title" className="relative scroll-mt-8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 size-[26rem] rounded-full bg-blue-500/[0.07] blur-[110px]"
      />
      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading
            id="about-title"
            eyebrow="A little about me"
            title={
              <>
                A Little <span className="gradient-text">About Me</span>
              </>
            }
            description="I'm Gagan Pandey, a developer and AI enthusiast passionate about building modern digital experiences and intelligent applications. I enjoy transforming ideas into functional, user-friendly solutions using modern technologies."
          />

          <m.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.08 },
              },
            }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {highlights.map(({ icon: Icon, title, detail }) => (
              <m.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
              >
                <Icon aria-hidden="true" size={18} className="text-indigo-200" strokeWidth={1.7} />
                <p className="mt-4 text-xs font-medium text-slate-300">{title}</p>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">{detail}</p>
              </m.div>
            ))}
          </m.div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Curious about
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Areas of interest">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-indigo-200/10 bg-indigo-200/[0.045] px-3 py-1.5 text-xs text-indigo-100/80"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 blur-2xl"
          />
          <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-5 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(121,108,255,0.12),transparent_52%)]" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">A curious mind</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-white">Always in progress.</h3>
                </div>
                <span className="grid size-11 place-items-center rounded-2xl border border-violet-200/10 bg-violet-200/[0.07] text-violet-100">
                  <BrainCircuit aria-hidden="true" size={21} strokeWidth={1.6} />
                </span>
              </div>

              <div
                role="img"
                aria-label="Abstract illustration representing web development and artificial intelligence"
                className="relative mt-6 flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090b15]/70"
              >
                <div aria-hidden="true" className="absolute size-48 rounded-full border border-blue-200/[0.09] sm:size-56" />
                <div aria-hidden="true" className="absolute size-36 rounded-full border border-violet-200/[0.12] sm:size-44" />
                <div aria-hidden="true" className="absolute h-px w-[80%] bg-gradient-to-r from-transparent via-indigo-200/20 to-transparent" />
                <div aria-hidden="true" className="absolute h-[75%] w-px bg-gradient-to-b from-transparent via-indigo-200/15 to-transparent" />
                <div className="relative grid size-24 place-items-center rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-blue-400/20 to-violet-400/20 shadow-[0_0_70px_rgba(111,108,255,0.2)] backdrop-blur-xl">
                  <span className="absolute inset-2 rounded-[1.2rem] border border-white/[0.08]" />
                  <span className="gradient-text text-2xl font-semibold tracking-[-0.07em]">GP</span>
                </div>
                <span aria-hidden="true" className="absolute left-[17%] top-[25%] size-2 rounded-full bg-blue-200 shadow-[0_0_18px_4px_rgba(125,170,255,0.35)]" />
                <span aria-hidden="true" className="absolute bottom-[22%] right-[17%] size-1.5 rounded-full bg-violet-200 shadow-[0_0_16px_4px_rgba(186,142,255,0.4)]" />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Sparkles aria-hidden="true" size={13} className="text-indigo-300" />
                  Learning through practice
                </span>
              </div>

              <a
                href="#skills"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded text-sm font-medium text-indigo-200 transition-colors hover:text-white"
              >
                Explore my toolkit
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
