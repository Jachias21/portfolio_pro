'use client';

import { motion, Variants } from 'framer-motion';
import { 
  SiSpringboot, SiPhp, SiLaravel, SiPython, SiMysql, SiMongodb, 
  SiKotlin, SiFlutter, SiDart, SiReact, SiTypescript, 
  SiGit, SiGithub, SiGnubash, SiPostman, SiIntellijidea, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { BrainCircuit, BarChart3 } from 'lucide-react';

const STACK_BLOCKS = [
  {
    title: 'Backend & Data',
    span: 'lg:col-span-2',
    accent: '#5b7fff',
    tags: [
      { name: 'Java', color: '#007396', icon: FaJava },
      { name: 'Spring Boot', color: '#6DB33F', icon: SiSpringboot },
      { name: 'PHP', color: '#777BB4', icon: SiPhp },
      { name: 'Laravel', color: '#FF2D20', icon: SiLaravel },
      { name: 'Python', color: '#F8C63D', icon: SiPython },
      { name: 'MySQL', color: '#4479A1', icon: SiMysql },
      { name: 'MongoDB', color: '#47A248', icon: SiMongodb },
    ],
    description: 'Construyendo lógica de servidor robusta y pipelines de datos eficientes y escalables.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7v10M4 7a3 3 0 016 0M4 7a3 3 0 00-3 3v4a3 3 0 003 3m0 0a3 3 0 006 0M10 7v10m0 0a3 3 0 006 0m0 0a3 3 0 003-3v-4a3 3 0 00-3-3m0 0a3 3 0 00-6 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Móvil y Frontend',
    span: 'lg:col-span-1',
    accent: '#a78bfa',
    tags: [
      { name: 'Kotlin', color: '#7F52FF', icon: SiKotlin },
      { name: 'Flutter', color: '#54C5F8', icon: SiFlutter },
      { name: 'Dart', color: '#0175C2', icon: SiDart },
      { name: 'React', color: '#61DAFB', icon: SiReact },
      { name: 'TypeScript', color: '#3178C6', icon: SiTypescript },
      { name: 'React Native', color: '#61DAFB', icon: SiReact },
    ],
    description: 'Aplicaciones nativas y multiplataforma con una UX fluida e intuitiva.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'IA y Big Data',
    span: 'lg:col-span-1',
    accent: '#34d399',
    tags: [
      { name: 'Python', color: '#F8C63D', icon: SiPython },
      { name: 'Data Analysis', color: '#FFCA28', icon: BarChart3 },
      { name: 'Prompt Eng.', color: '#F4A261', icon: BrainCircuit },
      { name: 'ML', color: '#E76F51', icon: BrainCircuit },
    ],
    description: 'Integrando inteligencia — actualmente cursando el Máster en IA y Big Data en STUCOM.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'DevOps & Tools',
    span: 'lg:col-span-2',
    accent: '#fb923c',
    tags: [
      { name: 'Git', color: '#F05032', icon: SiGit },
      { name: 'GitHub', color: '#ECECEC', icon: SiGithub },
      { name: 'Bash', color: '#4EAA25', icon: SiGnubash },
      { name: 'Postman', color: '#FF6C37', icon: SiPostman },
      { name: 'IntelliJ', color: '#FE315D', icon: SiIntellijidea },
      { name: 'VS Code', color: '#007ACC', icon: VscVscode },
      { name: 'Docker', color: '#2496ED', icon: SiDocker },
    ],
    description: 'Optimizando flujos de trabajo desde el desarrollo hasta el despliegue.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};


export default function TechStack() {
  return (
    <section id="stack" style={{ paddingTop: '7rem', paddingBottom: '7rem', position: 'relative' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
          style={{ maxWidth: '540px' }}
        >
          <h2
            className="section-heading mt-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Tech Stack
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
            Adaptable en plataformas móviles, backend y tecnologías emergentes — siempre aprendiendo, siempre construyendo.
          </p>
        </motion.div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STACK_BLOCKS.map((block, i) => (
            <motion.div
              key={block.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`card-shell ${block.span}`}
            >
              <div
                className="card-inner p-7 flex flex-col gap-5 h-full"
                style={{ minHeight: '220px' }}
              >
                {/* Icon + title row */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: '2.75rem', height: '2.75rem',
                      background: `${block.accent}18`,
                      border: `1px solid ${block.accent}30`,
                      color: block.accent,
                      flexShrink: 0,
                    }}
                  >
                    {block.icon}
                  </div>
                  {/* Decorative count */}
                  <span
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {block.tags.length} tools
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.2,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {block.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300 }}>
                    {block.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="scroll-strip mt-auto" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
                  {block.tags.map((tag) => {
                    const Icon = tag.icon;
                    return (
                      <span
                        key={tag.name}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          background: `${tag.color}15`,
                          color: tag.color,
                          border: `1px solid ${tag.color}30`,
                          flexShrink: 0,
                          letterSpacing: '0.02em',
                        }}
                      >
                        <Icon style={{ fontSize: '0.9rem' }} />
                        {tag.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
