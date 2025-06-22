import { Grid, Stack } from "@mui/system";
import videoListHeaderBg from "../../images/videosPageBackground.webp";
import useLayout from "../../hooks/layout/useLayout";
import { useVideoList } from "./useVideoGridView";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import PageHeader from "../../components/PageHeader";
import { VIDEO_LIST_PAGE_HEADER_TITLE } from "../../constants/typography";
import VideoItemGrid from "./videoItem/VideoItemGrid";
import PageHeaderTitle from "../../components/PageHeaderTitle";
import ServerErrorPage from "../exceptions/ServerErrorPage";
import {
  CONTENT_PADDING,
  MOBILE_CONTENT_PADDING,
} from "../../constants/common";

function VideosGridView() {
  const { smallLayout } = useLayout();
  const { videosList, isLoading, errors } = useVideoList();

  return (
    <Stack>
      <PageHeader imageUrl={videoListHeaderBg}>
        <PageHeaderTitle>{VIDEO_LIST_PAGE_HEADER_TITLE}</PageHeaderTitle>
      </PageHeader>
      <Grid
        padding={smallLayout ? MOBILE_CONTENT_PADDING : CONTENT_PADDING}
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
    </Stack>
  );
}

export default VideosGridView;
