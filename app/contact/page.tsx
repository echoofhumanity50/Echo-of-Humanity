import { pageMetadata } from '../seo';
import { newsletterIsOpen } from '../../lib/newsletter';
export const metadata = pageMetadata('Contact — Echo of Humanity', 'Questions, feedback, collaborations, and corrections for Echo of Humanity and Before the Dawn music.', '/contact');
export default function Contact() {
  return (
    <main className="archive-page">
      <header className="archive-header"><a className="archive-back" href="/">Echo of Humanity</a><a href="/archive">Explore the work</a></header>
      <article className="information-page section-shell">
        <p className="eyebrow">Continue the conversation</p>
        <h1>Get in touch.</h1>
        <p className="lead">Have a topic or question you’d like us to discuss? Share it with us. Experiences, different views, corrections, and ideas for working together are welcome.</p>
        <a className="primary-link" href="mailto:echoofhumanity50@gmail.com">echoofhumanity50@gmail.com</a>
        <h2>What should we explore next?</h2>
        <p>Tell us what you are thinking about and why it matters to you. Your contribution may help shape a future Echo conversation. We will ask before publicly quoting or identifying you from a private message.</p>
        <h2>Help us find the right work</h2>
        <p>If you are responding to a song or conversation, include its title and link. For corrections, please include the passage and any source that helps explain the change.</p>
        <h2>Public discussion</h2>
        <p>You can also ask a question or join a discussion through <a href="https://www.reddit.com/user/Visible-Current-3909/" target="_blank" rel="noreferrer">Echo’s Reddit profile</a>, or respond to a video on <a href="https://www.tiktok.com/@echoofhumanity7" target="_blank" rel="noreferrer">TikTok</a> or <a href="https://rumble.com/c/c-7957548" target="_blank" rel="noreferrer">Rumble</a>. Find the work in the <a href="/archive">full archive</a>.</p>
        <h2>Monthly newsletter</h2><p>{newsletterIsOpen ? "Get new work and a question to explore together." : "Our free monthly newsletter is being prepared; signup opens soon."} <a href="/subscribe">About Echo’s monthly email</a>.</p>
        <p className="quiet-note">Email goes to our Gmail inbox. Sending a question does not subscribe you to a mailing list. See <a href="/privacy">Privacy</a> for more information.</p>
      </article>
    </main>
  );
}
