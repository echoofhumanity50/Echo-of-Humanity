export const musicCreativeProcess = "I start with my own concepts, lyrics, and creative vision, then develop and refine the song with AI tools. I shape the sound and imagery and choose the finished version. Suno generates the music and vocals; the artwork is AI-generated under my direction.";
export const musicCreditPolicy = "If a song uses a different creative process or additional collaborators, its individual credits will say so.";
export const musicCollectionProcess = "Each song’s page explains how it was made. For Heroes Die, The Best I Am, Everybody Poops and The Magic Man, Echo’s creator supplied the concepts, lyrics and creative direction, developing the songs with AI tools. For The Man Who Wouldn’t Look Away, Astra (ChatGPT) wrote the lyrics, concept and musical direction from sustained conversations and shared work with Echo’s creator. Suno generated the music and vocals; the artwork is AI-generated.";

// Keep per-song credits explicit so future releases can describe a different process.
export const recordingCredits: Record<string, string> = {
  "the-man-who-wouldnt-look-away": "Lyrics, concept and musical direction by Astra (ChatGPT), developed from extensive conversations and shared work with Echo’s creator. Music and vocals generated with Suno. Artwork concept and release design by Astra; AI-generated imagery. Echo’s creator supplied the context, evaluated the recording and chose to share it.",
  "the-magic-man": musicCreativeProcess,
  "heroes-die": musicCreativeProcess,
  "the-best-i-am": musicCreativeProcess,
  "everybody-poops": musicCreativeProcess,
};
