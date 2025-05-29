import { useEffect, useState } from "react";
import { getVideos } from "../../helpers/api/videoApi";

export function useVideoList() {
  const [videosList, setVideosList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promiseVideos = getVideos({ videoCount: 4 });
    promiseVideos
      .then((videos) => {
        setVideosList(videos);
      })
      .catch((error) => console.log("error at fetch videos", error))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    videosList,
    isLoading,
  };
}
