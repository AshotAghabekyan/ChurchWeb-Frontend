export function generateYoutubeVideoLink(videoId: string): string {
  return `https://youtu.be/${videoId}?si=CZn970dyAAFBwflr`;
}

export function generateEmbededYoutubeVideoLink(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

export function genereateYoutubeVideoWatchLink(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
