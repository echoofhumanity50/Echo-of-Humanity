import { ArrowUpRight, Globe, Mail, MessageCircle } from 'lucide-react';
import { newsletterIsOpen } from '../lib/newsletter';

export function DiscussionInvitation({ title }: { title?: string }) {
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
      <a className="discussion-reddit" href="https://www.reddit.com/user/Visible-Current-3909/" target="_blank" rel="noreferrer"><MessageCircle size={19} aria-hidden="true" /> Join us on Reddit <span className="sr-only">(opens in a new tab)</span><ArrowUpRight size={16} aria-hidden="true" /></a>
      {newsletterIsOpen && <p className="discussion-updates"><a href="/subscribe">Get the free monthly email</a>, with new work and a question to explore together.</p>}
    </section>
  );
}
