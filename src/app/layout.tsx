import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Bitcount_Grid_Double,
  Inter,
} from 'next/font/google';
import './globals.css';
import AppHeader from '@/features/navbar/components/app-header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bitcountGridDouble = Bitcount_Grid_Double({
  variable: '--font-bitcount-grid-double',
  subsets: ['latin'],
});
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  adjustFontFallback: true,
});
export const metadata: Metadata = {
  title: 'Aerwyrm',
  description:
    'Learn modern synthesis techniques and create your own sounds with Aerwyrm.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitcountGridDouble.variable} ${inter.variable} antialiased h-dvh`}
      >
        <main className='flex min-h-screen flex-col items-center'>
          <AppHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
