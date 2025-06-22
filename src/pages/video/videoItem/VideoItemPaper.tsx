import { useNavigate } from "react-router";
import { Paper, styled, Typography } from "@mui/material";
import VideoPlayer from "../../../components/video/VideoPlayer";
import VideoBottomBar from "../actionBar/VideoBottomBar";
import { CONCRETE_VIDEO_PAGE } from "../../../constants/pages";
import { COMMON_BORDER_RADIUS } from "../../../constants/common";

const StyledPaper = styled(Paper)({
  borderRadius: COMMON_BORDER_RADIUS,
});

function VideoItemPaper(props) {
  const {
    video,
    showBottomSection = true,
    showTitle = false,
    slotProps = {},
  } = props;
  const navigator = useNavigate();
  const { snippet, statistics, id: videoId } = video;
  const { thumbnails } = snippet;
  const imageUrl = thumbnails.maxres.url;
  const { videoPlayer: videoPlayerProps = {} } = slotProps;

  return (
    <StyledPaper elevation={8}>
      <VideoPlayer
        thumbnail={imageUrl}
        showPlayIcon
        onClick={() => navigator(`${CONCRETE_VIDEO_PAGE}/${videoId}`)}
        {...videoPlayerProps}
      />
      {showTitle && (
        <Typography
          variant="overline"
          sx={{ padding: "12px", textAlign: "center" }}
        >
          {snippet.title}
        </Typography>
      )}
      {showBottomSection && (
        <VideoBottomBar slotProps={{ statistics, actions: { videoId } }} />
      )}
    </StyledPaper>
  );
}

export default VideoItemPaper;
