'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/portfolio';

type ExperienceEntry = (typeof EXPERIENCE)[0];

interface ExperienceItemProps {
  item: ExperienceEntry;
  index: number;
  total: number;
}

export default function ExperienceItem({ item, index, total }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-5"
    >
      <div
        className="absolute left-0 top-1.5 rounded-full"
        style={{ width: '7px', height: '7px', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent-glow)' }}
      />
      {index < total - 1 && (
        <div
          className="absolute left-[3px] top-5 bottom-0 w-px"
          style={{ background: 'var(--border-subtle)' }}
        />
      )}
      <div style={{ paddingBottom: '1.5rem' }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          {item.period}
        </span>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0.2rem 0 0.2rem' }}>
          {item.role}
        </h4>
        <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.375rem' }}>
          {item.company}
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300 }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
