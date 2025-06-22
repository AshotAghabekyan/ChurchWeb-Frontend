import { styled } from "@mui/material";

const StyledIframe = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
});

function VideoEmbededPlayer(props) {
  const { videoLink } = props;
  return (
    <StyledIframe
      src={videoLink}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

export default VideoEmbededPlayer;
