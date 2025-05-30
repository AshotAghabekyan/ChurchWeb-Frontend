import { Box, styled } from "@mui/material";
import PlayVideoIcon from "./PlayVideoIcon";
import { COMMON_BORDER_RADIUS } from "../../constants/common";

const ImageWrapper = styled(Box)({
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

  return (
    <ImageWrapper {...restProps}>
      <VideoBgImage src={thumbnail} />
      {showPlayIcon && <PlayVideoIcon className="play-icon" />}
    </ImageWrapper>
  );
}

export default VideoPlayer;
