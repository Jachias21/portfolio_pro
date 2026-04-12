'use client';

import { motion } from 'framer-motion';

const STACK_BLOCKS = [
  {
    title: 'Backend & Data',
    span: 'lg:col-span-2',
    accent: '#5b7fff',
    tags: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Python', 'MySQL', 'MongoDB'],
    description: 'Building robust server-side logic and efficient data pipelines that scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7v10M4 7a3 3 0 016 0M4 7a3 3 0 00-3 3v4a3 3 0 003 3m0 0a3 3 0 006 0M10 7v10m0 0a3 3 0 006 0m0 0a3 3 0 003-3v-4a3 3 0 00-3-3m0 0a3 3 0 00-6 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Mobile & Frontend',
    span: 'lg:col-span-1',
    accent: '#a78bfa',
    tags: ['Kotlin', 'Flutter', 'Dart', 'React', 'TypeScript', 'React Native'],
    description: 'Native and cross-platform apps with fluid, intuitive UX.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI & Big Data',
    span: 'lg:col-span-1',
    accent: '#34d399',
    tags: ['Python', 'Data Analysis', 'Prompt Engineering', 'ML Fundamentals'],
    description: 'Integrating intelligence — currently mastering AI & Big Data at STUCOM.',
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
    tags: ['Git', 'GitHub', 'Bash Scripting', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Docker basics'],
    description: 'Streamlining workflows from development to deployment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
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
          <span className="eyebrow mb-4" style={{ display: 'inline-flex' }}>What I use</span>
          <h2
            className="section-heading mt-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Tech Stack &{' '}
            <span className="italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-secondary)' }}>
              expertise
            </span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300 }}>
            Adaptable across mobile, backend, and emerging technologies — always learning, always building.
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
                <div className="scroll-strip mt-auto" style={{ flexWrap: 'wrap' }}>
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        background: `${block.accent}10`,
                        color: block.accent,
                        border: `1px solid ${block.accent}20`,
                        flexShrink: 0,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
