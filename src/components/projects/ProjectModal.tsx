'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/portfolio';
import { PROJECT_DETAILS } from '@/data/projectDetails';

type Project = (typeof PROJECTS)[0];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const details = PROJECT_DETAILS[project.id];
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(6, 7, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '92dvh',
          overflowY: 'auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '1.5rem',
          position: 'relative',
          scrollbarWidth: 'none',
        }}
      >
        {/* ── Close button ── */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'sticky',
            top: '1rem',
            float: 'right',
            marginRight: '1rem',
            zIndex: 10,
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.13)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'; }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* ── Hero image ── */}
        <div style={{ borderRadius: '1.375rem 1.375rem 0 0', overflow: 'hidden', height: '260px', position: 'relative' }}>
          <img
            src={details.images[0]}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%)`,
          }} />
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '100px',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: `${details.accentColor}20`,
            border: `1px solid ${details.accentColor}40`,
            color: details.accentColor,
          }}>
            Proyecto destacado
          </div>
        </div>

        {/* ── Content ── */}
        <div style={{ padding: '0 1.75rem 2rem' }}>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                fontSize: '0.65rem',
                fontWeight: 600,
                background: `${details.accentColor}12`,
                color: details.accentColor,
                border: `1px solid ${details.accentColor}20`,
                letterSpacing: '0.03em',
              }}>{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}>{project.title}</h2>

          {/* Two-column: description + metadata */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start', marginBottom: '2rem' }}>
            <div>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}>{details.longDesc}</p>

              {details.images[1] && (
                <div style={{ marginTop: '1.25rem', borderRadius: '0.875rem', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                  <img
                    src={details.images[1]}
                    alt={`${project.title} screenshot`}
                    style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '200px' }}
                  />
                </div>
              )}
            </div>

            {/* Metadata panel */}
            <div style={{
              background: 'var(--bg-card-inner)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '0.875rem',
              padding: '1.25rem',
              minWidth: '160px',
              flexShrink: 0,
            }}>
              {[
                { label: 'Cliente', value: details.client },
                { label: 'Año', value: details.year },
                { label: 'Rol', value: details.role },
                { label: 'Timeline', value: details.timeline },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              ))}
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: details.accentColor,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  Ver en GitHub
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Features */}
          <div>
            <p style={{
              fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.875rem',
            }}>Aspectos técnicos</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {details.features.map(f => (
                <div key={f.title} style={{
                  padding: '1.25rem',
                  borderRadius: '0.875rem',
                  background: `${details.accentColor}08`,
                  border: `1px solid ${details.accentColor}18`,
                }}>
                  <div style={{
                    width: '2rem', height: '2rem',
                    borderRadius: '0.5rem',
                    background: `${details.accentColor}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.875rem',
                    color: details.accentColor,
                    marginBottom: '0.75rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L12.5 4V10L7 13L1.5 10V4L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.375rem',
                    lineHeight: 1.2,
                  }}>{f.title}</p>
                  <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
