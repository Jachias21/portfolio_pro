import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-[#020617] min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      
      <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 text-slate-500 py-8 text-center text-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} Joan Albert Chías. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}