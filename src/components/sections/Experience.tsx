'use client';

import { EXPERIENCE } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-800 mb-16"
        >
          Experiencia Laboral
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Línea vertical central */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-200" />

          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-8 md:mb-12 w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Espacio vacío para alternar lados */}
              <div className="hidden md:block w-5/12" />

              {/* Punto central del timeline */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Tarjeta de contenido */}
              <div className="w-full md:w-5/12 pl-10 md:pl-0">
                <div className="bg-slate-50 p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">{item.role}</h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">{item.company}</h4>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}