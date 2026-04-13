import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100dvh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />

      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
        }}
      >
        <p>
          © {new Date().getFullYear()} Joan Albert Chías Català — Built with Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
