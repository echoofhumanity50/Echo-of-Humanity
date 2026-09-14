export const musicCreativeProcess = "I start with my own concepts, lyrics, and creative vision, then develop and refine the song with AI tools. I shape the sound and imagery and choose the finished version. Suno generates the music and vocals; the artwork is AI-generated under my direction.";
export const musicCreditPolicy = "If a song uses a different creative process or additional collaborators, its individual credits will say so.";

// Keep per-song credits explicit so future releases can describe a different process.
export const recordingCredits: Record<string, string> = {
  "the-magic-man": musicCreativeProcess,
  "heroes-die": musicCreativeProcess,
  "the-best-i-am": musicCreativeProcess,
  "everybody-poops": musicCreativeProcess,
};
