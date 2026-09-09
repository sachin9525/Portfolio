export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "Full Stack" | "AI & ML" | "Frontend" | "DevOps";
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  stats?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export const personalInfo = {
  name: "Sachin",
  badgeTitle: "Available for New Opportunities",
  title: "Full Stack Developer & AI Engineer",
  typingTitles: [
    "Full Stack Web Developer",
    "AI & LLM App Architect",
    "UI/UX & Creative Technologist",
    "Open Source Contributor"
  ],
  bio: "Passionate engineer dedicated to crafting fluid, responsive user interfaces and robust scalable backend systems. Specialized in React, Next.js, Node.js, and integrating modern AI agent workflows with exceptional visual polish.",
  location: "India / Remote Worldwide",
  email: "sachin.developer.pro@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resumeUrl: "#",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "28+" },
    { label: "GitHub Commits", value: "1,200+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Excellence",
    icon: "Layout",
    description: "Creating silky smooth, dynamic, accessible web apps",
    skills: [
      { name: "React 18 / 19", level: 95, highlight: true },
      { name: "Next.js 14 / 15", level: 92, highlight: true },
      { name: "TypeScript", level: 90, highlight: true },
      { name: "Tailwind CSS", level: 96, highlight: true },
      { name: "Framer Motion", level: 88, highlight: true },
      { name: "Three.js / WebGL", level: 75 },
      { name: "HTML5 / modern CSS", level: 98 },
      { name: "State Management (Zustand/Redux)", level: 88 }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    description: "Architecting high-throughput, resilient cloud microservices",
    skills: [
      { name: "Node.js & Express", level: 92, highlight: true },
      { name: "Python / FastAPI", level: 86, highlight: true },
      { name: "NestJS", level: 80 },
      { name: "PostgreSQL & Prisma", level: 90, highlight: true },
      { name: "MongoDB / Mongoose", level: 88 },
      { name: "Redis Caching", level: 84 },
      { name: "REST & GraphQL APIs", level: 92 },
      { name: "WebSockets & WebRTC", level: 82 }
    ]
  },
  {
    category: "AI & Modern Tooling",
    icon: "Bot",
    description: "Integrating LLMs, autonomous agents, and vector storage",
    skills: [
      { name: "LangChain / LlamaIndex", level: 86, highlight: true },
      { name: "OpenAI / Claude APIs", level: 94, highlight: true },
      { name: "Vector DBs (Pinecone/Chroma)", level: 82 },
      { name: "Prompt Engineering & RAG", level: 90, highlight: true },
      { name: "Docker & Containers", level: 84 },
      { name: "CI/CD & GitHub Actions", level: 85 },
      { name: "AWS & Vercel Cloud", level: 88 },
      { name: "Git & Version Control", level: 96 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Lightswind UI Studio",
    description: "Interactive visual component explorer and design tool featuring 190+ animated React components, real-time code export, and live theme customization.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    demoUrl: "https://lightswind.com",
    githubUrl: "https://github.com/codewithMUHILAN/Lightswind-UI-Library",
    featured: true,
    stats: "190+ Components"
  },
  {
    id: "proj-2",
    title: "OmniAgent AI Platform",
    description: "Enterprise multi-agent autonomous system capable of multi-step reasoning, real-time tool execution, live streaming transcripts, and vector search RAG.",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FastAPI", "React", "OpenAI", "Pinecone", "WebSockets"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    stats: "Sub-200ms TTFT"
  },
  {
    id: "proj-3",
    title: "DevSync Collaborative IDE",
    description: "Browser-based collaborative programming IDE with instant multi-cursor synchronization, in-browser terminal execution, and WebRTC audio/video rooms.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Node.js", "Docker", "WebRTC", "Socket.io", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    stats: "10k+ Monthly Users"
  },
  {
    id: "proj-4",
    title: "FinPulse Market Intelligence",
    description: "Real-time algorithmic trading & portfolio tracking dashboard with predictive time-series charts, sentiment indicators, and instant order routing.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Python", "PostgreSQL", "Recharts", "Redis"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    stats: "Realtime Analytics"
  },
  {
    id: "proj-5",
    title: "CloudPulse Infrastructure Mesh",
    description: "Distributed telemetry and observability dashboard monitoring Kubernetes clusters, serverless containers, latency heatmaps, and automated alert routing.",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    tags: ["Go", "TypeScript", "Docker", "Prometheus", "Grafana", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    stats: "99.99% Reliability"
  },
  {
    id: "proj-6",
    title: "VibeFlow E-Commerce",
    description: "Ultra-fast headless commerce platform with instantaneous client-side navigation, dynamic 3D product previews, and frictionless Apple Pay / Stripe checkout.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js 14", "Stripe API", "Zustand", "Tailwind CSS", "Sanity CMS"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    stats: "Lighthouse 100"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Senior Full Stack & AI Engineer",
    company: "Apex Innovations",
    location: "Bengaluru / Remote",
    description: "Leading frontend architecture and autonomous AI integration for flagship enterprise clients. Scaled user base from 10k to 250k+ active users.",
    technologies: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "AWS", "Docker"],
    achievements: [
      "Engineered an AI agent orchestration pipeline reducing user query response times by 48%.",
      "Redesigned the primary design system using animated, reusable UI primitives, boosting developer velocity by 35%."
    ]
  },
  {
    period: "2022 — 2023",
    role: "Full Stack Developer",
    company: "HyperScale Tech",
    location: "Remote",
    description: "Developed mission-critical web portals, real-time analytics graphs, and scalable RESTful/GraphQL microservices.",
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "Tailwind CSS", "Redis"],
    achievements: [
      "Optimized database queries and Redis caching layer, cutting p99 response times from 320ms to 45ms.",
      "Delivered 12+ high-fidelity client web apps on schedule with zero production incidents."
    ]
  },
  {
    period: "2020 — 2022",
    role: "Junior Web Developer & Open Source Contributor",
    company: "Digital Studio",
    location: "Hybrid",
    description: "Built responsive modern interfaces, landing pages with smooth animations, and contributed to open-source UI libraries.",
    technologies: ["JavaScript", "TypeScript", "HTML5/CSS3", "React", "Git"],
    achievements: [
      "Created reusable open-source component packages with over 5,000+ weekly npm downloads."
    ]
  }
];

export const testimonialsData = [
  {
    quote: "Sachin is an exceptional developer who bridges the gap between top-tier aesthetics and rock-solid technical architecture. The animations and responsiveness he delivered were flawless.",
    name: "Alex Rivera",
    role: "VP of Product, CloudScale",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Working with Sachin transformed our platform. His deep grasp of modern React, AI workflows, and micro-interactions gave our startup a massive competitive edge.",
    name: "Priya Sharma",
    role: "Co-Founder & CTO, NexusAI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Attention to detail, blazingly fast delivery, and clean, readable code. Couldn't ask for a better full-stack partner.",
    name: "Marcus Vance",
    role: "Lead Architect, Orbit Labs",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200"
  }
];
