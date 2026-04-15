'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjectMedia } from '@/hooks/useProjectMedia';
import type { ProjectMedia } from '@/data/portfolio';

interface ProjectGalleryProps {
  media: ProjectMedia[];
  title: string;
  accentColor: string;
  fallbackEmoji?: string;
}

const slideVariants = {
  enter:  { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit:   { opacity: 0, x: -40 },
};

export default function ProjectGallery({
  media,
  title,
  accentColor,
  fallbackEmoji = '💡',
}: ProjectGalleryProps) {
  const { activeIdx, loaded, goTo } = useProjectMedia(media, 2500);

  // ── No media fallback ──────────────────────────────────────────────────────
  if (!media.length) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          background: `linear-gradient(135deg, ${accentColor}14 0%, ${accentColor}07 100%)`,
          backgroundImage: `radial-gradient(circle, ${accentColor}18 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      >
        <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>{fallbackEmoji}</span>
        <span style={{ fontSize: '0.7rem', color: accentColor, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {title}
        </span>
      </div>
    );
  }

  const current = media[activeIdx];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 0 }}>

        <div style={{ position: 'relative', flex: 1, overflow: 'hidden', background: '#080910' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIdx}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {current.type === 'image' ? (
              <Image
                src={current.src}
                alt={current.alt ?? `${title} screenshot ${activeIdx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ objectFit: 'contain' }}
                loading={activeIdx === 0 ? 'eager' : 'lazy'}
                priority={activeIdx === 0}
              />
            ) : (
              <video
                key={`video-${activeIdx}`}
                src={current.src}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            )}

            {/* Bottom fade */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(10,11,20,0.55) 100%)',
              pointerEvents: 'none',
            }} />
          </motion.div>
        </AnimatePresence>

        {/* Counter badge */}
        {media.length > 1 && (
          <div style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '100px',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            background: 'rgba(0,0,0,0.55)',
            color: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}>
            {activeIdx + 1} / {media.length}
          </div>
        )}
      </div>

      {/* ── Thumbnail strip (only when >1 slide) ── */}
      {media.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '0.375rem',
          padding: '0.5rem',
          background: 'rgba(0,0,0,0.35)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {media.map((item, i) => {
            const isActive = i === activeIdx;
            const shouldLoad = loaded.has(i);

            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  position: 'relative',
                  width: '52px',
                  height: '38px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  cursor: 'pointer',
                  border: isActive
                    ? `2px solid ${accentColor}`
                    : '2px solid transparent',
                  opacity: isActive ? 1 : 0.55,
                  transition: 'opacity 0.2s, border-color 0.2s',
                  background: '#111',
                  padding: 0,
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.opacity = '0.55'; }}
              >
                {shouldLoad && item.type === 'image' && (
                  <Image
                    src={item.src}
                    alt={item.alt ?? `Thumbnail ${i + 1}`}
                    fill
                    sizes="52px"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                )}
                {shouldLoad && item.type === 'video' && (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}
                {!shouldLoad && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `${accentColor}12`,
                  }} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
