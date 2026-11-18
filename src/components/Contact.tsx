"use client";

import { useState, type FormEvent } from "react";
import { m, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const emailAddress = "mastimotionanime@gmail.com";
const linkedinUrl = "https://linkedin.com/in/gagan-pandey-420b213b1";
const githubUrl = "https://github.com/gagan-pandey-AI";

type FormStatus = {
  type: "info" | "error";
  message: string;
} | null;

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [isPreparing, setIsPreparing] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isPreparing) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const projectBudget = String(formData.get("projectBudget") ?? "").trim();
    const projectDescription = String(formData.get("projectDescription") ?? "").trim();

    const subject = `Project inquiry: ${projectType}`;
    const body = [
      `Name: ${fullName}`,
      `Email: ${senderEmail}`,
      `Project type: ${projectType}`,
      `Project budget: ${projectBudget || "Not specified"}`,
      "",
      "Project description:",
      projectDescription,
    ].join("\n");
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(null);
    setIsPreparing(true);
    window.setTimeout(() => {
      try {
        window.location.href = mailtoUrl;
        setStatus({
          type: "info",
          message:
            "Your email app should open with a prefilled draft. Review and send it there; this website does not send or store your message.",
        });
      } catch {
        setStatus({
          type: "error",
          message: `Could not open an email draft. Please email ${emailAddress} directly instead.`,
        });
      } finally {
        setIsPreparing(false);
      }
    }, 250);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-8 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 size-[28rem] rounded-full bg-violet-500/[0.07] blur-[115px]"
      />
      <div className="page-shell relative">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact me"
          align="center"
          title={
            <>
              Let&apos;s Build <span className="gradient-text">Something Amazing</span>
            </>
          }
          description="Have a project in mind? Let's discuss how I can help bring it to life."
        />

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <div className="glass-panel relative overflow-hidden rounded-[1.6rem] p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 size-48 rounded-full bg-indigo-400/[0.09] blur-3xl"
              />
              <div className="relative">
                <span className="grid size-11 place-items-center rounded-xl border border-indigo-200/10 bg-indigo-200/[0.07] text-indigo-100">
                  <BriefcaseBusiness aria-hidden="true" size={20} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">Gagan Pandey</h3>
                <p className="mt-1 text-sm text-slate-400">Web Developer &amp; AI Enthusiast</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded text-sm text-indigo-200 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" size={16} />
                  {emailAddress}
                  <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-[1.6rem] p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.17em] text-slate-500">
                Find me around the web
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group flex min-h-12 items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 text-sm text-slate-300 transition-[border-color,background-color,color] hover:border-white/15 hover:bg-white/[0.055] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin aria-hidden="true" size={17} className="text-indigo-200" />
                    LinkedIn
                  </span>
                  <ArrowUpRight aria-hidden="true" size={15} className="text-slate-600 transition-colors group-hover:text-indigo-200" />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group flex min-h-12 items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 text-sm text-slate-300 transition-[border-color,background-color,color] hover:border-white/15 hover:bg-white/[0.055] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Github aria-hidden="true" size={17} className="text-indigo-200" />
                    GitHub
                  </span>
                  <ArrowUpRight aria-hidden="true" size={15} className="text-slate-600 transition-colors group-hover:text-indigo-200" />
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-[1.6rem] border-indigo-200/10 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-violet-200/10 bg-violet-200/[0.07] text-violet-100">
                  <BriefcaseBusiness aria-hidden="true" size={17} />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-white">Fiverr</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    My profile link hasn&apos;t been provided yet. Reach out by email for now.
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled
                aria-describedby="fiverr-unavailable"
                className="mt-4 inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-indigo-200/15 bg-indigo-200/[0.06] px-4 text-sm font-medium text-indigo-100/70 disabled:opacity-80"
              >
                Hire Me on Fiverr
                <ArrowUpRight aria-hidden="true" size={15} />
              </button>
              <p id="fiverr-unavailable" className="mt-2 text-center text-[11px] text-slate-500">
                Unavailable until a verified profile URL is added.
              </p>
            </div>
          </m.div>

          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-panel rounded-[1.6rem] p-5 sm:p-7"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold tracking-tight text-white">Tell me about your project</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Share a few details to prepare an email draft. Nothing is sent from or stored on this website.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-slate-300">
                    Full Name <span aria-hidden="true" className="text-indigo-300">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Your name"
                    className="contact-field focus-ring min-h-12 w-full rounded-xl border border-white/10 bg-[#080a13]/70 px-3.5 text-sm text-white placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-slate-300">
                    Email Address <span aria-hidden="true" className="text-indigo-300">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="contact-field focus-ring min-h-12 w-full rounded-xl border border-white/10 bg-[#080a13]/70 px-3.5 text-sm text-white placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-type" className="mb-2 block text-xs font-medium text-slate-300">
                    Project Type <span aria-hidden="true" className="text-indigo-300">*</span>
                  </label>
                  <select
                    id="contact-type"
                    name="projectType"
                    required
                    defaultValue=""
                    className="contact-field focus-ring min-h-12 w-full rounded-xl border border-white/10 bg-[#080a13]/90 px-3.5 text-sm text-slate-200"
                  >
                    <option value="" disabled>Select a project type</option>
                    <option value="Website development">Website development</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Website redesign">Website redesign</option>
                    <option value="Portfolio website">Portfolio website</option>
                    <option value="Python development">Python development</option>
                    <option value="AI integration">AI integration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-budget" className="mb-2 block text-xs font-medium text-slate-300">
                    Project Budget <span className="text-slate-500">(optional)</span>
                  </label>
                  <select
                    id="contact-budget"
                    name="projectBudget"
                    defaultValue=""
                    className="contact-field focus-ring min-h-12 w-full rounded-xl border border-white/10 bg-[#080a13]/90 px-3.5 text-sm text-slate-200"
                  >
                    <option value="">Prefer not to say</option>
                    <option value="Under $250">Under $250</option>
                    <option value="$250–$500">$250–$500</option>
                    <option value="$500–$1,000">$500–$1,000</option>
                    <option value="$1,000+">$1,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-description" className="mb-2 block text-xs font-medium text-slate-300">
                  Project Description <span aria-hidden="true" className="text-indigo-300">*</span>
                </label>
                <textarea
                  id="contact-description"
                  name="projectDescription"
                  required
                  minLength={20}
                  maxLength={3000}
                  rows={5}
                  placeholder="What are you looking to build?"
                  className="contact-field focus-ring w-full resize-y rounded-xl border border-white/10 bg-[#080a13]/70 px-3.5 py-3 text-sm leading-6 text-white placeholder:text-slate-600"
                />
                <p className="mt-1.5 text-[11px] text-slate-600">Please include at least 20 characters.</p>
              </div>

              <div className="flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <ShieldCheck aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-indigo-200/80" />
                <p className="text-xs leading-5 text-slate-500">
                  Your details stay in this browser form and are placed into an email draft only when you choose to continue.
                </p>
              </div>

              <button
                type="submit"
                disabled={isPreparing}
                className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 text-sm font-semibold text-white shadow-[0_8px_35px_rgba(93,92,255,0.2)] transition-[filter,opacity,transform,box-shadow] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_42px_rgba(93,92,255,0.3)] active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
              >
                {isPreparing ? (
                  <>
                    <LoaderCircle
                      aria-hidden="true"
                      size={16}
                      className={shouldReduceMotion ? undefined : "animate-spin"}
                    />
                    Preparing email…
                  </>
                ) : (
                  <>
                    Prepare Email
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </>
                )}
              </button>

              <p
                role={status?.type === "error" ? "alert" : "status"}
                aria-live={status?.type === "error" ? "assertive" : "polite"}
                className={
                  status
                    ? status.type === "error"
                      ? "text-sm leading-6 text-rose-300"
                      : "text-sm leading-6 text-indigo-200"
                    : "sr-only"
                }
              >
                {status?.message ?? "No email draft has been prepared."}
              </p>
            </form>

            <p className="mt-4 text-center text-xs text-slate-500">
              No email app?{" "}
              <a
                href={`mailto:${emailAddress}`}
                className="focus-ring rounded text-indigo-200 underline decoration-indigo-200/30 underline-offset-4 hover:text-white"
              >
                Email me directly
              </a>
              .
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
