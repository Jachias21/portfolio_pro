'use client';

import { motion } from 'framer-motion';
import { PROFILE } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  // Aquí decidimos qué texto escribir. He puesto tu nombre completo o puedes poner solo "Joan Albert".
  const fullText = PROFILE.name; 
  
  // Efecto de escritura tipo máquina de escribir
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100); // Velocidad de escritura (100ms por letra)
      
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-white dark:bg-[#020617] transition-colors duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* FOTO (Izquierda) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-1 relative aspect-square max-w-md mx-auto lg:mx-0 w-full bg-slate-100 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl dark:shadow-blue-900/10 border border-slate-200 dark:border-slate-700"
        >
          <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-900">
             {/* Placeholder para tu foto */}
             <span className="text-8xl">🚀</span>
          </div>
        </motion.div>

        {/* TEXTO (Derecha) */}
        <div className="order-2 lg:order-2 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest border border-blue-200 dark:border-blue-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AVAILABLE FOR WORK
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight font-mono">
            Hello, I’m <br />
            <span className="text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-300">
              {text}
            </span>
            {/* Cursor parpadeante */}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-[0.8em] bg-blue-600 dark:bg-cyan-400 ml-1 align-bottom"
            />
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }} // Retrasamos un poco el texto para dejar protagonismo al nombre
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
          >
            {PROFILE.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 dark:shadow-blue-900/20 hover:-translate-y-1">
              Ver Proyectos
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition hover:-translate-y-1">
              Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}