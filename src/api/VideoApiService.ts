import { GET_VIDEOS_ROUTE, LOCAL_BACKEND_ROOT_API } from "../constants/api";

class VideoApiService {
  public async getVideos(videoCount: number) {
    console.log("LOCAL_BACKEND_ROOT_API", LOCAL_BACKEND_ROOT_API);
    const rawResponse = await fetch(
      `${LOCAL_BACKEND_ROOT_API}${GET_VIDEOS_ROUTE}/${videoCount}`
    );
    if (!rawResponse.ok) {
      throw new Error(`BAD REQUEST: ${rawResponse.status}`);
    }
    const parsedJson = await rawResponse.json();
    return parsedJson.data.videos;
  }

  public async getVideoById(id: string) {
    const rawResponse = await fetch(
      `${LOCAL_BACKEND_ROOT_API}${GET_VIDEOS_ROUTE}/id/${id}`
    );
    if (!rawResponse.ok) {
      throw new Error(`BAD REQUEST: ${rawResponse.status}`);
    }
    const parsedJson = await rawResponse.json();
    return parsedJson.data.targetVideo;
  }

  public async getRelatedVidoes(videoId: string) {
      const rawResponse = await fetch(
        `${LOCAL_BACKEND_ROOT_API}${GET_VIDEOS_ROUTE}/id/${videoId}/related`
      );

      if (!rawResponse.ok) {
        throw new Error(`BAD REQUEST: ${rawResponse.status}`);
      }
      const parsedJson = await rawResponse.json();
      return parsedJson.data.relatedVideos;
  }
}

export { VideoApiService };
