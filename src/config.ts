/**
 * Global Configuration for the Featured YouTube Video.
 * To change the featured YouTube video on the website, simply update this URL.
 * The website will automatically parse the video ID, embed it in the hero background card,
 * and play it in the showreel playback modal.
 */
export const FEATURED_YOUTUBE_URL = "https://www.youtube.com/embed/3HyuX0-AzzI";

/**
 * Helper to extract the video ID from any standard YouTube URL format (watch, embed, or short link)
 */
export function getYouTubeId(url: string): string {
  if (!url) return "";
  
  // Try to match standard embed URLs: /embed/ID
  const embedMatch = url.match(/\/embed\/([^/?#]+)/);
  if (embedMatch) return embedMatch[1];

  // Try to match standard watch URLs: ?v=ID or &v=ID
  const watchMatch = url.match(/[?&]v=([^&#]+)/);
  if (watchMatch) return watchMatch[1];

  // Try to match short share URLs: youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([^/?#]+)/);
  if (shortMatch) return shortMatch[1];

  // Fallback / direct ID
  return url;
}
