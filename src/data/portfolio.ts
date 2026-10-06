/**
 * ---------------------------------------------------------------------------
 *  CENTRALISED PORTFOLIO CONTENT
 * ---------------------------------------------------------------------------
 *  Every piece of personal information lives here. Replace the placeholder
 *  values below with your real details and the whole site updates.
 *  Nothing personal should be hard-coded inside components.
 * ---------------------------------------------------------------------------
 */

import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FileSearch,
  Layers,
  MessageSquareCode,
  ScanEye,
  ScanSearch,
  Server,
  Sparkles,
  Webhook,
} from "lucide-react";
import {
  AwsIcon,
  DockerIcon,
  FirebaseIcon,
  GitIcon,
  JavaIcon,
  JavaScriptIcon,
  MySqlIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  OpenCvIcon,
  PandasIcon,
  PythonIcon,
  QdrantIcon,
  ReactIcon,
  ReduxIcon,
  ScikitLearnIcon,
  SpringBootIcon,
  TailwindCssIcon,
  TensorFlowIcon,
  TypeScriptIcon,
} from "@/components/ui/BrandIcons";

export const profile = {
  name: "Nilaksha Perera",
  firstName: "Nilaksha",
  role: "Software Engineer",
  tagline: "Full-stack products, enterprise systems and applied AI.",
  location: "Colombo, Sri Lanka",
  email: "nilaksha.sandani@gmail.com",
  phone: "+94 71 681 7217",
  availability: "Available for opportunities",
  resumeUrl: "/resume.pdf",
  intro: "HELLO, I'M",
  heroDescription:
    "Software Engineer with 3+ years of experience building enterprise platforms and full-stack web apps, now pursuing an MSc in Artificial Intelligence and building with LLMs, RAG and AI agents.",
  // Rotating words under the name in the hero section.
  roles: [
    "3+ Years of Experience",
    "Full-Stack Engineer",
    "Building with LLMs & RAG",
    "MSc AI Student",
  ],
};

export const developerCard = {
  name: "Nilaksha Perera",
  role: "Software Engineer",
  location: "Colombo, Sri Lanka",
  stack: ["React", "Spring Boot", "Python"],
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nilaksha00", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nilaksha00",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:nilaksha.sandani@gmail.com", icon: "mail" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------- ABOUT --------------------------------- */

export const about = {
  heading: "A little about me",
  lead: "I'm Nilaksha, a software engineer from Colombo, Sri Lanka, who enjoys turning complex problems into simple, useful products.",
  paragraphs: [
    "I care about clean code and the small details that make software feel effortless. These days I'm reading for an MSc in Artificial Intelligence and exploring how LLMs and intelligent agents can make everyday tools smarter.",
  ],
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Enterprise Clients" },
    { value: 6, suffix: "", label: "Featured Projects" },
    { value: 4, suffix: "", label: "Certifications" },
  ],
  marquee: [
    "SOFTWARE ENGINEERING",
    "FULL-STACK DEVELOPMENT",
    "LLM APPLICATIONS",
    "MACHINE LEARNING",
    "COMPUTER VISION",
  ],
};

/* ------------------------------- SKILLS -------------------------------- */

/** Brand logo (BrandIcons) or concept icon (lucide) shown beside a skill. */
export type SkillIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

export type Skill = {
  name: string;
  icon: SkillIcon;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: PythonIcon },
      { name: "Java", icon: JavaIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJsIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "Zustand", icon: Layers },
      { name: "Tailwind CSS", icon: TailwindCssIcon },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Spring Boot", icon: SpringBootIcon },
      { name: "Node.js", icon: NodeJsIcon },
      { name: "NestJS", icon: NestJsIcon },
      { name: "REST APIs", icon: Webhook },
      { name: "Microservices", icon: Boxes },
    ],
  },
  {
    title: "AI & LLMs",
    icon: Sparkles,
    skills: [
      { name: "LLM Integrations", icon: Sparkles },
      { name: "RAG", icon: FileSearch },
      { name: "AI Agents", icon: Bot },
      { name: "Prompt Engineering", icon: MessageSquareCode },
      { name: "Vector Search", icon: ScanSearch },
    ],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "Deep Learning", icon: BrainCircuit },
      { name: "Computer Vision", icon: ScanEye },
      { name: "TensorFlow", icon: TensorFlowIcon },
      { name: "OpenCV", icon: OpenCvIcon },
      { name: "Scikit-learn", icon: ScikitLearnIcon },
      { name: "Pandas", icon: PandasIcon },
    ],
  },
  {
    title: "Data, Cloud & Tools",
    icon: Cloud,
    skills: [
      { name: "MySQL", icon: MySqlIcon },
      { name: "Qdrant", icon: QdrantIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "AWS", icon: AwsIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Git", icon: GitIcon },
    ],
  },
];

