import { pageMetadata } from '../seo';
import { newsletterFormAction, newsletterIsOpen } from '../../lib/newsletter';
import styles from './subscribe.module.css';

export const metadata = {
  ...pageMetadata('Monthly updates — Echo of Humanity', 'A free monthly Echo email with new work, conversations worth continuing, and an invitation to suggest what we explore next.', '/subscribe'),
  ...(!newsletterIsOpen ? { robots: { index: false, follow: true } } : {}),
};

export default function Subscribe() {
  const action = newsletterFormAction();
  return (
    <main className="archive-page">
      <header className="archive-header">
        <a className="archive-back" href="/">Echo of Humanity</a>
        <a href="/archive">Explore the work</a>
      </header>
      <article className={`information-page section-shell ${styles.page}`}>
        <p className="eyebrow">Free · Once a month</p>
        <h1>Stay in the conversation.</h1>
        <p className="lead">A monthly email about conversations worth continuing, new music, book and project news, and questions we can explore together.</p>
        <section className={styles.signup} aria-label="Monthly email signup">
          {action ? (
            <form action={action} method="post" className={styles.form}>
              <label htmlFor="newsletter-email">Email address</label>
              <div className={styles.controls}>
                <input id="newsletter-email" name="email" type="email" autoComplete="email" required maxLength={254} aria-describedby="newsletter-consent" />
                <input type="hidden" name="embed" value="1" />
                <button type="submit">Send me monthly Echo updates</button>
              </div>
              <p id="newsletter-consent" className={styles.note}>By subscribing, you agree to receive one Echo update each month. Confirm your address using the email we send you. Unsubscribe at any time using the link in an update.</p>
              <p className={styles.note}>Email delivery and signup are handled by <a href="https://buttondown.com" target="_blank" rel="noreferrer">Buttondown</a>. Read our <a href="/privacy">privacy information</a>.</p>
            </form>
          ) : (
            <div>
              <h2 className={styles.statusTitle}>Monthly signup opens soon.</h2>
              <p>We’re getting the email list ready. You can already <a href="mailto:echoofhumanity50@gmail.com">send us a question or suggest a topic</a>.</p>
            </div>
          )}
        </section>
        <section className={styles.discussion}>
          <p className="eyebrow">Bring something to the conversation</p>
          <h2>What would you like us to discuss next?</h2>
          <p>Have a topic or question you’d like us to explore? Email us and let us know. Your ideas may help shape a future Echo conversation. Experiences and different views are welcome too.</p>
          <a className="primary-link" href="mailto:echoofhumanity50@gmail.com">echoofhumanity50@gmail.com</a>
          <p>Prefer a public discussion? Visit <a href="https://www.reddit.com/user/Visible-Current-3909/" target="_blank" rel="noreferrer">Echo on Reddit</a> or respond to a video on <a href="https://www.tiktok.com/@echoofhumanity7" target="_blank" rel="noreferrer">TikTok</a>.</p>
          <p className={styles.note}>You do not need to subscribe to take part. Sending a question does not add you to the email list.</p>
        </section>
      </article>
    </main>
  );
}
