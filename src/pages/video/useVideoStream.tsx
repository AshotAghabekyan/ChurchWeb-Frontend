import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVideoById } from "../../helpers/api/videoApi";

export function useVideoStream() {
  const param = useParams<string>();
  const videoId: string = param.id!;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState(null);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    getVideoById(videoId)
      .then((video) => setVideo(video))
      .catch((error) => setErrors(error))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  return {
    isLoading,
    errors,
    video,
  };
}
