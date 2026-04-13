'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, EXPERIENCE, EDUCATION } from '@/data/portfolio';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import ExperienceItem from '@/components/projects/ExperienceItem';

type Project = (typeof PROJECTS)[0];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 className="section-heading">
            Proyectos &{' '}
            <span className="italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}>
              experiencia
            </span>
          </h2>
          <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>
            Pasa el cursor sobre una tarjeta para expandir los detalles del proyecto.
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
          gap: '1rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Experience + Education */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}>

          {/* Experience */}
          <div>
            <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Experiencia laboral
            </p>
            <div className="card-shell">
              <div className="card-inner" style={{ padding: '1.5rem' }}>
                {EXPERIENCE.map((item, i) => (
                  <ExperienceItem key={item.id} item={item} index={i} total={EXPERIENCE.length} />
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Formación académica
            </p>
            <div className="card-shell">
              <div className="card-inner" style={{ padding: '1.5rem' }}>
                {EDUCATION.map((edu, i) => (
                  <div
                    key={edu.id}
                    style={{
                      marginBottom: i < EDUCATION.length - 1 ? '1.25rem' : 0,
                      paddingBottom: i < EDUCATION.length - 1 ? '1.25rem' : 0,
                      borderBottom: i < EDUCATION.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    }}
                  >
                    <p style={{ fontSize: '0.62rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {edu.period}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.15rem' }}>
                      {edu.degree}
                    </p>
                    <p style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
