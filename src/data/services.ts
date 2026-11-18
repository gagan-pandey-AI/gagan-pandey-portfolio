import {
  Bot,
  Code2,
  LayoutTemplate,
  PanelsTopLeft,
  RefreshCw,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
};

export const services: Service[] = [
  {
    title: "Website Development",
    description: "Modern, responsive, and user-friendly websites built around your goals.",
    icon: Code2,
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Landing Page Development",
    description: "Focused landing pages that make your offer clear and guide visitors to act.",
    icon: LayoutTemplate,
    technologies: ["Next.js", "TypeScript", "Responsive UI"],
  },
  {
    title: "Website Redesign",
    description: "A thoughtful refresh for existing websites, from visual polish to easier journeys.",
    icon: RefreshCw,
    technologies: ["UI/UX", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description: "A personal website that presents your work, skills, and story with clarity.",
    icon: UserRound,
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    title: "Python Development",
    description: "Purposeful Python applications and automation for everyday workflows.",
    icon: PanelsTopLeft,
    technologies: ["Python", "Flask", "FastAPI"],
  },
  {
    title: "AI Integration",
    description: "AI-powered features that bring useful, intelligent capabilities to applications.",
    icon: Bot,
    technologies: ["Python", "AI", "REST APIs"],
  },
];
