'use client';

import { motion } from 'motion/react';

interface AmooreLogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

/**
 * Vector emblem faithful to the Amoore Specialist Hospital brand mark:
 * Royal Blue backdrop (#0E4DA4 token), Pure White inner field (#FFFFFF),
 * Bright Crimson Red accent ring (#D9232E token), red & blue protective
 * heart-shaped figures cradling a blue developing child/fetus.
 */
export function AmooreLogo({
  size = 88,
  animate = false,
  className = '',
}: AmooreLogoProps) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.92 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-sm ${className}`}
      style={{ width: size, height: size, backgroundColor: '#0E4DA4' }}
      aria-label="Amoore Specialist Hospital Emblem"
      role="img"
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="120" height="120" rx="20" fill="#0E4DA4" />
        {/* Pure White inner disc */}
        <circle cx="60" cy="60" r="46" fill="#FFFFFF" />
        {/* Bright Crimson Red inner ring */}
        <circle
          cx="60"
          cy="60"
          r="41.5"
          stroke="#D9232E"
          strokeWidth="3.2"
        />

        {/* Left maternal figure (Crimson Red) forming left half of heart */}
        <circle cx="43" cy="39" r="5.5" fill="#D9232E" />
        <path
          d="M35.5 48.5C29.5 54 30.5 67 40 76.5C47 83.5 55.5 88.5 60 91.5C57.5 85.5 51 79.5 45.5 72.5C40.5 66.2 39.5 57 44.5 51.5C46 49.8 43 46.5 39 46.8C37.6 46.9 36.5 47.6 35.5 48.5Z"
          fill="#D9232E"
        />

        {/* Right protective figure (Royal Blue) forming right half of heart */}
        <circle cx="77" cy="35.5" r="6" fill="#0E4DA4" />
        <path
          d="M84.5 46C91.5 52.5 90.5 67 80 77.5C73 84.5 64.5 89 60 91.5C63.5 85 69.5 79 75 71.5C80 64.8 80.5 55 75.5 49C74 47.2 77 44 81 44.2C82.4 44.3 83.5 45 84.5 46Z"
          fill="#0E4DA4"
        />

        {/* Central child / fetus icon (Royal Blue) */}
        <circle cx="61.5" cy="54.5" r="5.5" fill="#0E4DA4" />
        <path
          d="M58.5 61.5C54 62.5 52.5 68 55 72.5C57.2 76.5 63 77.5 66.5 74.5C69 72.3 69 67.5 66 64.5C64 62.5 61 61 58.5 61.5Z"
          fill="#0E4DA4"
        />
        <path
          d="M54.5 71.5C51.5 73.5 49 75 47.5 74.2"
          stroke="#0E4DA4"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
