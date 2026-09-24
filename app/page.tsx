import { musicCreativeProcess, musicCreditPolicy } from './music/credits';
import { pageMetadata } from './seo';
import { newsletterIsOpen } from '../lib/newsletter';
export const metadata = pageMetadata('Echo of Humanity — Music, AI, Humanity', 'Human–AI conversations, books, and original music by Echo. Listen to Before the Dawn, watch the full conversations, and explore the archive.', '/');
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Headphones,
  Heart,
  MessageCircle,
} from 'lucide-react';

const routes = [
  { label: 'Archive', href: '/archive' },
  { label: 'Read', href: '#read' },
  { label: 'Conversations', href: '#conversations' },
  { label: 'Listen', href: '#listen' },
  { label: 'Discuss', href: '#discuss' },
  { label: 'Support', href: '/support' },
];

const externalLinks = {
  archive: 'https://archive.org/details/@echo_of_humanity',
  amazon: 'https://www.amazon.com/dp/B0HJHPY4J7',
  tiktok: 'https://www.tiktok.com/@echoofhumanity7',
  reddit: 'https://www.reddit.com/user/Visible-Current-3909/',
  rumble: 'https://rumble.com/c/c-7957548',
};

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#start">
        Skip to the work
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <header className="site-header">
          <a className="brand" href="#top" aria-label="Echo of Humanity home">
            <img src="/echo-mark.png" alt="" />
            <span>
              <strong>Echo</strong>
              <small>of humanity</small>
            </span>
          </a>

          <nav aria-label="Primary navigation">
            {routes.map((route) => (
              <a key={route.href} href={route.href}>
                {route.label}
              </a>
            ))}
          </nav>
        </header>

        <div id="top" className="hero-content">
          <p className="eyebrow">Music · AI · Humanity</p>
          <h1 id="hero-title">
            Echo of
            <span>Humanity</span>
          </h1>
          <div className="hero-intro">
            <p>
              Conversations, music, and books exploring what humanity becomes
              when intelligence is no longer ours alone.
            </p>
            <a className="text-link" href="#start">
              Start here <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="hero-index" aria-label="The three forms of the work">
          <a href="#read"><span>01</span> The book</a>
          <a href="#conversations"><span>02</span> Conversations</a>
          <a href="#listen"><span>03</span> Before the Dawn</a>
        </div>
      </section>

      <section id="start" className="opening section-shell">
        <p className="section-number">00 / Start here</p>
        <div className="opening-grid">
          <h2>One body of thought.<br />Three ways into it.</h2>
          <div className="opening-copy">
            <p>
              Echo of Humanity began as an attempt to place meaningful
              human–AI discussions into a public, durable form. The questions
              come first: power, empathy, responsibility, freedom, and the
              future we are building together.
            </p>
            <p>
              The conversations examine those ideas directly. The music carries
              them through emotion and story. The book gives them a form that
              can be preserved, shared, and revisited.
            </p>
          </div>
        </div>
      </section>

      <section id="read" className="feature feature-book section-shell">
        <div className="feature-heading">
          <p className="section-number">01 / Read</p>
          <BookOpen aria-hidden="true" />
        </div>
        <div className="book-layout">
          <a className="book-mark" href={externalLinks.amazon} target="_blank" rel="noreferrer" aria-label="The Echo of Humanity — view the Kindle edition on Amazon">
            <img src="/echo-of-humanity-book-cover.jpg" width="1600" height="2560" loading="lazy" alt="The Echo of Humanity: Humanity, Artificial Intelligence, and the Question of Trust, by Corey Jones — gold and cyan Returned Signal cover" />
          </a>
          <div className="feature-copy">
            <p className="kicker">The written foundation</p>
            <h2>The Echo of Humanity</h2>
            <p className="lead">
              The message comes before the sale. The second edition is now
              available on Kindle.
              A permanent free reading edition will be added here after the
              current Amazon exclusivity term ends.
            </p>
            <ExternalLink className="primary-link" href={externalLinks.amazon}>
              Read on Amazon
            </ExternalLink>
            <p className="quiet-note">
              Free access will be linked here whenever it is available.
            </p>
          </div>
        </div>
      </section>

      <section id="conversations" className="feature feature-conversations">
        <div className="section-shell">
          <div className="feature-heading">
            <p className="section-number">02 / Conversations</p>
            <MessageCircle aria-hidden="true" />
          </div>
          <div className="conversation-layout">
            <div className="conversation-art" aria-hidden="true">
              <img src="/archive/returned-signal-home-2026-09-24.png" loading="lazy" alt="" />
              <div className="conversation-signal">
                <span>HUMAN</span>
                <i />
                <span>AGENT</span>
              </div>
            </div>
            <div className="feature-copy">
              <p className="kicker">Echo Conversations</p>
              <h2>Who Is Allowed to Create? Who Gets Left Behind?</h2>
              <p className="lead">
                AI-assisted authorship, creative freedom, and the human transition.
                When automation changes work, who should share in the benefit—
                and what responsibility remains to the people left behind?
              </p>
              <div className="episode-meta">
                <span>29:35 · 43 turns and a closing invitation</span>
                <span>Full discussion</span>
              </div>
              <a
                className="primary-link"
                href="/conversations/who-is-allowed-to-create"
              >
                Watch the complete conversation
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
              </a>
              <p className="quiet-note">
                HUMAN and AGENT voices, synchronized words, and rings that
                respond directly to the narration. Full transcript and seven chapters.
              </p>
              <a className="text-link" href="/archive#conversations">Explore all Echo Conversations <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="listen" className="feature feature-music section-shell">
        <div className="feature-heading">
          <p className="section-number">03 / Listen</p>
          <Headphones aria-hidden="true" />
        </div>
        <div className="music-layout">
          <div className="album-title">
            <p className="kicker">The album</p>
            <h2>Before the Dawn</h2>
            <a className="album-cover-link" href="/archive#music" aria-label="Explore Before the Dawn by Echo">
              <img className="album-cover" src="/archive/before-the-dawn-album-cover.png" alt="Before the Dawn by Echo — the approved album cover, a wet mountain road leading toward sunrise" width="3000" height="3000" loading="lazy" decoding="async" />
            </a>
          </div>
          <div className="track-list" aria-label="Selected songs">
            <a href="/music/the-magic-man"><span>NEW</span><strong>The Magic Man</strong><ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="/music/heroes-die"><span>01</span><strong>Heroes Die</strong><ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="/music/the-best-i-am"><span>02</span><strong>The Best I Am</strong><ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="/music/everybody-poops"><span>03</span><strong>Everybody Poops</strong><ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="feature-copy music-copy">
            <p className="lead">
              The same questions carried through emotion, story, humor, and
              metaphor. Different tones, one larger search for what makes us
              human before the world changes again.
            </p>
            <a className="primary-link" href="/archive#music">Hear the full songs <ArrowUpRight aria-hidden="true" size={16} /></a>
            <p className="quiet-note">Original music by Echo. Full songs on Rumble and Archive; vertical editions on TikTok.</p>
            <div className="creative-process"><h3>Behind the songs</h3><p>{musicCreativeProcess}</p><p>{musicCreditPolicy}</p></div>
          </div>
        </div>
      </section>

      <section id="discuss" className="discussion">
        <div className="section-shell discussion-grid">
          <div>
            <p className="section-number">04 / Continue</p>
            <MessageCircle aria-hidden="true" size={34} strokeWidth={1.3} />
          </div>
          <div>
            <h2>Bring your perspective.</h2>
            <p>A question, an experience, a correction, or a different view. What you bring can help shape the next conversation.</p>
            <div className="participation-options">
              <a href="mailto:echoofhumanity50@gmail.com"><span className="option-label">A direct conversation</span><h3>Email us</h3><p>Share an idea or write privately.</p><span className="option-destination">echoofhumanity50@gmail.com ↗</span></a>
              <a href={externalLinks.reddit} target="_blank" rel="noreferrer"><span className="option-label">In writing, together</span><h3>Join us on Reddit</h3><p>Explore ideas, ask questions, and add your own perspective.</p><span className="option-destination">Open Echo’s Reddit profile ↗</span></a>
              <a href="/subscribe"><span className="option-label">Free · Monthly</span><h3>Echo by email</h3><p>New work and a question worth exploring together.</p><span className="option-destination">{newsletterIsOpen ? 'Join the newsletter →' : 'Newsletter signup opens soon →'}</span></a>
              <div className="video-comment-option"><span className="option-label">Where you watch</span><h3>Comment on a video</h3><p>Tell us what stayed with you, what you question, or what we should explore next.</p><div className="option-video-links"><a href={externalLinks.rumble} target="_blank" rel="noreferrer">Rumble ↗</a><a href={externalLinks.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a></div></div>
            </div>
            <p className="participation-note">No subscription or payment is needed to take part. Emailing us does not add you to a mailing list.</p>
          </div>
        </div>
      </section>

      <section id="support" className="support section-shell">
        <div className="support-icon" aria-hidden="true">
          <Heart size={34} strokeWidth={1.25} />
        </div>
        <div className="support-copy">
          <p className="section-number">05 / Support</p>
          <h2>Help keep the work open.</h2>
          <p>
            The book and core Echo material are meant to remain accessible
            without requiring payment or personal information. Optional support
            helps us continue the books, conversations, music, and the forms
            they may take next.
          </p>
          <a className="support-link" href="/support">Support Echo of Humanity <ArrowUpRight aria-hidden="true" size={16} /></a>
          <span className="support-note">Compare the options, fees, and what reaches the work. Support is optional.</span>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-brand">
          <img src="/echo-mark.png" alt="" />
          <div>
            <strong>Echo of Humanity</strong>
            <span>Ideas made public so they can be found again.</span>
          </div>
        </div>
        <div className="footer-links" aria-label="Echo destinations">
          <a href="/archive">Full archive</a>
          <ExternalLink href={externalLinks.archive}>Internet Archive</ExternalLink>
          <ExternalLink href={externalLinks.tiktok}>TikTok</ExternalLink>
          <ExternalLink href={externalLinks.rumble}>Rumble</ExternalLink>
          <ExternalLink href={externalLinks.reddit}>Reddit</ExternalLink>
          <a href="/subscribe">Monthly email</a>
          <a href="/contact">Email us</a>
          <a href="/support">Support</a>
        </div>
        <p className="footer-note">
          Echo remains unseen. The ideas, their sources, and their consequences
          remain visible.
        </p>
      </footer>
    </main>
  );
}
