"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative scroll-mt-8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 top-1/4 size-[30rem] rounded-full bg-blue-500/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-12 size-[30rem] rounded-full bg-violet-500/[0.07] blur-[120px]"
      />

      <div className="page-shell relative">
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          align="center"
          title={
            <>
              Featured <span className="gradient-text">Projects</span>
            </>
          }
          description="Turning ideas into intelligent digital experiences."
        />

        <div className="mt-12 grid items-stretch gap-5 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={
                index === 0
                  ? "lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-8 lg:col-start-3"
              }
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-panel relative mt-14 overflow-hidden rounded-[1.75rem] px-6 py-9 text-center sm:mt-20 sm:px-10 sm:py-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(90,112,255,0.15),transparent_60%)]"
          />
          <div className="relative">
            <span className="mx-auto grid size-10 place-items-center rounded-xl border border-indigo-200/10 bg-indigo-200/[0.07] text-indigo-100">
              <Sparkles aria-hidden="true" size={18} />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">
              Have an idea? Let&apos;s build something amazing together.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              From a useful web experience to a thoughtful AI feature, let&apos;s explore what we can create.
            </p>
            <a
              href="#contact"
              className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 text-sm font-semibold text-white shadow-[0_8px_35px_rgba(93,92,255,0.22)] transition-[filter,transform] hover:scale-[1.02] hover:brightness-110"
            >
              Let&apos;s Work Together
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
