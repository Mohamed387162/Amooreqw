'use client';

import { useEffect } from 'react';

const GOOGLE_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap';

export function NonBlockingFonts() {
  useEffect(() => {
    if (document.getElementById('amoore-google-fonts')) return;
    const link = document.createElement('link');
    link.id = 'amoore-google-fonts';
    link.rel = 'stylesheet';
    link.href = GOOGLE_FONTS_HREF;
    document.head.appendChild(link);
  }, []);

  return null;
}
