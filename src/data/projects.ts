export type ProjectPreview = "sanvera" | "upi-shield" | "call-break";

export type Project = {
  name: string;
  categories: string[];
  description: string;
  technologies: string[];
  features: string[];
  preview: ProjectPreview;
  sourceUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "SANVERA AI",
    categories: ["AI", "Generative AI", "Full Stack Development"],
    description:
      "An AI-powered video generation platform designed to transform creative prompts into video generation workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      "Modern video generation studio interface",
      "User authentication",
      "Generation job and credit management",
      "Video library and generation history",
    ],
    preview: "sanvera",
    sourceUrl: "https://github.com/gagan-pandey-AI/Sanvera-AI",
  },
  {
    name: "UPI SHIELD AI",
    categories: ["Cybersecurity", "Artificial Intelligence"],
    description:
      "An AI-powered fraud detection platform designed to identify suspicious messages, phishing links, and potential UPI scams.",
    technologies: ["Python", "Flask", "SQLite", "OCR", "HTML", "CSS", "JavaScript"],
    features: [
      "Suspicious message analysis",
      "Phishing link detection",
      "OCR-based text extraction",
      "Fraud detection dashboard",
      "Security-focused application design",
    ],
    preview: "upi-shield",
  },
  {
    name: "CALL BREAK ARENA",
    categories: ["Full Stack Development", "Gaming"],
    description:
      "An interactive multiplayer Call Break card game platform with account management and game history.",
    technologies: ["JavaScript", "Node.js", "SQLite", "HTML", "CSS"],
    features: [
      "Multiplayer game rooms",
      "Account management",
      "Game history and leaderboard",
      "Interactive gaming interface",
    ],
    preview: "call-break",
    sourceUrl: "https://github.com/gagan-pandey-AI/Call-Break-Arena",
  },
];
