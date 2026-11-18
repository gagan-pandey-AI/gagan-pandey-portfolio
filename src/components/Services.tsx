"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" aria-labelledby="services-title" className="relative scroll-mt-8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 size-[28rem] rounded-full bg-violet-500/[0.06] blur-[110px]"
      />
      <div className="page-shell relative">
        <SectionHeading
          id="services-title"
          eyebrow="What I can help with"
          align="center"
          title={
            <>
              Ideas into <span className="gradient-text">experiences</span>
            </>
          }
          description="From a first landing page to a smarter application, I can help shape and build a digital experience around your needs."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, technologies }, index) => (
            <m.article
              key={title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : (index % 3) * 0.07, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              className="glass-panel group relative flex min-h-56 flex-col overflow-hidden rounded-2xl p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-indigo-200/20 hover:bg-white/[0.055] hover:shadow-[0_22px_55px_rgba(54,63,145,0.16)] sm:p-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 size-36 rounded-full bg-indigo-400/[0.06] blur-2xl transition-colors duration-300 group-hover:bg-violet-400/[0.12]"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-blue-200/10 bg-gradient-to-br from-blue-300/[0.1] to-violet-300/[0.1] text-indigo-100 transition-[border-color,transform] duration-300 group-hover:-rotate-3 group-hover:border-indigo-200/20">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="mt-1 text-slate-600 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-200"
                />
              </div>

              <h3 className="relative mt-5 text-base font-medium tracking-tight text-white">{title}</h3>
              <p className="relative mt-2 text-sm leading-6 text-slate-400">{description}</p>
              <ul className="relative mt-auto flex flex-wrap gap-2 pt-5" aria-label={`${title} technologies`}>
                {technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[10px] tracking-wide text-slate-400"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
