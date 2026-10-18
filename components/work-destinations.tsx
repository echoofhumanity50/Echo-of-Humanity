import type { ReactNode } from 'react';
import { archiveUrl, type MediaItem } from '../app/archive/catalog';

export function WorkDestinations({ item, compact = false, children }: { item: MediaItem; compact?: boolean; children?: ReactNode }) {
  const stores = item.kind === 'music' ? item.musicStores : undefined;
  const hasStores = Boolean(stores?.spotify || stores?.appleMusic || stores?.itunes);
  return <div className={`work-destinations${compact ? ' work-destinations-compact' : ''}`}>
    <div className="work-primary-links" aria-label={`Watch or listen to ${item.title}`}>
      {hasStores ? <>
        {stores?.spotify && <a className="work-primary" href={stores.spotify} target="_blank" rel="noreferrer">Listen on Spotify</a>}
        {stores?.appleMusic && <a className="work-secondary" href={stores.appleMusic} target="_blank" rel="noreferrer">Listen on Apple Music</a>}
        {stores?.itunes && <a className="work-purchase" href={stores.itunes} target="_blank" rel="noreferrer">Buy on iTunes</a>}
      </> : <>
        {item.rumble && <a className="work-primary" href={item.rumble} target="_blank" rel="noreferrer">{item.kind === 'music' ? 'Watch full song on Rumble' : 'Watch on Rumble'}</a>}
        {item.kind === 'conversation' && item.spotify && <a className="work-secondary" href={item.spotify} target="_blank" rel="noreferrer">Listen on Spotify</a>}
      </>}
    </div>
    {children && <div className="media-links work-text-links">{children}</div>}
    {!compact && <details className="work-more-links">
      <summary>More ways to watch or listen</summary>
      <div className="media-links">
        {hasStores && item.rumble && <a href={item.rumble} target="_blank" rel="noreferrer">Watch full song on Rumble</a>}
        {!item.archivePending && <a href={archiveUrl(item.slug)} target="_blank" rel="noreferrer">Internet Archive</a>}
        {item.facebook && <a href={item.facebook} target="_blank" rel="noreferrer">Full video on Facebook</a>}
        {item.tiktok && <a href={`https://www.tiktok.com/@echoofhumanity7/video/${item.tiktok}`} target="_blank" rel="noreferrer">Full video on TikTok</a>}
        {item.instagram && <a href={item.instagram} target="_blank" rel="noreferrer">Instagram excerpt</a>}
      </div>
    </details>}
  </div>;
}
