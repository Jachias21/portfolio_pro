import { Code2, Database, Globe, Layers, Server, Smartphone, Terminal, Cpu, BookOpen } from "lucide-react";

export const SOCIALS = {
  github: "https://github.com/jachias21",
  linkedin: "https://www.linkedin.com/in/joanalbert-chias-catala", // Asegúrate que este sea tu link correcto
  email: "joanalbertchias9@gmail.com"
};

export const PROFILE = {
  name: "Joan Albert Chías Català",
  role: "Software Developer | Técnico Superior DAM",
  bio: "Soy una persona responsable con enfoque en la calidad del código y la usabilidad. Especializado en desarrollo multiplataforma y actualmente cursando Máster en IA & Big Data.",
  location: "Barcelona, España"
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Desarrollador Backend & Móvil (Prácticas)",
    company: "Neixa APPS",
    period: "Enero 2025 - Junio 2025",
    description: "Desarrollo de servicios backend con Laravel y automatización de servidores (Bash). Creación de aplicaciones móviles híbridas utilizando Flutter y React Native."
  },
  {
    id: 2,
    role: "Desarrollador Full Stack (Proyecto)",
    company: "STUCOM Centre d'estudis",
    period: "Feb 2025 - Junio 2025",
    description: "Desarrollo del proyecto 'Fondo Casino Royale'. App nativa en Kotlin (Android) con backend Spring Boot para gestión de juegos y sesiones en tiempo real."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "App Casino Royale",
    description: "Aplicación móvil nativa que simula juegos de casino (Ruleta, Blackjack) con gestión de usuarios. UI dinámica y responsive.",
    tags: ["Kotlin", "Spring Boot", "Android"],
    link: "#" // Pon aquí el link a GitHub si lo tienes
  },
  {
    id: 2,
    title: "Automatización & Backend Neixa",
    description: "Sistemas de soporte para aplicaciones móviles y scripts de automatización de servidores.",
    tags: ["Laravel", "Bash", "Flutter", "React Native"],
    link: "#"
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Máster FP en Inteligencia Artificial y Big Data",
    institution: "STUCOM Centre d'estudis",
    period: "Sept 2025 - Junio 2026",
  },
  {
    id: 2,
    degree: "GS Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "STUCOM Centre d'estudis",
    period: "Sept 2023 - Junio 2025",
  }
];

export const TECH_STACK = [
  { name: "Java / Kotlin", icon: Smartphone },
  { name: "Spring Boot", icon: Server },
  { name: "PHP / Laravel", icon: Globe },
  { name: "Flutter / Dart", icon: Layers },
  { name: "React Native", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "MongoDB / MySQL", icon: Database },
  { name: "IA & Big Data", icon: Cpu },
];