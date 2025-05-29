import { Box, styled } from "@mui/material";
import VideoStatsBar from "./VideoStatBar";
import VideoActionsBar from "./VideoActionBar";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "1rem",
  justifyContent: "flex-start",
});

function VideoBottomBar(props) {
  const { slotProps = {} } = props;
  const { statistics, actionProps } = slotProps;

  return (
    <Container>
      <VideoStatsBar {...statistics} />
      <VideoActionsBar {...actionProps} />
    </Container>
  );
}

export default VideoBottomBar;
