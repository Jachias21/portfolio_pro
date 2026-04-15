import { Code2, Database, Globe, Layers, Server, Smartphone, Terminal, Cpu, BookOpen } from "lucide-react";

export const SOCIALS = {
  github: "https://github.com/jachias21",
  linkedin: "https://www.linkedin.com/in/joanalbert-chias-catala",
  email: "joanalbertchias9@gmail.com"
};

export const PROFILE = {
  name: "Joan Albert Chías Català",
  role: "Ai & Software Engineer",
  bio: "Combino el desarrollo Full-Stack con una mentalidad Data-Driven. Especializado en diseñar arquitecturas escalables e implementar soluciones de IA y Machine Learning que transforman datos complejos en valor real y eficiencia operativa",
  location: "Barcelona, España"
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Desarrollador Backend & Móvil (Prácticas)",
    company: "Neixa APPS",
    period: "Enero 2025 - Junio 2025",
    description: "Desarrollo de servicios backend con Laravel y automatización de servidores (Bash). Creación de aplicaciones móviles híbridas utilizando Flutter y React Native."
  }
];

export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

export const PROJECTS = [
  {
    id: 1,
    title: "App Casino Royale",
    description: "Aplicación móvil nativa que simula juegos de casino (Ruleta, Blackjack) con gestión de usuarios. UI dinámica y responsive.",
    tags: ["Kotlin", "Spring Boot", "Android"],
    link: "https://github.com/Jachias21/FondoCasinoRoyale_app.git",
    media: [
      { type: 'image' as const, src: '/images/casino/casino_logo.jpeg', alt: 'Casino Royale logo' },
      { type: 'image' as const, src: '/images/casino/casino1.png', alt: 'Casino Royale inicio' },
      { type: 'image' as const, src: '/images/casino/casino2.png', alt: 'Casino Royale splash' },
      { type: 'image' as const, src: '/images/casino/casino3.png', alt: 'Casino Royale login' },
      { type: 'image' as const, src: '/images/casino/casino4.png', alt: 'Casino Royale loading' },
      { type: 'image' as const, src: '/images/casino/casino5.png', alt: 'Casino Royale ruleta' },
      { type: 'image' as const, src: '/images/casino/casino6.png', alt: 'Casino Royale tragaperras' },
      { type: 'image' as const, src: '/images/casino/casino7.png', alt: 'Casino Royale rasca' },

    ] as ProjectMedia[],
  },
  {
    id: 2,
    title: "AIDelivery - IA para Logística",
    description: "Sistema de reparto de productos perecederos automatizado con IA para optimización de rutas.",
    tags: ["IA", "Python", "Streamlit", "Data Analysis"],
    link: "https://github.com/ronaldintriago/proyect1_IABD.git",
    media: [
      { type: 'image' as const, src: '/images/aidelivery/aidelivery1.png', alt: 'AIDelivery logo' },
      { type: 'image' as const, src: '/images/aidelivery/aidelivery2.png', alt: 'AIDelivery ruta optimizada' },
      { type: 'image' as const, src: '/images/aidelivery/aidelivery3.png', alt: 'AIDelivery predicción de demanda' },
      { type: 'image' as const, src: '/images/aidelivery/aidelivery4.png', alt: 'AIDelivery panel de control' },
      { type: 'image' as const, src: '/images/aidelivery/aidelivery5.png', alt: 'AIDelivery auditoria' },
    ],
  },
  {
    id: 3,
    title: "RainbowAI - Prediccion meteorológica de arcoiris",
    description: "App meteorològica que predice la probabilidad de ver un arcoiris en función de datos climáticos históricos y actuales.",
    tags: ["IA", "Python", "Streamlit", "Data Analysis"],
    link: "https://github.com/nadiflexx/Meteorological-Forecasting-Platform.git",
    media: [
      { type: 'image' as const, src: '/images/rainbowai/LOGO_RainbowAI.png', alt: 'RainbowAI logo' },
      { type: 'image' as const, src: '/images/rainbowai/rainbow2.png', alt: 'RainbowAI predicción' },
      { type: 'image' as const, src: '/images/rainbowai/rainbow3.png', alt: 'RainbowAI mapa de calor' },
      { type: 'image' as const, src: '/images/rainbowai/rainbow4.png', alt: 'RainbowAI arcoirirs' },
    ],
  },
  {
    id: 4,
    title: "SoundWave - Sistema de recomendación musical",
    description: "Aplicación que recomienda musica segun tu estado de animo",
    tags: ["IA", "Python", "Angular", "Spotify API", "PyTorch"],
    link: "https://github.com/Jachias21/music_recommendation_system.git",
    media: [
      { type: 'image' as const, src: '/images/soundwave/SoundWaveLogo.png', alt: 'SoundWave logo' },
      { type: 'image' as const, src: '/images/soundwave/soundwave1.png', alt: 'SoundWave interfaz principal' },
      { type: 'image' as const, src: '/images/soundwave/soundwave2.png', alt: 'SoundWave recomendaciones' },
      { type: 'image' as const, src: '/images/soundwave/soundwave3.png', alt: 'SoundWave playlist' },
    ],
  },
  {
    id: 5,
    title: "AiColonDiagnosis",
    description: "Proyecto de diagnóstico asistido por IA para cáncer de colon",
    tags: ["IA", "Python", "TensorFlow", "Keras"],
    link: "https://github.com/Jachias21/AiColonDiagnosis.git",
    media: [] as ProjectMedia[],
  },
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