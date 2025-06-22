export function shareOnFacebook(link: string) {
  const encodedUrl = encodeURIComponent(link);
  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
}

export function shareOnThreads(link: string) {
  const encodedUrl = encodeURIComponent(link);
  return `https://threads.net/intent/post?text=${encodedUrl}`;
}

export function shareOnX(link: string) {
  const encodedUrl = encodeURIComponent(link);
  return `https://twitter.com/intent/tweet?text=${encodedUrl}`;
}

export function getChurchFacebookPageUrl() {
  return "https://www.facebook.com/newgenerationchurch.am";
}

export function getChurchTelegramChannelUrl() {
  return "https://t.me/newgenerationarmenia";
}
export function getChurchInstagramPageUrl() {
  return "https://www.instagram.com/newgeneration_arm/";
}
