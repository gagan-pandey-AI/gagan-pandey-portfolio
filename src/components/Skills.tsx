"use client";

import { m, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative scroll-mt-8 py-24 sm:py-32">
      <div className="page-shell">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills & technologies"
          align="center"
          title={
            <>
              The tools behind <span className="gradient-text">the ideas</span>
            </>
          }
          description="A growing toolkit across frontend, backend, AI, and data. I keep learning by putting these technologies to work."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {skillGroups.map(({ name, description, icon: Icon, skills }, index) => (
            <m.article
              key={name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              className="glass-panel group rounded-2xl p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-indigo-200/20 hover:bg-white/[0.055] hover:shadow-[0_22px_55px_rgba(54,63,145,0.16)] sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-indigo-200/10 bg-indigo-200/[0.07] text-indigo-100 transition-[border-color,background-color,transform] duration-300 group-hover:scale-105 group-hover:border-indigo-200/20 group-hover:bg-indigo-200/[0.12]">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                </span>
                <h3 className="text-base font-medium tracking-tight text-white">{name}</h3>
              </div>
              <p className="mt-4 min-h-10 text-xs leading-5 text-slate-500">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${name} technologies`}>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-slate-300 transition-[border-color,background-color,color] duration-200 group-hover:border-white/[0.1] group-hover:bg-white/[0.045] group-hover:text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-slate-600">
          Technologies shown reflect areas I work with and continue to explore.
        </p>
      </div>
    </section>
  );
}
