import { Stack, styled, Typography } from "@mui/material";
import VideoPlayer from "../../components/video/VideoPlayer";
import { DARK_GRAY, WHITE } from "../../constants/colors";
import SelectedVideoActions from "./actionBar/SelectedVideoActions";
import useLayout from "../../hooks/layout/useLayout";
import { COMMON_BORDER_RADIUS, CONTENT_PADDING } from "../../constants/common";
import { generateEmbededYoutubeVideoLink } from "../../helpers/video";

const VideoPlayerContainer = styled(Stack)(({ theme }) => ({
  justifyContent: "stretch",
  alignSelf: "center",
  padding: "20px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

const BottomContainer = styled(Stack)({
  gap: "1rem",
  borderRadius: `0 0 ${COMMON_BORDER_RADIUS}px ${COMMON_BORDER_RADIUS}px`,
  backgroundColor: DARK_GRAY,
  padding: CONTENT_PADDING,
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
  const { snippet, statistics, id: videoId } = video;
  const { thumbnails, title } = snippet;
  const imageUrl = thumbnails.maxres.url;
  const { smallLayout, mediumLayout } = useLayout();

  return (
    <VideoPlayerContainer>
      <VideoPlayer
        showPlayIcon
        thumbnail={imageUrl}
        videoUrl={generateEmbededYoutubeVideoLink(videoId)}
        sx={{ borderRadius: mediumLayout ? "0" : "10px 10px 0 0" }}
      />
      <BottomContainer>
        <StyledTypography variant={smallLayout ? "h6" : "h5"}>
          {title}
        </StyledTypography>
        <SelectedVideoActions
          statProps={statistics}
          actionProps={{ videoId }}
        />
      </BottomContainer>
    </VideoPlayerContainer>
  );
}

export default SelectedVideoPlayer;
