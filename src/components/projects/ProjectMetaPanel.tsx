'use client';

import {
  SiSpringboot, SiMysql, SiAndroid, SiKotlin,
  SiPython, SiStreamlit, SiScikitlearn, SiPandas,
  SiPytorch, SiTensorflow, SiKeras, SiNumpy,
  SiAngular, SiMongodb, SiFastapi, SiGithub,
  SiIntellijidea, SiPostman, SiJupyter,
  SiDocker, SiGit,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import {
  Map, Satellite, Bot, BarChart3, Brain,
  Code2, Database, Cloud, Wrench, Globe,
} from 'lucide-react';
import type { ComponentType } from 'react';

// ── Icon + color registry ─────────────────────────────────────────────────────
type IconEntry = { icon: ComponentType<{ style?: React.CSSProperties; className?: string }>; color: string };

const TOOL_MAP: Record<string, IconEntry> = {
  'Java':         { icon: FaJava,        color: '#007396' },
  'Kotlin':       { icon: SiKotlin,      color: '#7F52FF' },
  'Spring Boot':  { icon: SiSpringboot,  color: '#6DB33F' },
  'MySQL':        { icon: SiMysql,       color: '#4479A1' },
  'Android':      { icon: SiAndroid,     color: '#3DDC84' },
  'Railway':      { icon: Cloud,         color: '#8B5CF6' },
  'GitHub':       { icon: SiGithub,      color: '#E5E7EB' },
  'Git':          { icon: SiGit,         color: '#F05032' },
  'IntelliJ':     { icon: SiIntellijidea,color: '#FE315D' },
  'Postman':      { icon: SiPostman,     color: '#FF6C37' },
  'Python':       { icon: SiPython,      color: '#F8C63D' },
  'Streamlit':    { icon: SiStreamlit,   color: '#FF4B4B' },
  'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  'Pandas':       { icon: SiPandas,      color: '#30BAE3' },
  'Folium':       { icon: Map,           color: '#77B829' },
  'Nominatim':    { icon: Satellite,     color: '#5B7FFF' },
  'VS Code':      { icon: VscVscode,     color: '#007ACC' },
  'LightGBM':     { icon: BarChart3,     color: '#29ABE2' },
  'Optuna':       { icon: Brain,         color: '#3B82F6' },
  'Telegram API': { icon: Bot,           color: '#26A5E4' },
  'AEMET API':    { icon: Globe,         color: '#34D399' },
  'PyTorch':      { icon: SiPytorch,     color: '#EE4C2C' },
  'Angular':      { icon: SiAngular,     color: '#DD0031' },
  'Spotify API':  { icon: BarChart3,     color: '#1DB954' },
  'MongoDB':      { icon: SiMongodb,     color: '#47A248' },
  'FastAPI':      { icon: SiFastapi,     color: '#009688' },
  'TensorFlow':   { icon: SiTensorflow, color: '#FF6F00' },
  'Keras':        { icon: SiKeras,       color: '#D00000' },
  'NumPy':        { icon: SiNumpy,       color: '#4DABCF' },
  'Matplotlib':   { icon: BarChart3,     color: '#11557C' },
  'Jupyter':      { icon: SiJupyter,     color: '#F37626' },
  'Docker':       { icon: SiDocker,      color: '#2496ED' },
};

function ToolBadge({ name }: { name: string }) {
  const entry = TOOL_MAP[name];
  const color = entry?.color ?? '#888';
  const Icon = entry?.icon ?? Code2;

  return (
    <span
      title={name}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.3rem 0.65rem',
        borderRadius: '7px',
        fontSize: '0.68rem',
        fontWeight: 600,
        background: `${color}14`,
        color,
        border: `1px solid ${color}30`,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
      }}
    >
      <Icon style={{ fontSize: '0.85rem', flexShrink: 0 }} />
      {name}
    </span>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface MetaItem {
  label: string;
  value: string;
}

interface ProjectMetaPanelProps {
  items?: MetaItem[];
  accentColor: string;
  githubUrl?: string;
  tools?: string[];
}

export default function ProjectMetaPanel({
  items,
  accentColor,
  githubUrl,
  tools,
}: ProjectMetaPanelProps) {
  return (
    <aside
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '0.875rem',
        padding: '1.25rem 1.25rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Meta rows — only when items are provided */}
      {items && items.length > 0 && (
        <>
          <p style={{
            fontSize: '0.58rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '-0.25rem',
          }}>
            Detalles
          </p>

          {items.map(({ label, value }) => (
            <div key={label}>
              <p style={{
                fontSize: '0.6rem',
                color: 'var(--text-muted)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}>
                {label}
              </p>
              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--text-primary)',
                fontWeight: 500,
                lineHeight: 1.4,
              }}>
                {value}
              </p>
            </div>
          ))}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        </>
      )}

      {/* ── Tools & Tech ── */}
      {tools && tools.length > 0 && (
        <>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <div>
            <p style={{
              fontSize: '0.58rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '0.625rem',
            }}>
              Herramientas y Tecnología
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {tools.map(t => <ToolBadge key={t} name={t} />)}
            </div>
          </div>
        </>
      )}

      {/* Divider + GitHub link */}
      {githubUrl && githubUrl !== '#' && (
        <>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: accentColor,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.65'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Ver en GitHub
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1 9L9 1M9 1H4M9 1v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </>
      )}
    </aside>
  );
}
