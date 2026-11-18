import {
  BrainCircuit,
  Code2,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  name: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    description: "Interfaces built for clarity, speed, and every screen.",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    description: "Practical server-side tools and data foundations.",
    icon: Database,
    skills: ["Python", "Flask", "FastAPI", "REST APIs", "MySQL", "SQLite"],
  },
  {
    name: "AI & Data",
    description: "Exploring intelligent applications and useful insights.",
    icon: BrainCircuit,
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Data Analytics",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "Tools",
    description: "Everyday tools for building, collaborating, and learning.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Power BI"],
  },
];
