import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVideoById } from "../../helpers/api/videoApi";

export function useVideoStream() {
  const param = useParams<string>();
  const videoId: string = param.id!;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    getVideoById(videoId)
      .then((video) => setVideo(video))
      .catch((error) => console.log("error", error))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  return {
    isLoading,
    video,
  };
}
