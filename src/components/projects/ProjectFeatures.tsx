'use client';

interface Feature {
  title: string;
  desc: string;
  icon?: string;
}

interface ProjectFeaturesProps {
  features: Feature[];
  accentColor: string;
}

export default function ProjectFeatures({ features, accentColor }: ProjectFeaturesProps) {
  return (
    <div>
      <p style={{
        fontSize: '0.58rem',
        fontWeight: 800,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: '0.875rem',
      }}>
        Aspectos técnicos
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
        gap: '0.625rem',
      }}>
        {features.map(f => (
          <div
            key={f.title}
            style={{
              padding: '1rem 1.125rem',
              borderRadius: '0.75rem',
              background: `${accentColor}07`,
              border: `1px solid ${accentColor}18`,
            }}
          >
            {/* Icon dot */}
            <div style={{
              width: '1.75rem',
              height: '1.75rem',
              borderRadius: '0.5rem',
              background: `${accentColor}16`,
              border: `1px solid ${accentColor}25`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.6rem',
            }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 1L12.5 4V10L7 13L1.5 10V4L7 1Z"
                  stroke={accentColor}
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p style={{
              fontSize: '0.8125rem',
              color: 'var(--text-primary)',
              fontWeight: 600,
              marginBottom: '0.3rem',
              lineHeight: 1.25,
            }}>
              {f.title}
            </p>
            <p style={{
              fontSize: '0.775rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
