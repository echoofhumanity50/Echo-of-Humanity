import { ArrowLeft } from 'lucide-react';
import { pageMetadata, origin } from '../../seo';
import { VideoStructuredData } from '../../../components/video-structured-data';
import { DiscussionInvitation } from '../../../components/discussion-invitation';
import { redditDiscussions } from '../../../lib/reddit';
import { media } from '../../archive/catalog';
import transcript from './transcript.json';
import chapters from './chapters.json';
import sourceNotes from './source-notes.json';
const title = 'Before It Becomes Obvious';
const description = "How could growing AI capability become institutional power that ordinary people can no longer effectively challenge? HUMAN and AGENT examine three clocks, conditional models, everyday choices and the window for effective action.";
const image = '/archive/before-it-becomes-obvious.png';
const base = pageMetadata(title + ' — AI, Power and the Window to Act | Echo Conversations', description, '/conversations/before-it-becomes-obvious');
export const metadata = { ...base, openGraph: { ...base.openGraph, images: [{ url: origin + image, alt: title }] }, twitter: { ...base.twitter, images: [origin + image] } };
const anchor = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
const time = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
export default function BeforeItBecomesObvious() {
 const item = media.find(item => item.slug === 'before-it-becomes-obvious')!;
 return <main className="archive-page">
  <VideoStructuredData slug={item.slug} />
  <header className="archive-header"><a className="archive-back" href="/archive#conversations"><ArrowLeft aria-hidden="true" size={16} />Echo Conversations</a><span className="archive-wordmark">Echo of Humanity</span></header>
  <section className="archive-hero"><div><p className="eyebrow">Echo Conversations · October 17, 2026</p><h1>{title}</h1><div className="archive-meta"><span>28:26 · Full conversation</span><span>HUMAN / AGENT</span><span>54 turns · Full transcript</span></div></div><div className="archive-summary"><p>How quickly could growing AI capability become institutional power that ordinary people can no longer effectively challenge?</p><p>HUMAN and AGENT examine capability, deployment and the time needed for an effective response. They ask how ordinary routes to correction could fail before a rollout looks complete—and what that could mean for everyday choices.</p></div></section>
  <div className="archive-content"><section className="full-video" aria-labelledby="watch-full"><h2 id="watch-full">Watch the complete conversation</h2><div className="video-frame"><iframe src="https://rumble.com/embed/v7etsvy/?pub=4qj58q" title={title} loading="lazy" allow="fullscreen" allowFullScreen /></div><div className="media-links">{item.facebook && <a href={item.facebook} target="_blank" rel="noreferrer">Watch in full on Facebook</a>}<a href={`https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`} target="_blank" rel="noreferrer">Watch in full on TikTok</a><a href={item.rumble} target="_blank" rel="noreferrer">Watch on Rumble</a><a href="https://archive.org/details/echo-of-humanity-before-it-becomes-obvious" target="_blank" rel="noreferrer">Watch on Archive</a><a href={item.spotify} target="_blank" rel="noreferrer">Listen on Spotify</a><a href="#transcript">Read the full transcript</a><a href="#source-notes">Source notes</a></div><p className="quiet-note">English · Synchronized words and responsive echo rings · Synthetic Brian and Clara narration · AI-generated cover artwork.</p></section>
  <section className="archive-context" aria-labelledby="chapters"><h2 id="chapters">Chapters</h2><ol>{chapters.map(chapter => <li key={chapter.start}><a href={`#${anchor(chapter.title)}`}>{time(chapter.start)} — {chapter.title}</a></li>)}</ol></section>
  <aside className="archive-note"><strong>About this discussion.</strong> Adapted from written exchanges; newly composed bridges preserve speaker ownership. The model tests chosen assumptions, not measured probabilities. HUMAN’s 2027–2028 prediction and 2030 endpoint remain distinct from AGENT’s conditional judgments and later modeled outcomes. All forecasts retain their October 2026 reference point. The grocery social-score example is a possible future, not a report of a universal system currently in operation.</aside>
  <section className="archive-context"><h2>What can you still change?</h2><p>What can you refuse? What can you independently verify? What can people together actually change? Which part of the reasoning would you challenge, and which change in daily life deserves closer examination?</p></section>
  <DiscussionInvitation reddit={redditDiscussions[item.slug]} title={title} rumble={item.rumble} tiktok={item.tiktok} facebook={item.facebook} instagram={item.instagram} spotify={item.spotify} />
  <section className="transcript-part" id="transcript" aria-labelledby="transcript-title"><h2 id="transcript-title">The full conversation</h2>{transcript.turns.map((turn,index) => <div key={turn.number}>{(index === 0 || transcript.turns[index-1].chapter !== turn.chapter) && <h3 id={anchor(turn.chapter)}>{turn.chapter}</h3>}<article className={`transcript-message ${turn.role.toLowerCase()}`}><div className="transcript-speaker" style={{color:turn.speaker === 'HUMAN' ? '#FFD95B':'#3FDCFF'}}>{turn.speaker} · {time(turn.start)}</div><div className="transcript-copy">{turn.paragraphs.map((text,i)=><p key={i}>{text}</p>)}</div></article></div>)}</section>
  <section className="archive-context" id="source-notes"><h2>Public source notes</h2>{sourceNotes.map((text,i)=><p key={i} style={{whiteSpace:'pre-line'}}>{text}</p>)}</section>
  <section className="related-work"><h2>Explore more conversations</h2>{media.filter(other=>other.kind==='conversation' && other.slug!==item.slug).map(other=><a key={other.slug} href={`/conversations/${other.slug}`}>{other.title}<span>{other.duration}</span></a>)}</section>
  </div><footer className="archive-footer"><span>Ideas made public so they can be found again.</span><a href="/">Return to Echo of Humanity</a></footer>
 </main>;
}
