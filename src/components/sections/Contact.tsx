'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { SOCIALS } from '@/data/portfolio';

export default function Contact() {
  const whatsappNumber = "34669001746";

  const socialLinks = [
    {
      icon: <Linkedin size={40} />, 
      href: SOCIALS.linkedin,
      label: "LinkedIn",
      color: "hover:text-[#0077b5]" 
    },
    {
      icon: <Github size={40} />,
      href: SOCIALS.github,
      label: "GitHub",
      color: "hover:text-slate-900 dark:hover:text-white"
    },
    {
      icon: <Phone size={40} />,
      href: `https://wa.me/${whatsappNumber}`,
      label: "WhatsApp",
      color: "hover:text-[#25D366]" 
    },
    {
      icon: <Mail size={40} />,
      href: `mailto:${SOCIALS.email}`,
      label: "Email",
      color: "hover:text-blue-600"
    }
  ];

  return (
    // He quitado el div de "Fondo decorativo" que había aquí
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 flex items-center min-h-[50vh]">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Contenedor Flex: Texto Izquierda | Iconos Derecha */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">
          
          {/* BLOQUE DE TEXTO */}
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold tracking-widest border border-green-200 dark:border-green-800 uppercase"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for hire
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
            >
              Let’s start a <br />
              <span className="text-blue-600 dark:text-blue-500">project together.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              Me especializo en construir aplicaciones escalables e interfaces intuitivas. 
              Hablemos sobre cómo puedo ayudarte.
            </motion.p>
          </div>

          {/* BLOQUE DE ICONOS (Alineado a la derecha por el contenedor padre) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-8 lg:pb-2"
          >
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-slate-400 transition-all transform hover:scale-125 hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}