import { Box, Grid, styled } from "@mui/material";
import { DARK_BLACK } from "../../constants/colors";
import { useVideoStream } from "./useVideoStream";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import SelectedVideoPlayer from "./SelectedVideoPlayer";
import SuggestedVideoList from "./SuggestedVideoList";
import ServerErrorPage from "../exceptions/ServerErrorPage";

const GridContainer = styled(Grid)({
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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
          <GridContainer container>
            <Grid size={{ sm: 12, md: 8, xs: 12 }}>
              <SelectedVideoPlayer video={video} />
            </Grid>
            <Grid size={{ sm: 12, md: 8, xs: 12 }}>
              <SuggestedVideoList />
            </Grid>
          </GridContainer>
        )
      )}
    </Box>
  );
}

export default VideoStream;
