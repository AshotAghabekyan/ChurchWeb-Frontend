import { Box, styled } from "@mui/material";
import PlayVideoIcon from "./PlayVideoIcon";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import { useEffect, useState } from "react";
import RectangularSkeleton from "../skeleton/RectangularSkeleton";
import VideoEmbededPlayer from "../../pages/video/videoItem/VideoEmbededPlayer";

const ThumbnailWrapper = styled(Box)({
  display: "flex",
  justifyContent: "stretch",
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  cursor: "pointer",
  borderRadius: COMMON_BORDER_RADIUS,
  overflow: "hidden",
  "&:hover .play-icon": {
    opacity: 1,
  },
});

const VideoBgImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

function VideoPlayer(props: any) {
  const { thumbnail, videoUrl, showPlayIcon, ...restProps } = props;
  const [loading, setLoading] = useState(true);
  const [loadEmbededVideo, setLoadEmbededVideo] = useState(false);
  useEffect(() => setLoadEmbededVideo(false), [videoUrl]);

  return (
    <ThumbnailWrapper {...restProps}>
      {loading && <RectangularSkeleton skeletonHeight={"300px"} />}
      {!loadEmbededVideo && (
        <VideoBgImage
          src={thumbnail}
          onLoad={() => setLoading(false)}
          onClick={() => setLoadEmbededVideo(true)}
          sx={{ display: loading ? "none" : "block" }}
        />
      )}
      {showPlayIcon && !loading && !loadEmbededVideo && (
        <PlayVideoIcon
          onClick={() => setLoadEmbededVideo(true)}
          className="play-icon"
        />
      )}
      {loadEmbededVideo && <VideoEmbededPlayer videoLink={videoUrl} />}
    </ThumbnailWrapper>
  );
}

export default VideoPlayer;
