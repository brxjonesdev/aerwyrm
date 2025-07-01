import type { Metadata } from 'next';
import { Noto_Sans, Inter } from 'next/font/google';
import './globals.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Aerwyrm',
  description: 'Exploring music, coding, and signal theory building in public.',
  openGraph: {
    title: 'Aerwyrm',
    description: 'Music dev journey, signal theory in Rust, and project building.',
    url: 'https://yourblogdomain.com',
    siteName: 'Aerwyrm',
    images: [
      {
        url: 'https://yourblogdomain.com/og-image.png', // Your OpenGraph image
        width: 1200,
        height: 630,
        alt: 'Your Blog Name',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  authors: [{ name: 'Your Name', url: 'https://yourblogdomain.com' }],
  keywords: ['Rust', 'Music', 'Signal Processing', 'Next.js', 'Blog'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${notoSans.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