/* ------------------------------ PROJECTS ------------------------------- */

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Cover image path under /public, e.g. "/images/projects/crm.webp". Optional. */
  cover?: string;
  /** Where the project was built (shown in the details modal). */
  context: string;
  /** Short bullet points shown in the details modal. */
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
};

// Ordered by real-world impact: production platforms first, then research and personal work.
export const projects: Project[] = [
  {
    id: "01",
    title: "CRM Platform",
    description:
      "An end-to-end sales and service CRM that streamlines the customer journey, from first engagement through to post-service follow-up. Built at TS Technologies.",
    cover: "/images/projects/crm.webp",
    tech: ["React", "Zustand", "Bootstrap", "Spring Boot", "MySQL"],
    context: "TS Technologies (Pvt) Ltd",
    highlights: [
      "Brings sales and service operations together in one platform",
      "Tracks every customer from first contact to post-service follow-up",
      "Helps sales teams work faster and more effectively",
      "Developed and maintained across the full stack, from UI to database",
    ],
  },
  {
    id: "02",
    title: "Pro11 FinTech Platform",
    description:
      "A real-time financial data platform giving merchants live market data, analytics and decision-making tools, used by 100+ corporate clients. Built at DirectFN.",
    cover: "/images/projects/pro11.webp",
    tech: ["Ember.js", "Bootstrap", "Sass", "JavaScript"],
    context: "DirectFN (Pvt) Ltd",
    highlights: [
      "Real-time financial data and analytics for merchants",
      "Data-driven UI features for faster, better-informed decisions",
      "Trusted by 100+ corporate clients",
    ],
  },
  {
    id: "03",
    title: "Digital Signage Solution",
    description:
      "A digital signage platform where users design custom layouts, schedule content and push it live to screens, making content management effortless. Built at TS Technologies.",
    cover: "/images/projects/digital-signage.webp",
    tech: ["React", "Redux", "Bootstrap", "Konva", "Spring Boot", "MySQL", "MQTT"],
    context: "TS Technologies (Pvt) Ltd",
    highlights: [
      "Visual editor for creating custom screen designs",
      "Scheduling so content plays exactly when it should",
      "Real-time delivery of content to screens over MQTT",
      "Simpler content management and better audience engagement",
    ],
  },
  {
    id: "04",
    title: "Eye Care: AI Disease Detection",
    description:
      "A mobile app that uses deep learning to detect eye diseases, including diabetic retinopathy, from retinal images, helping specialists reach accurate diagnoses.",
    cover: "/images/projects/eye-care.webp",
    tech: ["Deep Learning", "CNNs", "Image Processing", "Python", "JavaScript", "Firebase"],
    context: "Final Year Research Project · SLIIT",
    highlights: [
      "Detects eye diseases, including diabetic retinopathy, from retinal images",
      "Deep learning and image processing at its core",
      "Supports eye specialists in making accurate diagnoses",
      "Reliable and efficient disease identification",
    ],
  },
  {
    id: "05",
    title: "RAG Document Q&A",
    description:
      "Upload a PDF and ask it anything. A full-stack retrieval-augmented generation app that answers natural-language questions and cites the exact passages it used.",
    cover: "/images/projects/rag-document-qa.webp",
    tech: ["React", "NestJS", "Qdrant", "Embedding Models", "LLM Integration"],
    context: "Personal Project",
    highlights: [
      "Ask questions about any uploaded PDF in plain language",
      "End-to-end pipeline: PDF parsing, chunking and embedding generation",
      "Vector storage and semantic retrieval with Qdrant",
      "LLM-generated answers backed by cited source passages",
    ],
  },
  {
    id: "06",
    title: "Employee Retention Prediction",
    description:
      "A classification model that predicts employee attrition from historical HR data, using feature engineering and exploratory analysis to surface what really drives retention.",
    cover: "/images/projects/employee-retention.webp",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    context: "Machine Learning Project",
    highlights: [
      "Predicts employee attrition from historical HR data",
      "Feature engineering to sharpen model performance",
      "Exploratory data analysis to identify the key retention drivers",
    ],
  },
];

