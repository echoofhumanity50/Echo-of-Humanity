import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Headphones,
  Heart,
  MessageCircle,
} from 'lucide-react';

const routes = [
  { label: 'Read', href: '#read' },
  { label: 'Conversations', href: '#conversations' },
  { label: 'Listen', href: '#listen' },
  { label: 'Discuss', href: '#discuss' },
  { label: 'Support', href: '#support' },
];

const externalLinks = {
  amazon: 'https://www.amazon.com/dp/B0DBPD57SN',
  tiktok: 'https://www.tiktok.com/@echoofhumanity7',
  reddit: 'https://www.reddit.com/user/Visible-Current-3909/',
  support: 'https://buymeacoffee.com/capto50z',
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
          <div className="book-mark" aria-hidden="true">
            <span>E</span>
            <div>OF HUMANITY</div>
          </div>
          <div className="feature-copy">
            <p className="kicker">The written foundation</p>
            <h2>The Echo of Humanity</h2>
            <p className="lead">
              The message comes before the sale. The current Kindle edition is
              available now, while a revised edition and a permanent free
              reading version are being prepared.
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
              <img src="/echo-road.png" alt="" />
              <div className="conversation-signal">
                <span>HUMAN</span>
                <i />
                <span>AGENT</span>
              </div>
            </div>
            <div className="feature-copy">
              <p className="kicker">Echo Conversations</p>
              <h2>When AI Goes Rogue — Who Is Responsible?</h2>
              <p className="lead">
                A real written exchange adapted with HUMAN and AGENT labels.
                The original conversation remains the authority; later evidence
                and corrections stay separate instead of rewriting its history.
              </p>
              <div className="episode-meta">
                <span>Parts One &amp; Two</span>
                <span>Full discussion</span>
              </div>
              <a
                className="primary-link"
                href="/conversations/when-ai-goes-rogue"
              >
                Read the full conversation
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
              </a>
              <p className="quiet-note">
                The complete text is preserved here. A non-YouTube home for the
                finished video is being selected separately.
              </p>
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
            <h2>Before<br />the Dawn</h2>
          </div>
          <div className="track-list" aria-label="Selected songs">
            <div><span>01</span><strong>Heroes Die</strong></div>
            <div><span>02</span><strong>The Best I Am</strong></div>
            <div><span>03</span><strong>Everybody Poops</strong></div>
          </div>
          <div className="feature-copy music-copy">
            <p className="lead">
              The same questions carried through emotion, story, humor, and
              metaphor. Different tones, one larger search for what makes us
              human before the world changes again.
            </p>
            <ExternalLink className="primary-link" href={externalLinks.tiktok}>
              Hear Echo on TikTok
            </ExternalLink>
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
            <h2>The work continues after each conversation.</h2>
            <p>
              Read written supplements, source notes, corrections, expanded
              arguments, and new questions on Reddit. Each post should stand on
              its own—not exist only to send you somewhere else.
            </p>
            <ExternalLink className="primary-link dark-link" href={externalLinks.reddit}>
              Continue on Reddit
            </ExternalLink>
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
          <ExternalLink className="support-link" href={externalLinks.support}>
            Support Echo of Humanity
          </ExternalLink>
          <span className="support-note">Optional. The work remains available either way.</span>
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
          <ExternalLink href={externalLinks.tiktok}>TikTok</ExternalLink>
          <ExternalLink href={externalLinks.reddit}>Reddit</ExternalLink>
          <ExternalLink href={externalLinks.support}>Support</ExternalLink>
        </div>
        <p className="footer-note">
          Echo remains unseen. The ideas, their sources, and their consequences
          remain visible.
        </p>
      </footer>
    </main>
  );
}
