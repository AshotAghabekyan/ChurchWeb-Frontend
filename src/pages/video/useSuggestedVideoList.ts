import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRelatedVideos } from "../../helpers/api/videoApi";
import useLayout from "../../hooks/layout/useLayout";

export function useSuggestedVideoList() {
  const { smallLayout } = useLayout();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const params = useParams();
  const videoId = params.id!;

  useEffect(() => {
    getRelatedVideos(videoId)
      .then((relatedVideos) => setRelatedVideos(relatedVideos))
      .catch((error) => console.log("error", error))
      .finally(() => setIsLoading(false));
  }, [videoId]);

  return {
    isLoading,
    relatedVideos,
    smallLayout,
  };
}
