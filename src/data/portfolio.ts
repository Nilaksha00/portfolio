/**
 * ---------------------------------------------------------------------------
 *  CENTRALISED PORTFOLIO CONTENT
 * ---------------------------------------------------------------------------
 *  Every piece of personal information lives here. Replace the placeholder
 *  values below with your real details and the whole site updates.
 *  Nothing personal should be hard-coded inside components.
 * ---------------------------------------------------------------------------
 */

import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Cloud,
  Code2,
  Server,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Nilaksha Perera",
  firstName: "Nilaksha",
  role: "Software Engineer",
  tagline: "Enterprise software, web apps and applied AI.",
  location: "Colombo, Sri Lanka",
  email: "nilaksha.sandani@gmail.com",
  phone: "+94 71 681 7217",
  availability: "Available for opportunities",
  resumeUrl: "/resume.pdf",
  intro: "HELLO, I'M",
  heroDescription:
    "Software Engineer with 2+ years building enterprise software and scalable web applications, now pursuing an MSc in Artificial Intelligence.",
  // Rotating words under the name in the hero section.
  roles: [
    "3+ Years Experience",
    "Full-Stack Developer",
    "AI / ML Engineer",
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
  lead: "I'm a Software Engineer with 2+ years of experience building enterprise software and scalable web applications.",
  paragraphs: [
    "I'm currently pursuing an MSc in Artificial Intelligence, with hands-on experience in Machine Learning, Deep Learning, Computer Vision and LLM-based applications through research and software projects.",
    "I'm skilled in Python, React, TypeScript, REST APIs and cloud-based development, with a strong interest in AI/ML engineering, MLOps, and deploying intelligent systems to solve real-world problems.",
  ],
  stats: [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Enterprise Clients" },
    { value: 5, suffix: "", label: "Featured Projects" },
    { value: 4, suffix: "", label: "Certifications" },
  ],
  marquee: [
    "SOFTWARE ENGINEERING",
    "WEB DEVELOPMENT",
    "MACHINE LEARNING",
    "COMPUTER VISION",
    "MLOPS",
  ],
};

