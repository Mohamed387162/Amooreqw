import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="so">
      <body suppressHydrationWarning className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
