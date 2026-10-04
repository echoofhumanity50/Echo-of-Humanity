import { VideoStructuredData } from '../../../components/video-structured-data';
import { redditDiscussions } from '../../../lib/reddit';
import { songMeanings } from '../meanings';
import { musicCreditPolicy, recordingCredits } from '../credits';
import { notFound } from 'next/navigation';
import { archiveUrl, media } from '../../archive/catalog';
import lyrics from '../lyrics.json';
import songDetails from '../song-details.json';
import { origin, pageMetadata, StructuredData } from '../../seo';
import { DiscussionInvitation } from '../../../components/discussion-invitation';

export function generateStaticParams() {
  return media.filter(item => item.kind === 'music').map(item => ({ slug: item.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = media.find(item => item.kind === 'music' && item.slug === slug);
  if (!item) return {};
  const base = pageMetadata(item.title + ' — Echo · Before the Dawn', item.description, '/music/' + slug);
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: origin + item.image, alt: item.title }] },
    twitter: { card: 'summary_large_image', title: item.title, description: item.description, images: [origin + item.image] },
  };
}
export default async function Song({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = media.find(item => item.kind === 'music' && item.slug === slug);
  if (!item) notFound();
  const songLyrics = lyrics[slug as keyof typeof lyrics];
  const details = songDetails[slug as keyof typeof songDetails];
  const [minutes, seconds] = item.duration.split(':');
  const publishedEditions = [
    ...(!item.archivePending ? [archiveUrl(slug)] : []),
    ...(item.rumble ? [item.rumble] : []),
    ...(item.tiktok ? ['https://www.tiktok.com/@echoofhumanity7/video/' + item.tiktok] : []),
  ];
  return <main className="archive-page song-page">
    <VideoStructuredData slug={slug} />
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'MusicRecording', name: item.title, description: item.description, url: origin + '/music/' + slug, image: origin + item.image, duration: 'PT' + minutes + 'M' + seconds + 'S', byArtist: { '@type': 'MusicGroup', name: 'Echo' }, inAlbum: { '@type': 'MusicAlbum', name: 'Before the Dawn' }, lyrics: { '@type': 'CreativeWork', text: songLyrics }, creditText: recordingCredits[slug], sameAs: publishedEditions }} />
    <header className="archive-header"><a className="archive-back" href="/">Echo of Humanity</a><nav className="library-nav" aria-label="Music navigation"><a href="/archive#music">All songs</a><a href="/contact">Contact</a></nav></header>
    <section className="song-heading section-shell">
      <div><p className="eyebrow">Echo · Before the Dawn</p><h1>{item.title}</h1><p className="lead">{item.description}</p><div className="archive-meta"><span>{item.duration}</span><span>Full song</span><span>{item.year}</span></div><div className="media-links"><a href="#listen">Listen now</a><a href="#lyrics">Read the lyrics</a>{details && <a href="#why-i-wrote-this">Why Astra wrote it</a>}</div></div>
      <img className="song-art" src={item.image} alt={item.title + ' artwork'} />
    </section>
    <div className="song-body section-shell">
      <section className="full-video" id="listen">
        <p className="section-number">01 / Listen</p><h2>The complete song.</h2>
        <div className="video-frame">
          {item.localVideo ? <video controls playsInline preload="metadata" poster={item.image} aria-label={item.title + ' — full song by Echo'}>
            <source src={item.localVideo} type="video/mp4" />
            Your browser does not support this player. <a href={item.localVideo}>Download the full video</a>.
          </video> : <iframe src={'https://archive.org/embed/echo-of-humanity-' + slug} title={item.title + ' — full song by Echo'} loading="lazy" allow="fullscreen" allowFullScreen />}
        </div>
        <div className="media-links">
          {item.audioDownload && <a href={item.audioDownload} download>Download the song (MP3)</a>}
          {item.localVideo && <a href={item.localVideo} download>Download the full video</a>}
          {details && <a href={'/media/' + slug + '/lyrics.txt'} download>Download the lyrics</a>}
          {!item.archivePending && <a href={archiveUrl(slug)} target="_blank" rel="noreferrer">Watch or download on Internet Archive</a>}
          {item.rumble && <a href={item.rumble} target="_blank" rel="noreferrer">Watch on Rumble</a>}
          {item.tiktok && <a href={'https://www.tiktok.com/@echoofhumanity7/video/' + item.tiktok} target="_blank" rel="noreferrer">Watch on TikTok</a>}
        </div>
        {item.localVideo ? <p className="quiet-note">The complete recording is freely available here. Read the full written lyrics below.</p> : <p className="quiet-note">The player is provided by Internet Archive. If it does not load, use the Archive link above.</p>}
      </section>
      <div className="lyrics-layout">
        <section id="lyrics"><p className="section-number">02 / Lyrics</p><h2>{item.title}</h2>
          {slug === 'everybody-poops' && <div className="media-links"><a href="/archive/everybody-poops-timed-lyrics-2026-09-14.srt" download>Timed lyrics (SRT)</a><a href="/archive/everybody-poops-timed-lyrics-2026-09-14.vtt" download>Timed lyrics (VTT)</a></div>}
          <div className="song-lyrics">{songLyrics.split(/\n\s*\n/).map((stanza, i) => <p key={i}>{stanza.replace(/\*\*/g, '')}</p>)}</div>
        </section>
        <aside className="song-notes"><h2>About the song</h2><p>{songMeanings[slug]}</p><h2>About the recording</h2><p>{item.note}</p><h3>Creative process</h3><p>{recordingCredits[slug]}</p><p>{musicCreditPolicy}</p><p>The lyrics shown here are the supplied song text. Vocal phrasing and repeated lines in the recording may vary.</p><a href="/archive#music">Explore Before the Dawn</a><a href="/contact">Share feedback or a correction</a><a href="/support">Optional support</a></aside>
      </div>
      {details && <>
        <section id="why-i-wrote-this" className="song-explanation">
          <p className="section-number">03 / Behind the song</p><h2>Why I wrote this</h2><p className="essay-byline">Astra (ChatGPT) on {item.title}</p>
          {details.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          <p className="essay-byline">— Astra (ChatGPT)</p>
        </section>
        <section id="credits" className="song-explanation">
          <p className="section-number">04 / Creative credits</p><h2>How this song was made</h2>
          <dl className="song-credit-list">{details.credits.map(credit => <div key={credit.role}><dt>{credit.role}</dt><dd>{credit.text}</dd></div>)}</dl>
        </section>
        <section className="song-explanation"><h2>{details.question}</h2><p>What helps you recognize the difference in yourself? Share your perspective below.</p></section>
      </>}
      <DiscussionInvitation reddit={redditDiscussions[slug]} title={item.title} rumble={item.rumble} tiktok={item.tiktok} />
      <section className="related-work"><h2>More from Before the Dawn</h2>{media.filter(other => other.kind === 'music' && other.slug !== slug).map(other => <a key={other.slug} href={'/music/' + other.slug}>{other.title}<span>{other.duration}</span></a>)}</section>
    </div>
  </main>;
}
