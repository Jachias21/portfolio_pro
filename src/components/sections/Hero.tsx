'use client';

import { motion } from 'framer-motion';
import { SOCIALS, PROFILE } from '@/data/portfolio'; // Importamos tus datos reales
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900 pt-20">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        
        {/* Foto de perfil (Opcional - Si tienes una foto, ponla en public/avatar.png) */}
        {/* <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-indigo-500 overflow-hidden shadow-2xl"
        >
          <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
        */}

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          {PROFILE.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl text-indigo-200 mb-6 font-light"
        >
          {PROFILE.role}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {PROFILE.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full font-bold hover:bg-gray-700 transition shadow-lg border border-gray-700">
            <Github size={20} /> GitHub
          </a>
          <a href="/cv.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-400 text-indigo-100 rounded-full font-bold hover:bg-indigo-400/10 transition">
            <FileText size={20} /> CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}