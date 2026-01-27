import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      {/* Añadí un div para espaciado o separación si es necesario */}
      <div className="relative z-20 bg-white">
        <Experience />
        <Projects />
        <Contact />
      </div>
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Joan Albert. Construido con Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}