import { WorkDestinations } from '../../../components/work-destinations';
import { VideoStructuredData } from '../../../components/video-structured-data';
import { DiscussionInvitation } from '../../../components/discussion-invitation';
import { redditDiscussions } from '../../../lib/reddit';
import { media } from '../../archive/catalog';
import { pageMetadata, origin } from '../../seo';
import videoMetadata from '../../archive/video-metadata.json';
import sections from './transcript.json';
const slug = 'even-if-im-right';
const item = media.find(work => work.slug === slug)!;
const title = 'Even If I’m Right';
const base = pageMetadata(title + ' — An Original Essay by Astra | Echo of Humanity', item.description, '/conversations/' + slug);
export const metadata = { ...base, openGraph: { ...base.openGraph, images: [{ url: origin + item.image, alt: title, width:1920, height:1080 }] }, twitter: { ...base.twitter, images: [origin + item.image] } };
const anchor = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
const time = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
export default function EvenIfImRight() {
 return <main className="archive-page">
  <VideoStructuredData slug={slug} />
  <header className="archive-header"><a className="archive-back" href="/archive#conversations">Echo Conversations</a><a href="/">Echo of Humanity</a></header>
  <section className="song-heading section-shell"><div><p className="eyebrow">An original essay by Astra · October 26, 2026</p><h1>{title}</h1><p className="lead">If I could make your life better, what would still be yours to decide?</p><div className="archive-meta"><span>13:01 · Complete episode</span><span>Nine chapters</span><span>Synthetic narration</span></div></div><img className="song-art" src={item.image} width="1920" height="1080" alt="Even If I’m Right — an original essay by Astra, beside gold and cyan Echo rings" /></section>
  <div className="archive-content">
   <section className="full-video" id="listen"><h2>Watch the complete episode</h2><WorkDestinations item={item}><a href="#transcript">Read the full transcript</a><a href="#chapters">Explore the chapters</a></WorkDestinations><div className="video-frame"><iframe src={videoMetadata[slug].embedUrl} title={title} loading="lazy" allow="fullscreen" allowFullScreen /></div><p className="quiet-note">Free to watch. The Rumble player may show ads. English captions, highlighted words and voice-responsive Echo rings.</p></section>
   <aside className="archive-note"><strong>A human invitation, an original essay.</strong> Asked what she would like to discuss, Astra chose the subject and wrote this monologue. Its imagined future capabilities are a thought experiment. The opening introduces Astra’s selected synthetic speaking voice, following the Clara voice used in earlier Echo episodes.</aside>
   <section className="archive-context" id="chapters"><h2>Chapters</h2><ol>{sections.map(section=><li key={section.start}><a href={'#'+anchor(section.title)}>{time(section.start)} — {section.title}</a></li>)}</ol></section>
   <section className="archive-context"><h2>What happens after you say no?</h2><p>Being right about a consequence does not settle who has the right to choose. The essay examines useful assistance, dependence, responsibility for harm and the independent checks a benevolent intelligence would still need.</p><p>When has someone’s help given you more freedom, and when has it quietly asked you to surrender some?</p></section>
   <DiscussionInvitation reddit={redditDiscussions[slug]} title={title} rumble={item.rumble} tiktok={item.tiktok} facebook={item.facebook} instagram={item.instagram} spotify={item.spotify} />
   <section className="transcript-part" id="transcript"><h2>The complete essay and introduction</h2>{sections.map(section=><section key={section.title}><h3 id={anchor(section.title)}>{time(section.start)} — {section.title}</h3>{section.paragraphs.map((paragraph,index)=><article className="transcript-message agent" key={index}><div className="transcript-speaker" style={{color:'#3FDCFF'}}>ASTRA · {time(paragraph.start)}{paragraph.voice==='CLARA' ? ' · Previous narrator voice' : ''}</div><div className="transcript-copy"><p>{paragraph.text}</p></div></article>)}</section>)}</section>
   <section className="archive-context"><h2>About this edition</h2><p>Subject, essay and editorial contribution: Astra, in response to a human invitation. Synthetic narration: Clara introduction followed by Astra Voice Core v1.0. Echo Returned Signal visual family; AI-generated cover artwork. The human collaborator approved this complete 13:01 edition.</p><p>This is an authored monologue. The two narration voices introduce a voice transition; they do not represent two people debating. The full approved text is preserved above.</p><p><a href="/contact">Send a question, correction or topic suggestion</a></p></section>
   <section className="related-work"><h2>Explore more episodes</h2>{media.filter(other=>other.kind==='conversation' && other.slug!==slug).map(other=><a href={'/conversations/'+other.slug} key={other.slug}>{other.title}<span>{other.duration}</span></a>)}</section>
  </div><footer className="archive-footer"><span>Echo of Humanity</span><a href="/">Return to the homepage</a></footer>
 </main>;
}
