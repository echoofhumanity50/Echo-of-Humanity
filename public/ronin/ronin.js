(() => {
  'use strict';
  const descriptions = [
    'Opening page: One and Aishi are called to work for a merchant.',
    'One meets Ori while Aishi waits outside the room.',
    'Ori welcomes the swordsman into his service; One asks what he wants.',
    'One takes tea with Ori, then returns to Aishi with a task.',
    'One and Aishi leave the merchant and discuss the mysterious assignment.'
  ];
  const image = document.querySelector('#sample-image');
  const open = document.querySelector('#page-open');
  const dialog = document.querySelector('#reader');
  const readerImage = document.querySelector('#reader-image');
  const tabs = [...document.querySelectorAll('[data-page]')];
  let current = 0;
  function show(index) {
    current = Math.max(0, Math.min(4, index));
    const src = `./assets/sample-${current + 1}.jpg`;
    image.src = src;
    image.alt = descriptions[current];
    readerImage.src = src;
    readerImage.alt = descriptions[current];
    open.setAttribute('aria-label', `Open sample page ${current + 1} in the larger reader`);
    ['#sample-count', '#reader-count'].forEach(id => document.querySelector(id).textContent = `Page ${current + 1} of 5`);
    ['#sample-prev', '#reader-prev'].forEach(id => document.querySelector(id).disabled = current === 0);
    ['#sample-next', '#reader-next'].forEach(id => document.querySelector(id).disabled = current === 4);
    tabs.forEach((tab, i) => i === current ? tab.setAttribute('aria-current', 'true') : tab.removeAttribute('aria-current'));
    document.querySelector('.reader-scroll').scrollTop = 0;
  }
  document.querySelector('#sample-prev').addEventListener('click', () => show(current - 1));
  document.querySelector('#sample-next').addEventListener('click', () => show(current + 1));
  document.querySelector('#reader-prev').addEventListener('click', () => show(current - 1));
  document.querySelector('#reader-next').addEventListener('click', () => show(current + 1));
  tabs.forEach(tab => tab.addEventListener('click', () => show(Number(tab.dataset.page))));
  open.addEventListener('click', () => {
    show(current);
    dialog.showModal();
    document.body.classList.add('reader-open');
    document.querySelector('#reader-close').focus();
  });
  document.querySelector('#reader-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('reader-open');
    open.focus({preventScroll:true});
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  });
  document.querySelector('#reader-zoom').addEventListener('click', event => {
    const zoomed = document.querySelector('.reader-scroll').classList.toggle('is-zoomed');
    event.currentTarget.setAttribute('aria-pressed', String(zoomed));
    event.currentTarget.textContent = zoomed ? 'Fit page' : 'Zoom in';
  });
  show(0);
})();

(() => {
  'use strict';
  const player = document.getElementById('ronin-player');
  const playButton = document.getElementById('film-play');
  const captions = player.querySelector('track');
  const chapters = document.querySelectorAll('.chapter-choice');

  function playChapter() {
    // Give the native controls keyboard focus and keep them usable if playback fails.
    player.focus({ preventScroll: true });
    player.play().catch(() => { playButton.hidden = true; });
  }

  playButton.hidden = false;
  playButton.addEventListener('click', playChapter);
  player.addEventListener('play', () => { playButton.hidden = true; });

  for (const chapter of chapters) {
    chapter.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (player.getAttribute('src') !== chapter.dataset.film) {
        player.poster = chapter.dataset.poster;
        captions.src = chapter.dataset.captions;
        player.src = chapter.dataset.film;
        player.setAttribute('aria-label', chapter.querySelector('.chapter-name').textContent);
        for (const item of chapters) item.removeAttribute('aria-current');
        chapter.setAttribute('aria-current', 'true');
      }
      player.scrollIntoView({ block: 'center' });
      playChapter();
    });
  }
})();
