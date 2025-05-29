import { GET_VIDEOS_ROUTE, LOCAL_BACKEND_ROOT_API } from "../constants/api";

class VideoApiService {
  public async getVideos(videoCount: number) {
    try {
      const rawResponse = await fetch(
        `${LOCAL_BACKEND_ROOT_API}${GET_VIDEOS_ROUTE}/${videoCount}`
      );
      if (!rawResponse.ok) {
        throw new Error(`BAD REQUEST: ${rawResponse.status}`);
      }
      const parsedJson = await rawResponse.json();
      return parsedJson.data.videos;
    } catch (error) {
      console.log("error", error);
    }
  }

  public async getVideoById(id: string) {
    try {
      const rawResponse = await fetch(
        `${LOCAL_BACKEND_ROOT_API}${GET_VIDEOS_ROUTE}/id/${id}`
      );
      if (!rawResponse.ok) {
        throw new Error(`BAD REQUEST: ${rawResponse.status}`);
      }
      const parsedJson = await rawResponse.json();
      return parsedJson.data.targetVideo;
    } catch (error) {
      console.log("error", error);
    }
  }

  public async getRelatedVidoes(videoId: string) {
    try {
      const rawResponse = await fetch(
        `${LOCAL_BACKEND_ROOT_API}${GET_VIDEOS_ROUTE}/id/${videoId}/related`
      );

      if (!rawResponse.ok) {
        throw new Error(`BAD REQUEST: ${rawResponse.status}`);
      }
      const parsedJson = await rawResponse.json();
      return parsedJson.data.relatedVideos;
    } catch (error) {
      console.error("error", error);
    }
  }
}

export { VideoApiService };
