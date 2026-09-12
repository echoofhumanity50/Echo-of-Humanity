import type { Metadata } from 'next';
import './globals.css';
import { origin, StructuredData, UtilityFooter } from './seo';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  icons: { icon: '/favicon.svg' },
  other: { 'msvalidate.01': 'FF94D290F775F206637FE567E1F14DA4' },
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
      <body>
        <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Echo of Humanity', url: origin, description: 'Human–AI conversations, books, and music by Echo.', publisher: { '@type': 'Organization', name: 'Echo of Humanity', url: origin, email: 'echoofhumanity50@gmail.com', sameAs: ['https://archive.org/details/@echo_of_humanity', 'https://www.tiktok.com/@echoofhumanity7', 'https://www.reddit.com/user/Visible-Current-3909/'] } }} />
        {children}
        <UtilityFooter />
        <script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"d94f8b5367d149169dd7e5b8e6cad56c"}' />
      </body>
    </html>
  );
}
