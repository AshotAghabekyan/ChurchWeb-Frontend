import { Box, List, styled, Typography } from "@mui/material";
import { DARK_GRAY, WHITE } from "../../constants/colors";
import { useSuggestedVideoList } from "./useSuggestedVideoList";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import VideoItemList from "./videoItem/VideoItemList";

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
  borderRadius: "10px",
});

const VideoScrollContainer = styled(List)({
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "row",
  gap: "1.5rem",
  overflowX: "auto",
  padding: "1rem 0",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    height: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#555",
    borderRadius: 4,
  },
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
      <VideoScrollContainer>
        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          relatedVideos.map((video) => (
            <VideoItemList video={video} showBottomSection={false} />
          ))
        )}
      </VideoScrollContainer>
    </Container>
  );
}

export default SuggestedVideoList;
