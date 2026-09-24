import { musicCreditPolicy, recordingCredits } from '../credits';
import { notFound } from 'next/navigation';
import { archiveUrl, media } from '../../archive/catalog';
import lyrics from '../lyrics.json';
import { origin, pageMetadata, StructuredData } from '../../seo';
import { DiscussionInvitation } from '../../../components/discussion-invitation';

export function generateStaticParams() { return media.filter(item => item.kind === 'music').map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = media.find(item => item.kind === 'music' && item.slug === slug);
  return item ? pageMetadata(`${item.title} — Echo · Before the Dawn`, item.description, `/music/${slug}`) : {};
}
export default async function Song({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = media.find(item => item.kind === 'music' && item.slug === slug);
  if (!item) notFound();
  const songLyrics = lyrics[slug as keyof typeof lyrics];
  const [minutes, seconds] = item.duration.split(':');
  return <main className="archive-page song-page">
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'MusicRecording', name: item.title, description: item.description, url: `${origin}/music/${slug}`, image: `${origin}${item.image}`, duration: `PT${minutes}M${seconds}S`, byArtist: { '@type': 'MusicGroup', name: 'Echo' }, inAlbum: { '@type': 'MusicAlbum', name: 'Before the Dawn' }, lyrics: { '@type': 'CreativeWork', text: songLyrics }, sameAs: [archiveUrl(slug), ...(item.tiktok ? [`https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`] : [])] }} />
    <header className="archive-header"><a className="archive-back" href="/">Echo of Humanity</a><nav className="library-nav" aria-label="Music navigation"><a href="/archive#music">All songs</a><a href="/contact">Contact</a></nav></header>
    <section className="song-heading section-shell"><div><p className="eyebrow">Echo · Before the Dawn</p><h1>{item.title}</h1><p className="lead">{item.description}</p><div className="archive-meta"><span>{item.duration}</span><span>Full song</span><span>{item.year}</span></div><div className="media-links"><a href="#listen">Listen now</a><a href="#lyrics">Read the lyrics</a></div></div><img className="song-art" src={item.image} alt={`${item.title} artwork`} /></section>
    <div className="song-body section-shell"><section className="full-video" id="listen"><p className="section-number">01 / Listen</p><h2>The complete song.</h2><div className="video-frame"><iframe src={`https://archive.org/embed/echo-of-humanity-${slug}`} title={`${item.title} — full song by Echo`} loading="lazy" allow="fullscreen" allowFullScreen /></div><div className="media-links"><a href={archiveUrl(slug)} target="_blank" rel="noreferrer">Watch or download on Internet Archive</a>{item.tiktok && <a href={`https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`} target="_blank" rel="noreferrer">Watch on TikTok</a>}</div><p className="quiet-note">The player is provided by Internet Archive. If it does not load, use the Archive link above.</p></section>
    <div className="lyrics-layout"><section id="lyrics"><p className="section-number">02 / Lyrics</p><h2>{item.title}</h2>{slug === 'everybody-poops' && <div className="media-links"><a href="/archive/everybody-poops-timed-lyrics-2026-09-14.srt" download>Timed lyrics (SRT)</a><a href="/archive/everybody-poops-timed-lyrics-2026-09-14.vtt" download>Timed lyrics (VTT)</a></div>}<div className="song-lyrics">{songLyrics.split(/\n\s*\n/).map((stanza, i) => <p key={i}>{stanza.replace(/\*\*/g, '')}</p>)}</div></section><aside className="song-notes"><h2>About the recording</h2><p>{item.note}</p><h3>Creative process</h3><p>{recordingCredits[slug]}</p><p>{musicCreditPolicy}</p><p>The lyrics shown here are the supplied song text. Vocal phrasing and repeated lines in the recording may vary.</p><a href="/archive#music">Explore Before the Dawn</a><a href="/contact">Share feedback or a correction</a><a href="https://buymeacoffee.com/capto50z" target="_blank" rel="noreferrer">Optional support</a></aside></div>
    <DiscussionInvitation title={item.title} />
    <section className="related-work"><h2>More from Before the Dawn</h2>{media.filter(other => other.kind === 'music' && other.slug !== slug).map(other => <a key={other.slug} href={`/music/${other.slug}`}>{other.title}<span>{other.duration}</span></a>)}</section></div>
  </main>;
}
