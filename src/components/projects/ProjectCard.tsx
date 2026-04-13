'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/portfolio';
import { PROJECT_DETAILS, PROJECT_EMOJIS } from '@/data/projectDetails';

type Project = (typeof PROJECTS)[0];

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const details = PROJECT_DETAILS[project.id];
  const accent = details?.accentColor ?? '#5b7fff';
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        borderRadius: 'var(--radius-card)',
        border: `1px solid ${hovered ? accent + '35' : 'var(--border-subtle)'}`,
        background: hovered ? `${accent}08` : 'rgba(255,255,255,0.02)',
        padding: '1.5px',
        transition: 'border-color 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-inner)',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Visual header */}
        <div style={{
          height: '140px',
          background: `linear-gradient(135deg, ${accent}14 0%, ${accent}07 100%)`,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(circle, ${accent}22 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
            opacity: hovered ? 0.7 : 0.4,
            transition: 'opacity 0.35s',
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            width: '3rem', height: '3rem',
            borderRadius: '0.875rem',
            background: `${accent}16`,
            border: `1px solid ${accent}28`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.35rem',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}>
            {PROJECT_EMOJIS[project.id] ?? '💡'}
          </div>

          {/* "Ver detalle" pill on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute', bottom: '0.75rem', right: '0.75rem',
              display: 'flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.2rem 0.625rem',
              borderRadius: '100px',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              background: `${accent}18`,
              border: `1px solid ${accent}30`,
              color: accent,
            }}
          >
            Ver detalle
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H4M9 1v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem 1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} style={{
                padding: '0.15rem 0.5rem',
                borderRadius: '5px',
                fontSize: '0.6rem',
                fontWeight: 600,
                background: `${accent}10`,
                color: accent,
                border: `1px solid ${accent}18`,
                letterSpacing: '0.03em',
              }}>{tag}</span>
            ))}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.075rem',
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            margin: 0,
          }}>{project.title}</h3>
          <p style={{
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            fontWeight: 300,
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>{project.description}</p>

          {/* Bottom row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: '0.25rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
          }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {details?.year ?? '2025'}
            </span>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '0.25rem',
              fontSize: '0.7rem', fontWeight: 600,
              color: hovered ? accent : 'var(--text-muted)',
              transition: 'color 0.25s',
            }}>
              Expandir
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H6M11 1v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
