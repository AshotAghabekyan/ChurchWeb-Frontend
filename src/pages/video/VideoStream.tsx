import { Box, Stack, styled } from "@mui/material";
import { DARK_BLACK } from "../../constants/colors";
import { useVideoStream } from "./useVideoStream";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import SelectedVideoPlayer from "./SelectedVideoPlayer";
import SuggestedVideoList from "./SuggestedVideoList";
import ServerErrorPage from "../exceptions/ServerErrorPage";

const Container = styled(Stack)({
  width: "100%",
  backgroundColor: DARK_BLACK,
});

function VideoStream() {
  const { video, isLoading, errors } = useVideoStream();

  return (
    <Box>
      {!isLoading && errors && <ServerErrorPage />}

      {isLoading ? (
        <LoadingPlaceholder />
      ) : (
        !errors && (
          <Container>
            <SelectedVideoPlayer video={video} />
            <SuggestedVideoList />
          </Container>
        )
      )}
    </Box>
  );
}

export default VideoStream;