/* ----------------------------- EXPERIENCE ----------------------------- */

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "TS Technologies (Pvt) Ltd",
    period: "Mar 2024 - Present",
    points: [
      "Build and ship production modules for enterprise systems used by 50+ clients",
      "Optimized rendering and state management in React and Redux, cutting load times and improving responsiveness across client-facing dashboards",
      "Own features end to end, from requirements and MySQL schema design to Spring Boot integration and release",
    ],
  },
  {
    role: "Co-Founder & Software Engineer",
    company: "DevcoLabs Technologies",
    period: "2024 - Present",
    points: [
      "Co-founded a technology startup focused on building software products",
      "Design and develop full-stack applications from first requirements through to deployment",
      "Shape system architecture and key technical decisions, planning features with the founding team to deliver scalable solutions",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "DirectFN (Pvt) Ltd",
    period: "Mar 2022 - Nov 2022",
    points: [
      "Built data-driven UI features for Pro11, a real-time financial data platform used by 100+ corporate clients",
      "Resolved production bugs and shipped new features under senior engineer review, keeping a live client-facing platform stable",
    ],
  },
];

/* ----------------------------- EDUCATION ----------------------------- */

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc in Artificial Intelligence",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "Reading",
    detail: "Alongside full-time engineering work",
  },
  {
    degree: "BSc (Hons) in Information Technology, specializing in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "Feb 2020 - Mar 2024",
    detail: "Second Class · Dean's List Award 2022",
  },
];

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn" },
  { name: "AWS Essentials", issuer: "LinkedIn" },
  { name: "Microservices Foundations Professional Certificate", issuer: "Kong" },
  { name: "JavaScript Foundations Professional Certificate", issuer: "Mozilla" },
];

/* -------------------------- CURRENTLY LEARNING ----------------------- */

export const learning = {
  heading: "Currently exploring",
  note: "Always learning. Always building.",
  items: [
    "MSc in Artificial Intelligence",
    "LLM Applications",
    "RAG Pipelines",
    "AI Agents",
    "Computer Vision",
    "Cloud Development",
  ],
};

/* ------------------------------ SERVICES ---------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Web Applications",
    description: "Modern, responsive and scalable web applications.",
    icon: Code2,
  },
  {
    title: "Full-Stack Development",
    description: "React frontends backed by Spring Boot, NestJS and REST APIs.",
    icon: Boxes,
  },
  {
    title: "LLM & RAG Applications",
    description:
      "Document Q&A, retrieval pipelines and AI agents powered by large language models.",
    icon: Sparkles,
  },
  {
    title: "Machine Learning",
    description:
      "Model training, data preprocessing and prediction pipelines in Python.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & APIs",
    description: "Secure REST APIs, microservices and cloud-based deployments.",
    icon: Cloud,
  },
];

/* ------------------------------ CONTACT ---------------------------- */

export const contact = {
  heading: "Let's build something great.",
  text: "I'm open to new opportunities and always happy to talk products, engineering or AI. Have something in mind? My inbox is always open.",
  email: "nilaksha.sandani@gmail.com",
  location: "Colombo, Sri Lanka",
};

export const footer = {
  name: "Nilaksha Perera",
  blurb: "Software Engineer building digital experiences and intelligent systems.",
  year: 2026,
  icon: Sparkles,
};
