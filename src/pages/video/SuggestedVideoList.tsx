import { Box, styled, Typography } from "@mui/material";
import { DARK_GRAY, WHITE } from "../../constants/colors";
import { useSuggestedVideoList } from "./useSuggestedVideoList";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import VideoItemList from "./videoItem/VideoItemList";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import ScrollContainer from "../../components/ScrollContainer";

const Container = styled(Box)(({ theme }) => ({
  width: "80%",
  display: "flex",
  alignSelf: "center",
  flexDirection: "column",
  padding: "1.5rem 20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "1.5rem 1rem",
  },
}));

const SuggestedVideosHeader = styled(Box)({
  width: "100%",
  backgroundColor: DARK_GRAY,
  color: WHITE,
  textAlign: "center",
  padding: "1rem",
  borderRadius: COMMON_BORDER_RADIUS,
});



function SuggestedVideoList() {
  const { isLoading, relatedVideos, smallLayout } = useSuggestedVideoList();
  return (
    <Container>
      <SuggestedVideosHeader>
        <Typography variant={smallLayout ? "h5" : "h4"}>
          Դիտեք նաև այլ տեսանյութեր
        </Typography>
      </SuggestedVideosHeader>
      <ScrollContainer>
        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          relatedVideos.map((video) => (
            <VideoItemList video={video} showBottomSection={false} />
          ))
        )}
      </ScrollContainer>
    </Container>
  );
}

export default SuggestedVideoList;
