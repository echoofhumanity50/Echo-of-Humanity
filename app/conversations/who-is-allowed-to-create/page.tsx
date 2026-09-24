import { ArrowLeft } from 'lucide-react';
import { pageMetadata, StructuredData, origin } from '../../seo';
import { DiscussionInvitation } from '../../../components/discussion-invitation';
import transcript from './transcript.json';

const title = 'Who Is Allowed to Create? Who Gets Left Behind?';
const description = 'A HUMAN / AGENT conversation about AI-assisted authorship, creative freedom, automation, and a Human Transition Dividend. Watch the complete 29:35 film and read all 43 turns.';
const path = '/conversations/who-is-allowed-to-create';
const archive = 'https://archive.org/details/echo-of-humanity-who-is-allowed-to-create';
const rumble = 'https://rumble.com/v7fxizo-who-is-allowed-to-create-who-gets-left-behind.html';
const image = '/archive/who-is-allowed-to-create-2026-09-24.jpg';
const baseMetadata = pageMetadata(`${title} | Echo of Humanity`, description, path);
export const metadata = { ...baseMetadata, openGraph: { ...baseMetadata.openGraph, images: [{ url: `${origin}${image}`, width: 1920, height: 1080, alt: title }] }, twitter: { ...baseMetadata.twitter, card: 'summary_large_image' as const, images: [`${origin}${image}`] } };
const chapters = [
  ['00:00', 'The Comment', 'THE COMMENT'],
  ['04:31', 'Creative Freedom', 'CREATIVE FREEDOM'],
  ['07:17', 'The Invisible Work', 'THE INVISIBLE WORK'],
  ['12:05', 'What Reality Is Changing', 'WHAT REALITY IS CHANGING'],
  ['16:08', 'Before Proof Arrives', 'BEFORE PROOF ARRIVES'],
  ['22:01', 'The Human Transition Dividend', 'THE HUMAN TRANSITION DIVIDEND'],
  ['29:17', 'Continue the Conversation', 'closing'],
];
const chapterAnchor = (chapter: string) => chapter.toLowerCase().replaceAll(' ', '-');

