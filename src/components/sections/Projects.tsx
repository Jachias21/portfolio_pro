'use client';

import { motion } from 'framer-motion';
import { PROJECTS, EXPERIENCE } from '@/data/portfolio';

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) => {
  const colors = ['#5b7fff', '#a78bfa', '#34d399'];
  const accent = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="card-shell group"
      style={{ cursor: 'default' }}
    >
      <div className="card-inner flex flex-col" style={{ minHeight: '320px' }}>
        {/* Project image / visual */}
        <div
          className="relative overflow-hidden flex items-center justify-center"
          style={{
            height: '160px',
            background: `linear-gradient(135deg, ${accent}12 0%, ${accent}06 100%)`,
            borderRadius: 'var(--radius-inner) var(--radius-inner) 0 0',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Decorative grid */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `radial-gradient(circle, ${accent}20 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
              opacity: 0.5,
            }}
          />
          <div
            className="relative z-10 flex items-center justify-center rounded-2xl text-2xl"
            style={{
              width: '3.5rem', height: '3.5rem',
              background: `${accent}15`,
              border: `1px solid ${accent}25`,
              fontSize: '1.5rem',
            }}
          >
            {index === 0 ? '🎰' : index === 1 ? '📱' : '💡'}
          </div>

          {/* Hover arrow overlay */}
          <a
            href={project.link !== '#' ? project.link : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-all"
            style={{
              width: '2rem', height: '2rem',
              background: `${accent}20`,
              border: `1px solid ${accent}30`,
              color: accent,
              transitionDuration: '0.3s',
            }}
            aria-label={`Open ${project.title}`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '5px',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  background: `${accent}10`,
                  color: accent,
                  border: `1px solid ${accent}18`,
                  letterSpacing: '0.03em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              lineHeight: 1.25,
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300, flex: 1 }}>
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceItem = ({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="relative pl-6"
  >
    {/* Timeline dot */}
    <div
      className="absolute left-0 top-1.5 rounded-full"
      style={{ width: '8px', height: '8px', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent-glow)' }}
    />
    {/* Line */}
    {index < EXPERIENCE.length - 1 && (
      <div className="absolute left-[3px] top-5 bottom-0 w-px" style={{ background: 'var(--border-subtle)' }} />
    )}

    <div className="pb-8">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          {item.period}
        </span>
      </div>
      <h4
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          color: 'var(--text-primary)',
          marginBottom: '0.25rem',
        }}
      >
        {item.role}
      </h4>
      <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.5rem' }}>
        {item.company}
      </p>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300 }}>
        {item.description}
      </p>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>Selected work</span>
          <h2 className="section-heading mt-4">
            Projects &{' '}
            <span className="italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}>
              experience
            </span>
          </h2>
        </motion.div>

        {/* Two-column: Projects (left) + Experience (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

          {/* Projects grid */}
          <div>
            <p
              style={{
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem',
              }}
            >
              Featured projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>

          {/* Experience timeline */}
          <div>
            <p
              style={{
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem',
              }}
            >
              Experience
            </p>
            <div className="card-shell">
              <div className="card-inner p-6">
                {EXPERIENCE.map((item, i) => (
                  <ExperienceItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* Education block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="card-shell mt-4"
            >
              <div className="card-inner p-6">
                <p
                  style={{
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem',
                  }}
                >
                  Education
                </p>
                {[
                  { degree: "Master's in AI & Big Data", school: 'STUCOM', period: '2025–2026' },
                  { degree: "GS Desarrollo de Aplicaciones Multiplataforma (DAM)", school: 'STUCOM', period: '2023–2025' },
                ].map((edu, i) => (
                  <div key={i} className={i > 0 ? 'mt-4 pt-4' : ''} style={i > 0 ? { borderTop: '1px solid var(--border-subtle)' } : {}}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                      {edu.period}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '2px' }}>
                      {edu.degree}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
                      {edu.school}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
