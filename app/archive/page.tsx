import { musicCreativeProcess, musicCreditPolicy } from '../music/credits';
import { pageMetadata, StructuredData, origin } from '../seo';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { archiveUrl, media, workUrl } from './catalog';

export const metadata = pageMetadata('The Full Archive — Echo of Humanity', 'Full Echo Conversations and four Before the Dawn songs by Echo, including The Magic Man. Watch, listen, and read the complete song lyrics.', '/archive');

export default function MediaArchive() {
  return (
    <main className="archive-page library-page">
      <StructuredData data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Echo of Humanity — Full Archive", url: `${origin}/archive`, mainEntity: { "@type": "ItemList", itemListElement: media.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.title, url: `${origin}${workUrl(item)}` })) } }} />
      <header className="archive-header">
        <a className="archive-back" href="/"><ArrowLeft size={16} aria-hidden="true" />Echo of Humanity</a>
        <nav className="library-nav" aria-label="Archive navigation"><a href="#conversations">Conversations</a><a href="#music">Music</a></nav>
      </header>
      <section className="archive-hero">
        <div><p className="eyebrow">Ideas made public</p><h1>The full archive.</h1><div className="archive-meta"><span>Echo Conversations</span><span>Before the Dawn</span><span>Free to watch</span></div></div>
        <div className="archive-summary"><p>Complete conversations. Complete songs. A place to return to the work and find what comes next.</p><p>The full videos live on Internet Archive. TikTok carries full conversations and vertical editions, and the Echo website connects the music, conversations, and book.</p><a className="archive-back" href="https://archive.org/details/@echo_of_humanity" target="_blank" rel="noreferrer">Visit the Echo Archive profile <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </section>
      <div className="archive-content library-content">
        {(['conversation', 'music'] as const).map((kind) => (
          <section className="library-section" id={kind === 'music' ? 'music' : 'conversations'} key={kind}>
            <div className="library-heading"><p className="section-number">{kind === 'music' ? '02 / Original music' : '01 / Human and AI'}</p><h2>{kind === 'music' ? 'Before the Dawn' : 'Echo Conversations'}</h2><p>{kind === 'music' ? 'Four songs by Echo. Different tones, one larger search for what makes us human.' : 'Begin with the complete founding conversation, then explore When AI Goes Rogue — Who Is Responsible?'}</p><a className="archive-back" href={kind === 'music' ? 'https://archive.org/details/@echo_of_humanity/lists/1/before-the-dawn-%E2%80%94-full-songs' : 'https://archive.org/details/@echo_of_humanity/lists/2/echo-conversations-%E2%80%94-full-videos'} target="_blank" rel="noreferrer">Browse this collection on Archive <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            {kind === 'music' && <div className="creative-process"><h3>Behind the songs</h3><p>{musicCreativeProcess}</p><p>{musicCreditPolicy}</p></div>}
            <div className="media-grid">
              {media.filter((item) => item.kind === kind).map((item) => (
                <article className="media-card" key={item.slug}>
                  <a className="media-art" href={workUrl(item)} aria-label={`Watch ${item.title} in full`}><img src={item.image} alt="" loading="lazy" /><span>{item.duration} · Full version</span></a>
                  <div className="media-copy"><p className="kicker">{item.year} · {kind === 'music' ? 'Echo' : 'Echo Conversations'}</p><h3><a href={workUrl(item)}>{item.title}</a></h3><p>{item.description}</p><p className="media-note">{item.note}</p><div className="media-links"><a href={workUrl(item)}>{kind === 'music' ? 'Listen & read lyrics' : 'Explore conversation'}</a><a href={archiveUrl(item.slug)} target="_blank" rel="noreferrer">Watch in full <ArrowUpRight size={15} aria-hidden="true" /></a>{item.transcript && <a href={item.transcript}>Read transcript</a>}{item.tiktok && <a href={`https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`} target="_blank" rel="noreferrer">TikTok edition</a>}</div></div>
                </article>
              ))}
            </div>
          </section>
        ))}
        <aside className="archive-context"><h2>Preserving the conversation</h2><p>The older videos remain records of their original exchanges, including their historical narration and imagery. Later notes stay separate. AI-generated responses are preserved as model outputs; the conversation itself does not establish consciousness or independent memory.</p><p>The conversations use AI-generated narration and imagery. The music credits above distinguish the creator’s concepts, lyrics and direction from the AI-generated performance and artwork.</p><p><a href="/#read">Explore the book</a> · <a href="https://www.reddit.com/user/Visible-Current-3909/" target="_blank" rel="noreferrer">Continue the discussion</a> · <a href="https://buymeacoffee.com/capto50z" target="_blank" rel="noreferrer">Optional support</a></p></aside>
      </div>
      <footer className="archive-footer"><span>Some echoes are meant to be heard.</span><a className="archive-back" href="/">Return to Echo of Humanity</a></footer>
    </main>
  );
}
