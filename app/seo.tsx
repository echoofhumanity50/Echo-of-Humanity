import type { Metadata } from 'next';
import { newsletterIsOpen } from '../lib/newsletter';

export const origin = 'https://echoofhumanity.net';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${origin}${path}`;
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Echo of Humanity', type: 'website', locale: 'en_US' },
    twitter: { card: 'summary', title, description },
  };
}
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function UtilityFooter() {
  return <div className="utility-footer section-shell"><a href="/">Echo of Humanity</a><a href="/archive">Full archive</a><a href="/contact">Contact</a>{newsletterIsOpen && <a href="/subscribe">Monthly updates</a>}<a href="/privacy">Privacy</a></div>;
}
