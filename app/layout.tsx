import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Echo of Humanity — Music, AI, Humanity',
  description:
    'Conversations, music, and books exploring humanity, artificial intelligence, responsibility, empathy, and the future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
