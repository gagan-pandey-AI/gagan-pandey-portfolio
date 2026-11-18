import { Github, Linkedin, Mail } from "lucide-react";

const emailAddress = "mastimotionanime@gmail.com";
const linkedinUrl = "https://linkedin.com/in/gagan-pandey-420b213b1";
const githubUrl = "https://github.com/gagan-pandey-AI";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="page-shell py-8 sm:py-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="focus-ring inline-flex w-fit items-center gap-3 rounded-lg">
            <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-xs font-semibold tracking-tight text-white">
              GP
            </span>
            <span>
              <span className="block text-sm font-medium text-white">Gagan Pandey</span>
              <span className="mt-0.5 block text-xs text-slate-500">Web Developer &amp; AI Enthusiast</span>
            </span>
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="focus-ring rounded text-xs text-slate-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${emailAddress}`}
              aria-label="Email Gagan Pandey"
              className="focus-ring grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-colors hover:border-white/15 hover:text-white"
            >
              <Mail aria-hidden="true" size={15} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Gagan Pandey on LinkedIn"
              className="focus-ring grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-colors hover:border-white/15 hover:text-white"
            >
              <Linkedin aria-hidden="true" size={15} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Gagan Pandey on GitHub"
              className="focus-ring grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-colors hover:border-white/15 hover:text-white"
            >
              <Github aria-hidden="true" size={15} />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.06] pt-5 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gagan Pandey. Built with care.</p>
          <p>Made for thoughtful ideas and useful digital experiences.</p>
        </div>
      </div>
    </footer>
  );
}
