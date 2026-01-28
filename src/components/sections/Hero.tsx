'use client';

import { motion } from 'framer-motion';
import { PROFILE, SOCIALS } from '@/data/portfolio';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = PROFILE.name; 
  const whatsappNumber = "34669001746"; 

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  const socialLinks = [
    { 
      icon: <Linkedin size={24} />, 
      href: SOCIALS.linkedin, 
      label: "LinkedIn",
      color: "hover:text-[#0077b5]" 
    },
    { 
      icon: <Github size={24} />, 
      href: SOCIALS.github, 
      label: "GitHub",
      color: "hover:text-slate-900 dark:hover:text-white" 
    },
    { 
      icon: <Phone size={24} />, 
      href: `https://wa.me/${whatsappNumber}`, 
      label: "WhatsApp",
      color: "hover:text-[#25D366]" 
    },
    { 
      icon: <Mail size={24} />, 
      href: `mailto:${SOCIALS.email}`, 
      label: "Email",
      color: "hover:text-blue-600" 
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-white dark:bg-[#020617] transition-colors duration-300">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* FOTO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-1 relative aspect-square max-w-md mx-auto lg:mx-0 w-full bg-slate-100 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl dark:shadow-blue-900/10 border border-slate-200 dark:border-slate-700"
        >
          <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-600 bg-slate-50 dark:bg-slate-900">
             <span className="text-8xl">🚀</span>
          </div>
        </motion.div>

        {/* TEXTO */}
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
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-[0.8em] bg-blue-600 dark:bg-cyan-400 ml-1 align-bottom"
            />
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
          >
            {PROFILE.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/*GRUPO DE BOTONES*/}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 dark:shadow-blue-900/20 hover:-translate-y-1">
                Ver Proyectos
              </a>
              <a href="#contact" className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition hover:-translate-y-1">
                Contacto
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition hover:-translate-y-1"
              >
                <FileText size={18} /> CV
              </a>
            </div>

            {/* Iconos Sociales */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-slate-400 transition-all transform hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}