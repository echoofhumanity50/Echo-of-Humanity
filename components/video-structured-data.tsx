import { media, workUrl } from '../app/archive/catalog';
import videos from '../app/archive/video-metadata.json';
import { StructuredData, origin } from '../app/seo';
export function VideoStructuredData({ slug }: { slug: string }) {
  const item = media.find(entry => entry.slug === slug);
  const video = videos[slug as keyof typeof videos];
  if (!item || !video) return null;
  return <StructuredData data={{ '@context': 'https://schema.org', '@type': 'VideoObject', '@id': `${origin}${workUrl(item)}#video`, name: item.title, description: item.description, thumbnailUrl: `${origin}${item.image}`, ...video, url: `${origin}${workUrl(item)}`, embedUrl: `https://archive.org/embed/echo-of-humanity-${slug}`, inLanguage: 'en', publisher: { '@type': 'Organization', name: 'Echo of Humanity', url: origin }, sameAs: [item.rumble, item.tiktok && `https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`].filter(Boolean) }} />;
}
