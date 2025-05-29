import { Box, Grid, styled } from "@mui/system";
import videoListHeaderBg from "../../images/videosPageBackground.webp";
import useLayout from "../../hooks/layout/useLayout";
import { useVideoList } from "./useVideoGridView";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import PageHeader from "../../components/PageHeader";
import { VIDEO_LIST_PAGE_HEADER_TITLE } from "../../constants/typography";
import VideoItemGrid from "./videoItem/VideoItemGrid";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

function VideosGridView() {
  const { smallLayout } = useLayout();
  const { videosList, isLoading } = useVideoList();

  return (
    <Container>
      <PageHeader
        imageUrl={videoListHeaderBg}
        title={VIDEO_LIST_PAGE_HEADER_TITLE}
      />
      <Grid
        padding={smallLayout ? "1rem" : "2rem"}
        container
        rowSpacing={5}
        columnSpacing={5}
        justifyContent={"center"}
      >
        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          videosList.map((video) => {
            return <VideoItemGrid video={video} key={video.id} />;
          })
        )}
      </Grid>
    </Container>
  );
}

export default VideosGridView;
