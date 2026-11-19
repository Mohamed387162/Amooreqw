'use client';

import { useSyncExternalStore } from 'react';

let currentTimestamp = 0;
const listeners = new Set<() => void>();
let intervalId: ReturnType<typeof setInterval> | null = null;

function subscribe(callback: () => void) {
  listeners.add(callback);
  if (currentTimestamp === 0) {
    currentTimestamp = Date.now();
  }
  if (!intervalId && typeof window !== 'undefined') {
    intervalId = setInterval(() => {
      currentTimestamp = Date.now();
      listeners.forEach((fn) => fn());
    }, 30_000);
  }
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0 && intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
}

function getSnapshot(): number {
  if (currentTimestamp === 0) {
    currentTimestamp = Date.now();
  }
  return currentTimestamp;
}

function getServerSnapshot(): number {
  return 0;
}

/**
 * Returns a hydration-safe client timestamp (0 on SSR/static pre-render,
 * live epoch ms on client) so static GitHub Pages builds never freeze clock state
 * and never trigger React hydration mismatches.
 */
export function useLiveTimestamp(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
