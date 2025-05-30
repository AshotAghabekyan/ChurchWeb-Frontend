import { Box, styled, Typography } from "@mui/material";
import VideoPlayer from "../../components/video/VideoPlayer";
import { DARK_GRAY, WHITE } from "../../constants/colors";
import SelectedVideoActions from "./actionBar/SelectedVideoActions";
import useLayout from "../../hooks/layout/useLayout";
import { COMMON_BORDER_RADIUS } from "../../constants/common";

const VideoPlayerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
  alignSelf: "center",
  width: "80%",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    padding: "0",
    width: "100%",
  },
}));

const BottomContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  borderRadius: `0 0 ${COMMON_BORDER_RADIUS}px ${COMMON_BORDER_RADIUS}px`,
  backgroundColor: DARK_GRAY,
  padding: "1rem",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: WHITE,
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
  },
}));

function SelectedVideoPlayer(props) {
  const { video } = props;
  const { snippet, statistics } = video;
  const { thumbnails, title } = snippet;
  const imageUrl = thumbnails.maxres.url;
  const { smallLayout, mediumLayout } = useLayout();
  return (
    <VideoPlayerContainer>
      <VideoPlayer
        showPlayIcon
        thumbnail={imageUrl}
        sx={{ borderRadius: mediumLayout ? "0" : "10px 10px 0 0" }}
      />
      <BottomContainer>
        <StyledTypography variant={smallLayout ? "h6" : "h5"}>
          {title}
        </StyledTypography>
        <SelectedVideoActions statProps={statistics} />
      </BottomContainer>
    </VideoPlayerContainer>
  );
}

export default SelectedVideoPlayer;
