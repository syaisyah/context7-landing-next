
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Context7 Landing Page',
  description: 'Landing page template dengan Next.js + Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
