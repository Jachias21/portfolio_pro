'use client';

import { PROJECTS } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected Work</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Explora mis proyectos recientes, construidos con enfoque en rendimiento y usabilidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="h-48 bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="text-4xl opacity-50 grayscale group-hover:grayscale-0 transition-all">💻</span>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm line-clamp-3">{project.description}</p>
                
                <a href={project.link} className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  Ver Proyecto <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}