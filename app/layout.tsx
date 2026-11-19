import type { Metadata } from 'next';
import {
  Plus_Jakarta_Sans,
  DM_Sans,
  JetBrains_Mono,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amoore Specialist Hospital | Isbitaalka Takhasusiga Amoore',
  description:
    'Isbitaalka Takhasusiga Amoore (Muqdisho & Hargeysa) — Daaweynta dhalma la’aanta, bacriminta ubadka, barnaamijka haweenka 40+, kaadi-mareenka & EDV, iyo Mindray Ultrasound DC-30.',
  openGraph: {
    title: 'Amoore Specialist Hospital | Isbitaalka Takhasusiga Amoore',
    description:
      'Specialized fertility, OB/GYN 40+, urology & EDV care, and Mindray DC-30 diagnostics in Mogadishu (West Taleex) and Hargeisa (Jigjiga-Yar).',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amoore Specialist Hospital | Isbitaalka Takhasusiga Amoore',
    description:
      'Specialized fertility, OB/GYN 40+, urology & EDV care, and Mindray DC-30 diagnostics in Mogadishu and Hargeisa.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="so"
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${ibmPlexArabic.variable}`}
    >
      <body suppressHydrationWarning className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
