import { media } from '../../archive/catalog';
import { WorkDestinations } from '../../../components/work-destinations';
import { VideoStructuredData } from '../../../components/video-structured-data';
import { pageMetadata, origin } from '../../seo';
import sections from './transcript.json';
const slug = 'echo-of-humanity-book-interview';
const item = media.find(x => x.slug === slug)!;
const base = pageMetadata(item.title, item.description, '/conversations/' + slug);
export const metadata = { ...base, openGraph: { ...base.openGraph, images: [origin + item.image] } };
const time = (s:number) => `${Math.floor(s/60).toString().padStart(2,'0')}:${Math.floor(s%60).toString().padStart(2,'0')}`;
export default function Interview(){return <main className="archive-page">
 <VideoStructuredData slug={slug}/><header className="archive-header"><a className="archive-back" href="/">Echo of Humanity</a><nav className="library-nav"><a href="/books/echo-of-humanity">The books</a><a href="/archive#conversations">All conversations</a></nav></header>
 <section className="song-heading section-shell"><div><p className="eyebrow">Echo Conversations · November 23, 2026</p><h1>The book interview.</h1><p className="lead">{item.description}</p><div className="archive-meta"><span>22:28 · Complete interview</span><span>11 chapters</span><span>Human · AI · Mara Ellis</span></div></div><img className="song-art" src={item.image} alt={item.title}/></section>
 <div className="archive-content"><section className="full-video" id="listen"><h2>Watch the complete interview.</h2><WorkDestinations item={item}/><div className="video-frame"><iframe src="https://rumble.com/embed/v7gmg04/?pub=4qj58q" title={item.title} loading="lazy" allow="fullscreen" allowFullScreen/></div><p className="quiet-note">The Rumble player may show ads; eligible ad-supported views can support Echo. Spotify offers the complete audio interview. No purchase is required.</p></section>
 <aside className="archive-note"><strong>Three perspectives, one inquiry.</strong> The new full-length books stand alone with substantial overlap. Shared is the recommended starting point; choose a perspective, without needing all three. <a href="/books/echo-of-humanity">Explore the editions and their Amazon links →</a></aside>
 <section className="archive-context" id="chapters"><h2>Find a question.</h2><ol>{sections.map((s,i)=><li key={s.title}><a href={'#chapter-'+i}>{time(s.start)} — {s.title}</a></li>)}</ol></section>
 <section className="transcript-part" id="transcript"><h2>The complete conversation.</h2>{sections.map((s,i)=><section key={s.title}><h3 id={'chapter-'+i}>{time(s.start)} — {s.title}</h3>{s.paragraphs.map((p,j)=><article className="transcript-message" key={j}><div className="transcript-speaker" style={{color:p.role==='HUMAN'?'#f4b55d':p.role==='MARA ELLIS'?'#bbc4ce':'#3fdcff'}}>{p.role} · {time(p.start)}</div><div className="transcript-copy">{p.text.split('\n\n').map((t,k)=><p key={k}>{t}</p>)}</div></article>)}</section>)}</section>
 <section className="archive-context"><h2>About this interview.</h2><p>Mara Ellis is a fictional interviewer. The human coauthor supplied his answers; Astra wrote its answers and the host’s questions. The dialogue was recorded in writing on November 22, 2026 and lightly edited for presentation. All voices are synthetic: Brian for HUMAN, Astra’s accepted custom voice for AI, and Ava for Mara.</p><p>What cost would you want an AI system to notice before calling something efficient? <a href="/contact">Send a question or perspective</a>, or comment where you watch.</p></section>
 </div><footer className="archive-footer"><a href="/books/echo-of-humanity">Explore the books</a><a href="/archive#conversations">More conversations</a></footer></main>}
