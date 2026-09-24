// Public setup only. Keep signup closed until the actual account and reply route
// are verified. Never put API keys or account credentials in this file.
export const newsletter: {
  provider: 'Buttondown';
  username: string | null;
  signupEnabled: boolean;
} = {
  provider: 'Buttondown',
  username: 'echoofhumanity',
  signupEnabled: false,
};

export function newsletterFormAction(config = newsletter): string | null {
  if (!config.signupEnabled || !config.username || !/^[a-zA-Z0-9_-]+$/.test(config.username)) {
    return null;
  }
  return `https://buttondown.com/api/emails/embed-subscribe/${config.username}`;
}

export const newsletterIsOpen = newsletterFormAction() !== null;
