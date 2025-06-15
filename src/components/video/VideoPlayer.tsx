import { Box, styled } from "@mui/material";
import PlayVideoIcon from "./PlayVideoIcon";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import { useState } from "react";
import RectangularSkeleton from "../skeleton/RectangularSkeleton";

const ThumbnailWrapper = styled(Box)({
  display: "flex",
  justifyContent: "stretch",
  position: "relative",
  width: "100%",
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
  const { thumbnail, showPlayIcon, ...restProps } = props;
  const [loading, setLoading] = useState(true);

  return (
    <ThumbnailWrapper {...restProps}>
      {loading && <RectangularSkeleton skeletonHeight={300} />}
      <VideoBgImage
        src={thumbnail}
        onLoad={() => setLoading(false)}
        sx={{ display: loading ? "none" : "block" }}
      />
      {showPlayIcon && !loading && <PlayVideoIcon className="play-icon" />}
    </ThumbnailWrapper>
  );
}

export default VideoPlayer;
