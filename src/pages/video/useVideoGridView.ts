import { useEffect, useState } from "react";
import { getVideos } from "../../helpers/api/videoApi";

export function useVideoList() {
  const [videosList, setVideosList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const promiseVideos = getVideos({ videoCount: 4 });
    promiseVideos
      .then((videos) => {
        setVideosList(videos);
      })
      .catch((error) => setErrors(error))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    videosList,
    isLoading,
    errors,
  };
}
