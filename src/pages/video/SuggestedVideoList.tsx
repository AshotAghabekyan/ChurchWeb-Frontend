import { Box, Stack, styled, Typography } from "@mui/material";
import { DARK_GRAY, WHITE } from "../../constants/colors";
import { useSuggestedVideoList } from "./useSuggestedVideoList";
import LoadingPlaceholder from "../../components/LoadPlaceholder";
import VideoItemList from "./videoItem/VideoItemList";
import {
  COMMON_BORDER_RADIUS,
  MOBILE_CONTENT_PADDING,
} from "../../constants/common";
import ScrollContainer from "../../components/ScrollContainer";
import ContentUnavailable from "../exceptions/ContentUnavilable";

const Container = styled(Stack)(({ theme }) => ({
  width: "100%",
  alignSelf: "center",
  padding: "1.5rem 20px",
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem 1rem",
  },
}));

const SuggestedVideosHeader = styled(Box)({
  width: "100%",
  backgroundColor: DARK_GRAY,
  color: WHITE,
  textAlign: "center",
  padding: MOBILE_CONTENT_PADDING,
  borderRadius: COMMON_BORDER_RADIUS,
});

function SuggestedVideoList() {
  const { isLoading, relatedVideos, smallLayout, errors } =
    useSuggestedVideoList();
  return (
    <Container>
      <SuggestedVideosHeader>
        <Typography variant={smallLayout ? "h5" : "h4"}>
          Դիտեք նաև այլ տեսանյութեր
        </Typography>
      </SuggestedVideosHeader>
      <ScrollContainer>
        {!isLoading && errors && <ContentUnavailable />}

        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          !errors &&
          relatedVideos.map((video: any) => (
            <VideoItemList
              video={video}
              showBottomSection={false}
              key={video.id}
            />
          ))
        )}
      </ScrollContainer>
    </Container>
  );
}

export default SuggestedVideoList;
