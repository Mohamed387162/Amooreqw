import Link from 'next/link';
import { AmooreLogo } from '@/components/AmooreLogo';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAFC] px-4 py-16 text-center">
      <AmooreLogo size={72} />
      <p className="mt-6 font-mono-tabular text-xs font-semibold text-[#D9232E]">
        404 · Page Not Found
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-slate-900">
        Bogga Lama Helin · Amoore Specialist Hospital
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        Bogga aad raadinayso lama helin. Ku laabo bogga hore si aad u aragto adeegyada, xarumaha Muqdisho &amp; Hargeysa, iyo nidaamka ballanta qarsoon.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-lg bg-[#0E4DA4] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#093575]"
      >
        Ku laabo Bogga Hore / Back to Home
      </Link>
    </main>
  );
}
