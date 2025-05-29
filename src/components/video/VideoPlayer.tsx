import { Box, styled } from "@mui/material";
import PlayVideoIcon from "./PlayVideoIcon";

const ImageWrapper = styled(Box)({
  display: "flex",
  justifyContent: "stretch",
  position: "relative",
  width: "100%",
  cursor: "pointer",
  borderRadius: 10,
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
