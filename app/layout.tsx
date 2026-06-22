import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'IELTS Writing Deck — Từ vựng, cấu trúc & bài mẫu',
  description: 'Học IELTS Writing Task 1 & Task 2: từ vựng theo chủ đề, cấu trúc câu, dàn ý, bài mẫu để đạt band cao.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "'IBM Plex Sans', var(--font-ibm-plex-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
