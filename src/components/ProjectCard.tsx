"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, Github } from "lucide-react";
import type { Project } from "@/data/projects";

function ProjectPreview({ project }: { project: Project }) {
  if (project.preview === "sanvera") {
    return (
      <div
        role="img"
        aria-label="CSS-generated concept preview of the Sanvera AI video creation studio, not a product screenshot"
        className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#090b17] p-5 sm:min-h-[19rem] sm:p-7"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_48%,rgba(98,92,255,0.22),transparent_58%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 sm:left-6 sm:top-6">
          <span className="size-1.5 rounded-full bg-blue-300/80" />
          <span className="size-1.5 rounded-full bg-violet-300/70" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="ml-2 text-[10px] tracking-wide text-slate-500">STUDIO CONCEPT</span>
        </div>
        <div aria-hidden="true" className="absolute size-44 rounded-full border border-blue-200/10 sm:size-56" />
        <div aria-hidden="true" className="absolute size-32 rounded-full border border-violet-200/15 sm:size-40" />
        <div
          aria-hidden="true"
          className="relative grid aspect-video w-[min(74%,22rem)] place-items-center overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-violet-500/25 shadow-[0_20px_70px_rgba(70,80,200,0.2)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_90%,rgba(161,111,255,0.48),transparent_44%),radial-gradient(ellipse_at_30%_25%,rgba(99,165,255,0.35),transparent_40%)]" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#101128]/85 to-transparent" />
          <div className="relative grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/[0.08] text-white/90 backdrop-blur-md">
            <ArrowDownRight aria-hidden="true" size={25} strokeWidth={1.4} />
          </div>
          <span className="absolute bottom-3 left-3 text-[10px] text-white/75">A new world, from a prompt</span>
        </div>
        <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-slate-400 backdrop-blur">
          Visual concept
        </span>
      </div>
    );
  }

  if (project.preview === "upi-shield") {
    return (
      <div
        role="img"
        aria-label="CSS-generated concept preview of the UPI Shield AI security dashboard, not a product screenshot"
        className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#090d17] p-5 sm:min-h-[19rem] sm:p-7"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(48,180,164,0.14),transparent_58%)]" />
        <div aria-hidden="true" className="absolute -left-10 bottom-0 size-48 rounded-full bg-blue-500/[0.08] blur-3xl" />
        <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#0d121d]/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg border border-emerald-200/15 bg-emerald-300/[0.08] text-emerald-200">
                <span aria-hidden="true" className="text-sm">⌑</span>
              </span>
              <span className="text-xs font-medium text-slate-200">Message check</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.14em] text-slate-500">SECURITY CONCEPT</span>
          </div>
          <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
            <p className="text-[10px] uppercase tracking-[0.13em] text-slate-500">Analysis inputs</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Message", "Link", "OCR scan"].map((item) => (
                <span key={item} className="rounded-lg border border-emerald-200/10 bg-emerald-200/[0.05] px-2.5 py-1.5 text-[10px] text-emerald-100/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-emerald-200/10 bg-emerald-200/[0.045] p-3.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-200/[0.08] text-emerald-200">
              <Check aria-hidden="true" size={17} />
            </span>
            <div>
              <p className="text-xs font-medium text-slate-200">Review before you act</p>
              <p className="mt-1 text-[10px] text-slate-500">A considered approach to safer payments</p>
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="absolute right-[9%] top-[13%] size-2 rounded-full bg-emerald-200 shadow-[0_0_16px_4px_rgba(105,235,201,0.25)]" />
        <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-slate-400 backdrop-blur">
          Visual concept
        </span>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="CSS-generated concept preview of the Call Break Arena multiplayer card table, not a product screenshot"
      className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#0b0b17] p-5 sm:min-h-[19rem] sm:p-7"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(115,82,199,0.18),transparent_62%)]" />
      <div className="relative flex aspect-[1.75] w-[min(88%,27rem)] items-center justify-center overflow-hidden rounded-[45%] border border-violet-200/15 bg-gradient-to-br from-[#17142b] via-[#111729] to-[#0d1720] shadow-[inset_0_0_60px_rgba(110,90,220,0.13),0_18px_60px_rgba(0,0,0,0.35)]">
        <div aria-hidden="true" className="absolute inset-[8%] rounded-[45%] border border-white/[0.06]" />
        <div className="absolute left-1/2 top-[11%] -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-slate-500">TABLE CONCEPT</div>
        <div className="relative flex -space-x-3 sm:-space-x-4">
          {[
            { symbol: "♠", color: "text-slate-800", tilt: "-rotate-12", offset: "mt-3" },
            { symbol: "K", color: "text-slate-800", tilt: "-rotate-6", offset: "mt-1" },
            { symbol: "♥", color: "text-rose-600", tilt: "rotate-0", offset: "-mt-1" },
            { symbol: "A", color: "text-slate-800", tilt: "rotate-6", offset: "mt-1" },
            { symbol: "♣", color: "text-slate-800", tilt: "rotate-12", offset: "mt-3" },
          ].map((card, index) => (
            <div
              key={`${card.symbol}-${index}`}
              aria-hidden="true"
              className={`grid h-20 w-14 place-items-center rounded-lg border border-slate-300/70 bg-gradient-to-br from-white to-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:h-24 sm:w-[4.25rem] ${card.tilt} ${card.offset}`}
            >
              <span className={`text-xl font-semibold ${card.color}`}>{card.symbol}</span>
            </div>
          ))}
        </div>
        <span aria-hidden="true" className="absolute bottom-[13%] left-[12%] size-1.5 rounded-full bg-violet-200 shadow-[0_0_14px_4px_rgba(178,133,255,0.3)]" />
        <span aria-hidden="true" className="absolute bottom-[16%] right-[14%] size-1.5 rounded-full bg-blue-200 shadow-[0_0_14px_4px_rgba(125,170,255,0.3)]" />
      </div>
      <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-slate-400 backdrop-blur">
        Visual concept
      </span>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : (index % 2) * 0.09, ease: "easeOut" }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -5, rotateX: 1.1, rotateY: index % 2 === 0 ? -0.45 : 0.45 }
      }
      style={{ transformPerspective: 1200 }}
      className="group relative h-full rounded-[1.6rem] p-px"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-blue-300/30 via-white/[0.06] to-violet-300/30 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-[calc(1.6rem-1px)] p-3.5 transition-[box-shadow,background-color] duration-300 group-hover:bg-white/[0.045] group-hover:shadow-[0_30px_90px_rgba(36,43,112,0.26)] sm:p-5">
        <ProjectPreview project={project} />

        <div className="flex flex-1 flex-col px-1 pb-1 pt-5 sm:px-2 sm:pt-6">
          <ul className="flex flex-wrap gap-2" aria-label={`${project.name} categories`}>
            {project.categories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-indigo-200/10 bg-indigo-200/[0.045] px-2.5 py-1 text-[10px] font-medium tracking-wide text-indigo-100/80"
              >
                {category}
              </li>
            ))}
          </ul>

          <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2" aria-label={`${project.name} features`}>
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-400">
                <Check aria-hidden="true" size={14} className="mt-0.5 shrink-0 text-indigo-300" />
                {feature}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[10px] text-slate-400"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-4">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} live project`}
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 text-xs font-semibold text-white transition-[filter,transform,box-shadow] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(93,92,255,0.25)] active:translate-y-0 active:scale-[0.98]"
              >
                View Project
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-xs font-medium text-slate-400">
                View Project
                <span className="text-slate-600">·</span>
                Coming Soon
              </span>
            )}

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 text-xs font-medium text-slate-300 transition-[border-color,background-color,color,transform] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white active:translate-y-0"
              >
                <Github aria-hidden="true" size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </m.article>
  );
}
