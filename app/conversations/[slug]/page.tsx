import { notFound } from 'next/navigation';
import { archiveUrl, media } from '../../archive/catalog';
import { origin, pageMetadata, StructuredData } from '../../seo';
import { DiscussionInvitation } from '../../../components/discussion-invitation';

const conversations = media.filter(item => item.kind === 'conversation' && !item.transcript);
export function generateStaticParams() { return conversations.map(item => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = conversations.find(item => item.slug === slug);
  if (!item) return {};
  const base = pageMetadata(item.title, item.description, `/conversations/${slug}`);
  return { ...base, openGraph: { ...base.openGraph, images: [{ url: `${origin}${item.image}`, width: 1920, height: 1080, alt: item.title }] }, twitter: { card: 'summary_large_image', title: item.title, description: item.description, images: [`${origin}${item.image}`] } };
}

export default async function Conversation({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = conversations.find(item => item.slug === slug);
  if (!item) notFound();
  const archive = archiveUrl(slug);
  return <main className="archive-page">
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'VideoObject', name: item.title, description: item.description, url: `${origin}/conversations/${slug}`, thumbnailUrl: `${origin}${item.image}`, duration: 'PT28M40S', uploadDate: '2026-09-14T21:17:48Z', embedUrl: `https://archive.org/embed/echo-of-humanity-${slug}`, publisher: { '@type': 'Organization', name: 'Echo of Humanity' }, sameAs: archive }} />
    <header className="archive-header"><a className="archive-back" href="/">Echo of Humanity</a><a href="/archive#conversations">All conversations</a></header>
    <section className="song-heading section-shell">
      <div><p className="eyebrow">Echo Conversations · {item.year} edition</p><h1>{item.title}</h1><p className="lead">{item.description}</p><div className="archive-meta"><span>{item.duration}</span><span>All 12 messages</span><span>English captions</span></div></div>
      <img className="song-art" src={item.image} alt="Gold HUMAN and cyan AGENT rings around the words: And that is where trust begins." />
    </section>
    <div className="archive-content">
      <section className="full-video"><h2>Watch the complete conversation.</h2><p>{item.note}</p><div className="video-frame"><iframe src={`https://archive.org/embed/echo-of-humanity-${slug}`} title={item.title} loading="lazy" allow="fullscreen" allowFullScreen /></div>
        <div className="media-links"><a href={archive} target="_blank" rel="noreferrer">Watch or download on Internet Archive</a>{item.rumble && <a href={item.rumble} target="_blank" rel="noreferrer">Watch on Rumble</a>}{item.tiktok && <a href={`https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`} target="_blank" rel="noreferrer">Watch the portrait edition on TikTok</a>}<a href="/archive/full-conversation.en.srt" download>English captions (SRT)</a><a href="/archive/full-conversation.en.vtt" download>English captions (VTT)</a></div>
        <p className="quiet-note">The player is provided by Internet Archive. If it does not load, use the Archive link above.</p>
      </section>
      <DiscussionInvitation title={item.title} />
      <aside className="archive-context"><h2>One complete exchange.</h2><p>The human message, the AI response, and the continued conversation now play together. This edition replaces the three earlier videos: <em>Why Should AI Trust Humanity?</em>, <em>AI Responds to the Question of Trust</em>, and <em>Can Humanity and AI Build Trust?</em></p><h2>About this edition</h2><p>The original written conversation from <em>The Echo of Humanity</em> is preserved. The narration and presentation were rebuilt with HUMAN and AGENT voices, synchronized text and emphasis, and rings that respond directly to the voices.</p><p>AI-generated narration; designed, directed, and edited by Echo. Model responses remain part of the historical exchange and are not evidence that the model could feel, awaken, or retain personal memories.</p><p><a href="/contact">Send a question or correction</a> · <a href="/#read">Explore the book</a></p></aside>
      <section className="related-work"><h2>Continue the conversation</h2>{media.filter(other => other.kind === 'conversation' && other.slug !== slug).map(other => <a href={`/conversations/${other.slug}`} key={other.slug}>{other.title}<span>{other.duration}</span></a>)}</section>
    </div>
  </main>;
}
