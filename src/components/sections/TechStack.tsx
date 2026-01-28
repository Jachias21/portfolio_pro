'use client';

import { motion } from 'framer-motion';
import { Database, Smartphone, Wrench, Cpu } from 'lucide-react';

const STACK = [
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6" />,
    description: "Construcción de lógica de servidor robusta y gestión eficiente de datos.",
    tags: ["Java", "Spring Boot", "PHP", "Laravel", "Python", "MySQL", "MongoDB"]
  },
  {
    title: "Mobile & Frontend",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Desarrollo de experiencias nativas y multiplataforma fluidas.",
    tags: ["Kotlin (Android)", "Flutter", "Dart", "React Native", "React", "TypeScript"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    description: "Optimización de flujos de trabajo y despliegue.",
    tags: ["Git", "GitHub", "Bash Scripting", "Postman", "IntelliJ IDEA", "VS Code"]
  },
  {
    title: "AI & Innovation",
    icon: <Cpu className="w-6 h-6" />,
    description: "Integración de inteligencia artificial y análisis de datos.",
    tags: ["IA & Big Data", "Data Analysis", "Prompt Engineering", "Problem Solving"]
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase"
          >
            Lo que utilizo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2"
          >
            Tech Stack & <span className="text-blue-600 dark:text-blue-500">Expertise</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            Me especializo en construir aplicaciones escalables utilizando un conjunto diverso de tecnologías adaptadas a cada problema.
          </motion.p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STACK.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl transition-all duration-300
                bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200
                dark:bg-[#0f172a] dark:border-slate-800 dark:hover:border-blue-500/30 dark:hover:shadow-blue-900/10"
            >
              {/* Icono */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors
                bg-blue-50 text-blue-600 
                dark:bg-slate-800 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white"
              >
                {category.icon}
              </div>

              {/* Título y Descripción */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors
                    bg-slate-100 text-slate-600 border border-slate-200
                    dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700
                    group-hover:border-blue-200 dark:group-hover:border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}