"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
];

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const sections = [...links.map(({ href }) => href), "#contact"]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    let updateTimer: number | undefined;
    const updateScrollState = () => {
      setIsScrolled((current) => {
        const next = window.scrollY > 12;
        return current === next ? current : next;
      });

      const marker = window.innerHeight * 0.3;
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });
      const nextSection = currentSection ? `#${currentSection.id}` : "";
      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };
    const scheduleUpdate = () => {
      if (updateTimer !== undefined) return;
      updateTimer = window.setTimeout(() => {
        updateTimer = undefined;
        updateScrollState();
      }, 60);
    };

    updateScrollState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    document.addEventListener("scroll", scheduleUpdate, { passive: true, capture: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      document.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("resize", scheduleUpdate);
      if (updateTimer !== undefined) window.clearTimeout(updateTimer);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="page-shell sticky top-0 z-50 py-3 sm:py-4">
      <nav
        aria-label="Main navigation"
        className={`flex min-h-16 items-center justify-between rounded-2xl border px-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:px-5 ${
          isScrolled
            ? "border-white/15 bg-[#0b0d17]/90 shadow-[0_14px_45px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            : "glass-panel"
        }`}
      >
        <a
          href="#home"
          className="focus-ring flex items-center gap-3 rounded-lg"
          aria-label="Gagan Pandey home"
          onClick={closeMenu}
        >
          <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sm font-semibold tracking-tight text-white">
            GP
          </span>
          <span className="text-sm font-medium tracking-[-0.02em] text-white sm:text-[15px]">
            Gagan Pandey
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href ? "location" : undefined}
              className="nav-link focus-ring rounded px-1 text-[13px] text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          aria-current={activeSection === "#contact" ? "location" : undefined}
          className={`focus-ring hidden items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium text-white transition-[border-color,background-color] md:inline-flex ${
            activeSection === "#contact"
              ? "border-indigo-200/25 bg-indigo-200/[0.09]"
              : "border-white/15 bg-white/[0.06] hover:border-white/30 hover:bg-white/10"
          }`}
        >
          Let&apos;s talk
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>

        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-xl text-slate-200 transition-colors hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
            className="glass-panel absolute inset-x-0 top-[calc(100%+0.625rem)] rounded-2xl p-3 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeSection === link.href ? "location" : undefined}
                  onClick={closeMenu}
                  className={`focus-ring flex min-h-12 items-center justify-between rounded-xl px-4 text-sm transition-colors hover:bg-white/[0.06] hover:text-white ${
                    activeSection === link.href ? "bg-indigo-200/[0.06] text-white" : "text-slate-300"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-indigo-200" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                aria-current={activeSection === "#contact" ? "location" : undefined}
                onClick={closeMenu}
                className={`focus-ring mt-1 flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-medium text-white transition-colors ${
                  activeSection === "#contact"
                    ? "bg-indigo-200/[0.1]"
                    : "bg-white/[0.07] hover:bg-white/[0.1]"
                }`}
              >
                Let&apos;s talk
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
