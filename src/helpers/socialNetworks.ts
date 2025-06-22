export function shareOnFacebook(link: string): string {
  const encodedUrl = encodeURIComponent(link);
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
}

export function shareOnThreads(link: string): string {
  const encodedUrl = encodeURIComponent(link);
  return `https://threads.net/intent/post?text=${encodedUrl}`;
}

export function shareOnX(link: string): string {
  const encodedUrl = encodeURIComponent(link);
  return `https://twitter.com/intent/tweet?text=${encodedUrl}`;
}

export function getChurchFacebookPageUrl(): string {
  return "https://www.facebook.com/newgenerationchurch.am";
}

export function getChurchTelegramChannelUrl(): string {
  return "https://t.me/newgenerationarmenia";
}
export function getChurchInstagramPageUrl(): string {
  return "https://www.instagram.com/newgeneration_arm/";
}
