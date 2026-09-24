import { ArrowUpRight, Globe, Mail, MessageCircle } from 'lucide-react';
import { newsletterIsOpen } from '../lib/newsletter';

export function DiscussionInvitation({ title, rumble, tiktok, reddit }: { title?: string; rumble?: string; tiktok?: string; reddit?: string }) {
  const subject = title ? `Echo discussion: ${title}` : 'A question for Echo of Humanity';
  return (
    <section className="discussion-invitation" aria-label="Join the Echo discussion">
      <p className="eyebrow">Your perspective belongs here</p>
      <h2>What do you think?</h2>
      <p>Share a question, an experience, or a different view. Let’s keep the conversation going—what you bring may help shape what we explore together next.</p>
      <div className="discussion-contact-cards">
        <a className="discussion-contact-card discussion-website" href="/contact">
          <Globe size={23} aria-hidden="true" />
          <span><strong>Join the discussion</strong><span>echoofhumanity.net/contact</span></span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
        <a className="discussion-contact-card discussion-email" href={`mailto:echoofhumanity50@gmail.com?subject=${encodeURIComponent(subject)}`}>
          <Mail size={23} aria-hidden="true" />
          <span><strong>Email us</strong><span>echoofhumanity50@gmail.com</span></span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>
      <a className="discussion-reddit" href={reddit || 'https://www.reddit.com/user/Visible-Current-3909/'} target="_blank" rel="noreferrer"><MessageCircle size={19} aria-hidden="true" /> {reddit ? 'Discuss this release on Reddit' : 'Join us on Reddit'} <span className="sr-only">(opens in a new tab)</span><ArrowUpRight size={16} aria-hidden="true" /></a>
      <p>Watching on a video platform? Leave a comment there too: what stayed with you, what do you question, or what should we explore next?</p>
      <div className="video-comment-links"><a href={rumble || 'https://rumble.com/c/c-7957548'} target="_blank" rel="noreferrer">Comment on Rumble</a><a href={tiktok ? `https://www.tiktok.com/@echoofhumanity7/video/${tiktok}` : 'https://www.tiktok.com/@echoofhumanity7'} target="_blank" rel="noreferrer">Comment on TikTok</a></div>
      <p className="discussion-updates"><a href="/subscribe">{newsletterIsOpen ? 'Get the free monthly email' : 'Monthly newsletter · signup opens soon'}</a></p>
    </section>
  );
}
