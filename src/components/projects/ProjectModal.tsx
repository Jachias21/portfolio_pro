'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { PROJECTS } from '@/data/portfolio';
import { PROJECT_DETAILS, PROJECT_EMOJIS } from '@/data/projectDetails';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectMetaPanel from '@/components/projects/ProjectMetaPanel';
import ProjectFeatures from '@/components/projects/ProjectFeatures';

type Project = (typeof PROJECTS)[0];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const details = PROJECT_DETAILS[project.id];
  const overlayRef = useRef<HTMLDivElement>(null);

  // ── Markdown loading ────────────────────────────────────────────────────────
  const [mdContent, setMdContent] = useState<string | null>(null);
  const [mdLoading, setMdLoading] = useState(false);

  useEffect(() => {
    const slug = (project as typeof project & { slug?: string }).slug;
    if (!slug) return;

    setMdLoading(true);
    setMdContent(null);

    fetch(`/content/${slug}.md`)
      .then(r => r.ok ? r.text() : null)
      .then(text => { setMdContent(text); setMdLoading(false); })
      .catch(() => { setMdLoading(false); });
  }, [project]);

  // ── Close handlers ──────────────────────────────────────────────────────────
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const tools = (project as typeof project & { tools?: string[] }).tools;

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(6, 7, 13, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.975 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        exit={{ opacity: 0,  y: 16,   scale: 0.985 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        style={{
          width: '100%',
          maxWidth: '980px',
          maxHeight: '92dvh',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-card)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* ── Top bar ── */}
        <ModalHeader
          title={project.title}
          tags={project.tags}
          accentColor={details.accentColor}
          onClose={onClose}
        />

        {/* ── Scrollable body ── */}
        <div style={{ overflowY: 'auto', flex: 1, scrollbarWidth: 'none' }}>

          {/* ── Hero grid: gallery + meta ── */}
          <div
            className="modal-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(260px, 48%, 480px) 1fr',
              minHeight: '340px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Gallery */}
            <div style={{ position: 'relative', minHeight: '300px' }}>
              <ProjectGallery
                media={project.media ?? []}
                title={project.title}
                accentColor={details.accentColor}
                fallbackEmoji={PROJECT_EMOJIS[project.id]}
              />
            </div>

            {/* Description + meta */}
            <div style={{
              padding: '1.75rem 1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                flex: 1,
              }}>
                {details.longDesc}
              </p>

              <ProjectMetaPanel
                accentColor={details.accentColor}
                githubUrl={project.link}
                tools={tools}
              />
            </div>
          </div>

          {/* ── Markdown content ── */}
          {(mdLoading || mdContent) && (
            <div style={{
              padding: '2rem 2rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <p style={{
                fontSize: '0.58rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}>
                Documentación del proyecto
              </p>

              {mdLoading ? (
                /* Skeleton */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', paddingBottom: '2rem' }}>
                  {[100, 90, 75, 60, 85].map((w, i) => (
                    <div key={i} style={{
                      height: '12px',
                      width: `${w}%`,
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.06)',
                      animation: 'pulse 1.6s ease-in-out infinite',
                    }} />
                  ))}
                </div>
              ) : (
                <div className="md-prose" style={{ paddingBottom: '2rem' }}>
                  <ReactMarkdown>{mdContent!}</ReactMarkdown>
                </div>
              )}
            </div>
          )}

          {/* ── Features grid ── */}
          <div style={{ padding: '1.75rem' }}>
            <ProjectFeatures
              features={details.features}
              accentColor={details.accentColor}
            />
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .modal-hero-grid { grid-template-columns: 1fr !important; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1;   }
        }

        /* ── Editorial markdown styles ── */
        .md-prose { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.8; font-weight: 300; }
        .md-prose h1, .md-prose h2, .md-prose h3 {
          font-family: var(--font-display);
          color: var(--text-primary);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 1.5rem 0 0.5rem;
          line-height: 1.2;
        }
        .md-prose h1 { font-size: 1.25rem; }
        .md-prose h2 { font-size: 1.05rem; }
        .md-prose h3 { font-size: 0.9rem; color: var(--text-secondary); }
        .md-prose p  { margin: 0.6rem 0; }
        .md-prose ul, .md-prose ol { padding-left: 1.25rem; margin: 0.5rem 0; }
        .md-prose li { margin: 0.3rem 0; }
        .md-prose strong { color: var(--text-primary); font-weight: 600; }
        .md-prose em    { color: var(--text-secondary); font-style: italic; }
        .md-prose code  {
          font-size: 0.8rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          padding: 0.1rem 0.35rem;
          font-family: 'JetBrains Mono', monospace;
        }
        .md-prose hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 1.5rem 0;
        }
      `}</style>
    </motion.div>
  );
}

// ── ModalHeader ───────────────────────────────────────────────────────────────
function ModalHeader({
  title, tags, accentColor, onClose,
}: {
  title: string; tags: string[]; accentColor: string; onClose: () => void;
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      padding: '1rem 1.25rem 1rem 1.5rem',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', minWidth: 0 }}>
        <span style={{
          display: 'inline-block',
          width: '8px', height: '8px',
          borderRadius: '50%',
          background: accentColor,
          boxShadow: `0 0 8px ${accentColor}80`,
          flexShrink: 0,
        }} />

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 3vw, 1.375rem)',
          color: 'var(--text-primary)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          margin: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          {title}
        </h2>

        <div className="modal-tags" style={{ display: 'flex', gap: '0.375rem', flexShrink: 0 }}>
          {tags.slice(0, 3).map(tag => (
            <span key={tag} style={{
              padding: '0.15rem 0.5rem',
              borderRadius: '5px',
              fontSize: '0.6rem',
              fontWeight: 700,
              background: `${accentColor}10`,
              color: accentColor,
              border: `1px solid ${accentColor}1f`,
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          flexShrink: 0,
          width: '2rem', height: '2rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'var(--text-secondary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)';
          (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
          (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <style>{`
        @media (max-width: 480px) {
          .modal-tags { display: none !important; }
        }
      `}</style>
    </div>
  );
}
