import { VideoApiService } from "../../api/VideoApiService";

export async function getVideos(props: Record<string, number>) {
  const { videoCount } = props;
  const videoService: VideoApiService = new VideoApiService();
  const videos = await videoService.getVideos(videoCount);
  return videos;
}

export async function getVideoById(id: string) {
  const videoService: VideoApiService = new VideoApiService();
  const video = await videoService.getVideoById(id);
  return video;
}

export async function getRelatedVideos(videoId: string) {
  const videoService = new VideoApiService();
  const relatedVideos = await videoService.getRelatedVidoes(videoId);
  return relatedVideos;
}