/* ------------------------------- SKILLS -------------------------------- */

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Redux", "Zustand", "Ember.js", "Bootstrap", "Sass", "Konva"],
  },
  {
    title: "Backend & Data",
    icon: Server,
    skills: ["Spring Boot", "Flask", "REST APIs", "MySQL", "Firebase", "MQTT"],
  },
  {
    title: "ML & Deep Learning",
    icon: BrainCircuit,
    skills: [
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "CNNs",
      "Image Processing",
      "Model Training",
    ],
  },
  {
    title: "AI Tools & Libraries",
    icon: Boxes,
    skills: ["OpenCV", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
];

/* ------------------------------ PROJECTS ------------------------------- */

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Cover image path under /public, e.g. "/projects/01.png". Optional. */
  cover?: string;
  /** Where the project was built (shown in the details modal). */
  context: string;
  /** Short bullet points shown in the details modal. */
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Digital Signage Solution",
    description:
      "Contributed to a digital signage platform where users create custom designs, schedule content and push it to screens, simplifying content management. Built with TS Technologies.",
    tech: ["React", "Redux", "Bootstrap", "Konva", "Spring Boot", "MySQL", "MQTT"],
    context: "TS Technologies (Pvt) Ltd",
    highlights: [
      "Users create custom designs for their screens",
      "Schedule content to play when needed",
      "Transfer content to screens, simplifying content management",
      "Improves user engagement",
    ],
  },
  {
    id: "02",
    title: "CRM",
    description:
      "Developed and maintained a CRM that streamlines end-to-end service and sales operations, improving the sales journey from first engagement to post-service follow-up. Built with TS Technologies.",
    tech: ["React", "Zustand", "Bootstrap", "Spring Boot", "MySQL"],
    context: "TS Technologies (Pvt) Ltd",
    highlights: [
      "Streamlines end-to-end service and sales operations",
      "Covers the sales journey from initial engagement to post-service follow-up",
      "Helps sales teams operate more efficiently and effectively",
    ],
  },
  {
    id: "03",
    title: "Pro11 FinTech Solution",
    description:
      "Contributed to a fintech platform giving merchants and stakeholders real-time financial data, analytics and tools for informed decision-making. Built with DirectFN.",
    tech: ["Ember.js", "Bootstrap", "Sass", "JavaScript"],
    context: "DirectFN (Pvt) Ltd",
    highlights: [
      "Real-time financial data for merchants and stakeholders",
      "Analytics and tools for informed decision-making",
      "Enhances efficiency and market insight",
    ],
  },
  {
    id: "04",
    title: "Eye Care — Final Year Research",
    description:
      "A mobile app that uses deep learning to detect eye diseases, including diabetic retinopathy, from retinal images, helping specialists reach accurate diagnoses.",
    tech: ["Deep Learning", "Image Processing", "Python", "JavaScript", "Firebase"],
    context: "Final Year Research Project · SLIIT",
    highlights: [
      "Detects eye diseases from retinal images, including diabetic retinopathy",
      "Uses deep learning and image processing",
      "Assists eye specialists in making accurate diagnoses",
      "Reliable and efficient disease identification",
    ],
  },
  {
    id: "05",
    title: "Employee Retention Prediction",
    description:
      "A machine learning model that predicts employee retention and attrition from historical data, covering preprocessing, feature selection and exploratory analysis.",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    context: "Machine Learning Project",
    highlights: [
      "Predicts employee retention and attrition from employee-related features and historical data",
      "Data preprocessing and feature selection",
      "Exploratory data analysis to prepare datasets for model training",
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
    period: "Mar 2026 — Present",
    points: [
      "Promoted from Associate Software Engineer",
      "Continuing to build applications used by 50+ enterprise clients",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "TS Technologies (Pvt) Ltd",
    period: "Mar 2024 — Mar 2026",
    points: [
      "Contributed to applications used by 50+ enterprise clients, ensuring UX and optimal performance",
      "Implemented production-grade modules that improved user workflows, reduced load times and enhanced responsiveness",
      "Optimized performance and improved cross-platform responsiveness",
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "DirectFN (Pvt) Ltd",
    period: "Mar — Nov 2022",
    points: [
      "Contributed to a FinTech platform used by 100+ corporate clients, enabling real-time financial insights",
      "Resolved application bugs and implemented new features to maintain stability and performance",
      "Worked closely with senior engineers to maintain code quality and deliver milestones on schedule",
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
    detail: "Currently pursuing",
  },
  {
    degree: "BSc (Hons) in Information Technology — Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "Feb 2020 — Mar 2024",
    detail: "Second Class Lower Division (CGPA > 3.0) · Dean's List 2022",
  },
  {
    degree: "GCE Advanced Level — Physical Science Stream",
    institution: "Holy Cross College, Gampaha",
    period: "Dec 2019",
    detail: "",
  },
];

export const certifications = [
  "AWS Essentials — LinkedIn",
  "JavaScript Foundations Professional Certificate — Mozilla",
  "Career Essentials in Generative AI — Microsoft & LinkedIn",
  "Microservices Foundations Professional Certificate — Kong",
];

/* -------------------------- CURRENTLY LEARNING ----------------------- */

export const learning = {
  heading: "Currently exploring",
  note: "Always learning. Always building.",
  items: [
    "MSc in Artificial Intelligence",
    "Computer Vision",
    "Deep Learning",
    "MLOps",
    "LLM Applications",
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
    description: "React frontends backed by Spring Boot and REST APIs.",
    icon: Boxes,
  },
  {
    title: "Machine Learning",
    description:
      "Model training, data preprocessing and prediction pipelines in Python.",
    icon: BrainCircuit,
  },
  {
    title: "Computer Vision",
    description:
      "Deep learning and image processing for detection and diagnosis.",
    icon: Sparkles,
  },
  {
    title: "Cloud & APIs",
    description: "Secure REST APIs and cloud-based deployments.",
    icon: Cloud,
  },
];

/* ------------------------------ CONTACT ---------------------------- */

export const contact = {
  heading: "Let's build something great.",
  text: "Have an idea, project, or opportunity? I'd love to hear about it.",
  email: "nilaksha.sandani@gmail.com",
  location: "Colombo, Sri Lanka",
};

export const footer = {
  name: "Nilaksha Perera",
  blurb: "Software Engineer building digital experiences and intelligent systems.",
  year: 2026,
  icon: Sparkles,
};
