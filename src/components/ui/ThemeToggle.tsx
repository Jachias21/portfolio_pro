'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitamos el "flicker" inicial esperando a que el componente se monte
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`
        relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none border
        ${isDark 
          ? 'bg-slate-800 border-slate-700' 
          : 'bg-blue-100 border-blue-200'
        }
      `}
      aria-label="Cambiar tema"
    >
      {/* Iconos de fondo (decorativos) */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun size={14} className={`text-amber-500 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        <Moon size={14} className={`text-blue-200 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* La "bola" del interruptor que se mueve */}
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center relative z-10"
        // Animación mágica de Framer Motion
        animate={{ x: isDark ? 32 : 0 }} 
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={14} className="text-slate-900" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}