'use client';

import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle'; 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Stack & Skills', href: '#stack' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-slate-200 dark:border-slate-800 py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Terminal size={20} className="text-white" />
          </div>
          <span>Joan<span className="text-blue-600 dark:text-slate-400">Dev</span></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle /> {/* <--- Aquí está el botón de cambio */}
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 dark:shadow-blue-900/20"
          >
            Ver CV
          </a>
        </div>
      </div>
    </nav>
  );
}