import { Box, Grid, styled } from "@mui/system";
import videoListHeaderBg from "../../images/videosPageBackground.webp";
import useLayout from "../../hooks/layout/useLayout";
import { useVideoList } from "./useVideoGridView";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import PageHeader from "../../components/PageHeader";
import { VIDEO_LIST_PAGE_HEADER_TITLE } from "../../constants/typography";
import VideoItemGrid from "./videoItem/VideoItemGrid";
import PageHeaderTitle from "../../components/PageHeaderTitle";
import ServerErrorPage from "../exceptions/ServerErrorPage";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

function VideosGridView() {
  const { smallLayout } = useLayout();
  const { videosList, isLoading, errors } = useVideoList();
  
  return (
    <Container>
      <PageHeader imageUrl={videoListHeaderBg}>
        <PageHeaderTitle>{VIDEO_LIST_PAGE_HEADER_TITLE}</PageHeaderTitle>
      </PageHeader>
      <Grid
        padding={smallLayout ? "1rem" : "2rem"}
        container
        rowSpacing={5}
        columnSpacing={5}
        justifyContent={"center"}
      >
        {!isLoading && errors && <ServerErrorPage />}

        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          !errors &&
          videosList.map((video) => {
            return <VideoItemGrid video={video} key={video.id} />;
          })
        )}
      </Grid>
    </Container>
  );
}

export default VideosGridView;