export default function WhoIsAllowedToCreate() {
  return <main className="archive-page">
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'VideoObject', name: title, description, thumbnailUrl: `${origin}${image}`, uploadDate: '2026-09-24T16:03:13Z', duration: 'PT29M35S', embedUrl: 'https://archive.org/embed/echo-of-humanity-who-is-allowed-to-create', url: `${origin}${path}`, inLanguage: 'en', sameAs: [archive, rumble, 'https://www.tiktok.com/@echoofhumanity7/video/7689135396587900191'] }} />
    <header className="archive-header"><a className="archive-back" href="/archive#conversations"><ArrowLeft aria-hidden="true" size={16} />Echo Conversations</a><span className="archive-wordmark">Echo of Humanity</span></header>
    <section className="archive-hero"><div><p className="eyebrow">Echo Conversations · September 24, 2026</p><h1>{title}</h1><div className="archive-meta"><span>29:35 · Full conversation</span><span>HUMAN / AGENT</span><span>Full transcript</span></div></div><div className="archive-summary"><p>A dismissive comment about a free Windows utility opens a larger discussion about who is allowed to create—and what society owes the people affected by automation.</p><p>From AI-assisted authorship and creative freedom to a Human Transition Dividend: when technology makes work easier or cheaper, who should share in the benefit?</p></div></section>
    <div className="archive-content">
      <section className="full-video" aria-labelledby="watch-full"><p className="section-number">Watch the complete discussion</p><h2 id="watch-full">Creative freedom. Human responsibility.</h2><div className="video-frame"><iframe src="https://archive.org/embed/echo-of-humanity-who-is-allowed-to-create" title={`${title} Full conversation`} allow="fullscreen" allowFullScreen loading="lazy" /></div><div className="media-links"><a href={archive} target="_blank" rel="noreferrer">Watch or download on Archive</a><a href={rumble} target="_blank" rel="noreferrer">Watch on Rumble</a><a href="https://www.tiktok.com/@echoofhumanity7/video/7689135396587900191" target="_blank" rel="noreferrer">Full vertical film on TikTok</a><a href="#transcript">Read the transcript</a></div><p className="quiet-note">29:35 · English · Synchronized captions · AI-assisted authorship, synthetic narration and AI-generated artwork.</p></section>
      <section className="archive-context" aria-labelledby="chapters"><h2 id="chapters">Chapters</h2><ol>{chapters.map(([time, label, chapter]) => <li key={time}><a href={`#${chapterAnchor(chapter)}`}>{time} — {label}</a></li>)}</ol><div className="media-links"><a href="/archive/who-is-allowed-to-create-2026-09-24.srt" download>Captions (SRT)</a><a href="/archive/who-is-allowed-to-create-2026-09-24.vtt" download>Captions (VTT)</a><a href="/archive/who-is-allowed-to-create-transcript-2026-09-24.txt" download>Download full transcript</a></div></section>
      <aside className="archive-note"><strong>About this edition.</strong> The film preserves 43 historical turns, followed by a separate closing invitation added September 24. HUMAN supplied concepts, lived experience, creative direction, the policy premise, editorial judgment and final approval. AGENT supplied analysis, counterpoints, policy development, script assembly and production preparation. HUMAN wording is lightly normalized for narration; supporting exchanges are combined and condensed. Wallpaper Pilot was developed collaboratively, with HUMAN directing the product and accepting release responsibility while AI performed substantial programming. Synthetic voices: Brian (HUMAN) and Clara (AGENT). Designed and edited by Echo.</aside>
      <aside className="archive-context"><h2>Predictions keep their original date</h2><p>The four-year prediction and the 2028 operating-system prediction remain anchored to the September 14, 2026 source conversation. Publication does not restart their clock. These are preserved predictions in an anticipatory philosophical and ethical discussion, not verified outcomes or a statistical forecast. Later evidence and corrections belong in separate notes.</p><p>The account behind the opening comment is intentionally not identified. The conversation itself does not establish AI consciousness or independent memory.</p></aside>
      <DiscussionInvitation title={title} />
      <section className="transcript-part" id="transcript" aria-labelledby="transcript-title"><h2 id="transcript-title">The approved conversation</h2>{transcript.turns.map((turn, index) => <div key={turn.number}>{(index === 0 || transcript.turns[index - 1].chapter !== turn.chapter) && <h3 id={chapterAnchor(turn.chapter)}>{turn.chapter}</h3>}<article className={`transcript-message ${turn.speaker.toLowerCase()}`}><div className="transcript-speaker" style={{ color: turn.speaker === 'HUMAN' ? '#FFD95B' : '#3FDCFF' }}>{turn.speaker} · {turn.number.toString().padStart(2, '0')}</div><div className="transcript-copy">{turn.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div></article></div>)}</section>
      <section className="transcript-part" id="closing"><div className="transcript-part-heading"><span>September 24, 2026 · New closing invitation</span><i /></div><h2>Continue the conversation</h2><p className="quiet-note">Presentation material added after the historical conversation.</p>{transcript.closing.map((turn, index) => <article className={`transcript-message ${turn.speaker.toLowerCase()}`} key={index}><div className="transcript-speaker" style={{ color: turn.speaker === 'HUMAN' ? '#FFD95B' : '#3FDCFF' }}>{turn.speaker}</div><div className="transcript-copy"><p>{turn.text}</p></div></article>)}</section>
      <section className="related-work"><h2>Explore more conversations</h2><a href="/conversations/full-conversation">The Echo of Humanity — Full Conversation<span>28:40</span></a><a href="/conversations/when-ai-goes-rogue">When AI Goes Rogue — Who Is Responsible?<span>14:21</span></a></section>
    </div><footer className="archive-footer"><span>Ideas made public so they can be found again.</span><a className="archive-back" href="/">Return to Echo of Humanity</a></footer>
  </main>;
}
