'use client';

import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { SOCIALS } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#020617] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Info Izquierda */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Let’s work <br />
              <span className="text-blue-600">together.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md">
              ¿Tienes un proyecto en mente? Rellena el formulario o contáctame directamente.
            </p>

            <div className="space-y-4">
              <a href={SOCIALS.email} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-colors group">
                <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg text-blue-600 dark:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Email</p>
                  <p className="text-slate-900 dark:text-white font-medium">joanalbertchias9@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg text-blue-600 dark:text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Ubicación</p>
                  <p className="text-slate-900 dark:text-white font-medium">Barcelona, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Derecha (Card) */}
          <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl dark:shadow-none">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nombre</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Nombre" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Email" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="¿Cómo puedo ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex justify-center items-center gap-2">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}