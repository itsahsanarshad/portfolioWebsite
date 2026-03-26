// =============================================================================
// portfolio.ts — Edit this file to update website content
// No component changes needed — just add/edit objects in the arrays below
// =============================================================================

// ── Types ──────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links?: {
    live?: string;
    code?: string;
  };
  featured?: boolean;
  icon?: string; // Material Symbols icon name (optional)
}

export interface WorkEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work";
}

export interface EduEntry {
  degree: string;
  school: string;
  period: string;
  focus: string;
  type: "education";
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[]; // level: 0–100
}

// ── Projects ───────────────────────────────────────────────────────────────────
// Set featured: true for the hero card on the Projects page (only one)

export const projects: Project[] = [
  {
    id: "serenity-vault",
    title: "SerenityVault",
    description:
      "A high-performance Next.js application designed for extreme data privacy and seamless user workflow. Leverages server-side rendering and edge computing to deliver sub-second interactions with end-to-end encryption.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    links: {
      live: "https://serenityvault.com",
      code: "#",
    },
    featured: true,
  },
  {
    id: "securprobe",
    title: "SecurProbe",
    description:
      "Advanced vulnerability scanning dashboard featuring real-time data visualization and threat assessment for enterprise network endpoints.",
    tags: ["Python", "Scapy", "React", "Flask"],
    links: {
      code: "#",
    },
    icon: "security",
  },
  {
    id: "alabama-mart",
    title: "Alabama Mart",
    description:
      "Scalable e-commerce solution built with WooCommerce for high-volume retail performance, featuring custom inventory management and analytics.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    links: {
      live: "#",
    },
    icon: "shopping_cart",
  },
  {
    id: "alabama-tech",
    title: "Alabama Tech",
    description:
      "Digital ecosystem for a technology service provider, optimizing user conversion through precision design and structured content architecture.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      live: "#",
    },
    icon: "hub",
  },
  {
    id: "portfolio-v1",
    title: "Custom Portfolio",
    description:
      "A bespoke WordPress experience designed for creative professionals, featuring high-speed performance and minimalist aesthetics.",
    tags: ["WordPress", "ACF", "PHP", "CSS"],
    links: {
      live: "#",
    },
    icon: "web",
  },
];

// ── Work Experience ────────────────────────────────────────────────────────────
// Add new entries at the top (most recent first)

export const experience: WorkEntry[] = [
  {
    role: "Junior Software Developer",
    company: "DigiAppX",
    period: "2024 – Present",
    description:
      "Architecting immersive user interfaces using Next.js and Tailwind CSS, focusing on atomic design principles and performance optimization. Pioneering modular UI architectures and implementing high-efficiency backend services for scalable web applications.",
    type: "work",
  },
  {
    role: "WordPress Developer Intern",
    company: "DigiAppX",
    period: "2023 – 2024",
    description:
      "Specialized in custom theme development utilizing Advanced Custom Fields (ACF) to build flexible, high-conversion content management systems. Managed and optimized enterprise-scale WooCommerce deployments and custom theme development.",
    type: "work",
  },
];

// ── Education ──────────────────────────────────────────────────────────────────
// Add new entries at the top (most recent first)

export const education: EduEntry[] = [
  {
    degree: "MS Computer Science",
    school: "Bahria University",
    period: "2023 – Present",
    focus: "Advanced Algorithms, Machine Learning, and Distributed Systems.",
    type: "education",
  },
  {
    degree: "BS Computer Science",
    school: "Bahria University",
    period: "2019 – 2023",
    focus: "Core Computer Science curriculum with a focus on Software Engineering.",
    type: "education",
  },
];

// ── Skills ─────────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "React Native", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Python / Flask", level: 85 },
      { name: "AWS / Azure", level: 75 },
      { name: "C# / C++", level: 80 },
    ],
  },
];

// ── Core Competencies (shown on Experience page) ───────────────────────────────

export const competencies: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Flask",
  "Node.js",
  "AWS",
  "Azure",
  "PostgreSQL",
  "Tailwind CSS",
  "WordPress",
  "WooCommerce",
  "Docker",
  "Git",
  "REST APIs",
];
