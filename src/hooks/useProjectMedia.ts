'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import type { ProjectMedia } from '@/data/portfolio';

export interface MediaState {
  activeIdx: number;
  loaded: Set<number>;
  goTo: (idx: number) => void;
  markLoaded: (idx: number) => void;
}

/**
 * Manages active slide index, tracks which images have been loaded,
 * and optionally auto-advances on a given interval (ms).
 */
export function useProjectMedia(
  media: ProjectMedia[],
  /** Pass a positive number (ms) to enable auto-advance. 0 = off. */
  autoPlayInterval = 0,
): MediaState {
  const [activeIdx, setActiveIdx] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setActiveIdx(idx);
      // Pre-mark the adjacent slide to start loading it
      setLoaded(prev => {
        const next = new Set(prev);
        next.add(idx);
        if (idx + 1 < media.length) next.add(idx + 1);
        return next;
      });
    },
    [media.length],
  );

  const markLoaded = useCallback((idx: number) => {
    setLoaded(prev => {
      if (prev.has(idx)) return prev;
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!autoPlayInterval || media.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setActiveIdx(prev => {
        const next = (prev + 1) % media.length;
        // Pre-load the next-next slide
        setLoaded(s => {
          if (s.has(next)) return s;
          const ns = new Set(s);
          ns.add(next);
          if (next + 1 < media.length) ns.add(next + 1);
          return ns;
        });
        return next;
      });
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlayInterval, media.length]);

  return { activeIdx, loaded, goTo, markLoaded };
}
