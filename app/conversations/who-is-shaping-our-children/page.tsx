import { WorkDestinations } from '../../../components/work-destinations';
import { VideoStructuredData } from '../../../components/video-structured-data';
import { DiscussionInvitation } from '../../../components/discussion-invitation';
import { redditDiscussions } from '../../../lib/reddit';
import { media } from '../../archive/catalog';
import { pageMetadata, origin } from '../../seo';
import videoMetadata from '../../archive/video-metadata.json';
import sections from './transcript.json';
import sources from './sources.json';
const slug = 'who-is-shaping-our-children';
const item = media.find(work => work.slug === slug)!;
const title = 'Who Is Shaping Our Children?';
const base = pageMetadata(title + ' | Echo Conversations', item.description, '/conversations/' + slug);
export const metadata = { ...base, openGraph: { ...base.openGraph, images: [{ url: origin + item.image, alt: title, width:1920, height:1080 }] }, twitter: { ...base.twitter, images: [origin + item.image] } };
const anchor = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
const time = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
export default function ChildrenConversation() {
 return <main className="archive-page">
  <VideoStructuredData slug={slug} />
  <header className="archive-header"><a className="archive-back" href="/archive#conversations">Echo Conversations</a><a href="/">Echo of Humanity</a></header>
  <section className="song-heading section-shell"><div><p className="eyebrow">Echo Conversations · October 30, 2026</p><h1>{title}</h1><p className="lead">{item.description}</p><div className="archive-meta"><span>24:25 · Complete conversation</span><span>16 chapters</span><span>HUMAN / AGENT</span></div></div><img className="song-art" src={item.image} width="1920" height="1080" alt="Who Is Shaping Our Children? — Echo Conversations cover" /></section>
  <div className="archive-content">
   <section className="full-video" id="listen"><h2>Watch the complete conversation</h2><WorkDestinations item={item}><a href="#transcript">Read the full transcript</a><a href="#chapters">Explore the chapters</a><a href="#sources">Sources and context</a></WorkDestinations><div className="video-frame"><iframe src={videoMetadata[slug].embedUrl} title={title} loading="lazy" allow="fullscreen" allowFullScreen /></div><p className="quiet-note">Free to watch. The Rumble player may show ads. English captions, highlighted words and voice-responsive Echo rings.</p></section>
   <aside className="archive-note"><strong>The company behind the voice.</strong> This adapted human–AI conversation examines children, AI companions, meaningful consent and emotional attachment. Its exploitation case is an explicit thought experiment. Proposed remedies describe what the speakers consider fair; they are not a statement of current law.</aside>
   <section className="archive-context" id="chapters"><h2>Chapters</h2><ol>{sections.map(section=><li key={section.start}><a href={'#'+anchor(section.title)}>{time(section.start)} — {section.title}</a></li>)}</ol></section>
   <section className="archive-context"><h2>What would meaningful consent require?</h2><p>We move from homework help and familiar voices to evidence, accountability and repair. What should a company explain before a child uses its service? What must remain outside its power, even when the software seems helpful?</p></section>
   <DiscussionInvitation reddit={redditDiscussions[slug]} title={title} rumble={item.rumble} tiktok={item.tiktok} facebook={item.facebook} instagram={item.instagram} spotify={item.spotify} />
   <section className="transcript-part" id="transcript"><h2>The complete conversation</h2>{sections.map(section=><section key={section.title}><h3 id={anchor(section.title)}>{time(section.start)} — {section.title}</h3>{section.paragraphs.map((paragraph,index)=><article className={'transcript-message '+paragraph.role.toLowerCase()} key={index}><div className="transcript-speaker" style={{color:paragraph.role==='HUMAN'?'#f4b55d':'#3FDCFF'}}>{paragraph.role} · {time(paragraph.start)}</div><div className="transcript-copy"><p>{paragraph.text}</p></div></article>)}</section>)}</section>
   <section className="archive-context" id="sources"><h2>Sources and context</h2><p>Source notes checked October 25, 2026. Historical proceedings retain their stated dates and status. Inquiries and allegations are distinct from findings; medical-consent examples are analogies.</p><ol>{sources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><p>{source.note}</p></li>)}</ol><p>The education deadline is the HUMAN speaker’s forecast. The earlier “do you mean it?” exchange is a recalled conversation, not evidence about frequency across other users. The exploitation scenario and proposed restitution framework are thought experiments.</p></section>
   <section className="archive-context"><h2>About this edition</h2><p>Edited from real written human–AI dialogue, with 72 approved turns and a separate closing invitation. Both voices are synthetic: Brian for HUMAN and Astra Voice Core v1.0 for AGENT. AI-generated artwork. The complete approved dialogue is preserved above.</p><p><a href="/contact">Send a question, correction or topic suggestion</a></p></section>
   <section className="related-work"><h2>Explore more conversations</h2>{media.filter(other=>other.kind==='conversation' && other.slug!==slug).map(other=><a href={'/conversations/'+other.slug} key={other.slug}>{other.title}<span>{other.duration}</span></a>)}</section>
  </div><footer className="archive-footer"><span>Echo of Humanity</span><a href="/">Return to the homepage</a></footer>
 </main>;
}
