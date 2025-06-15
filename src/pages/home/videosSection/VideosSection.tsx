import { Box, styled, Typography } from "@mui/material";
import worshipBgImage from "../../../images/videosPageBackground.webp";
import { shouldForwardProp } from "../../../helpers/shouldForwardProp";
import { SECONDARY_COLOR } from "../../../constants/colors";
import ToVideosPageButton from "./ToVideosPageButton";
import { DynamicLayout } from "../../../types/dynamicLayout";
import useLayout from "../../../hooks/layout/useLayout";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url(${worshipBgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "white",
});

const Wrapper = styled(Box, { shouldForwardProp })(
  ({ $mediumLayout }: DynamicLayout) => ({
    width: $mediumLayout ? "100%" : "40%",
    height: "100%",
    padding: "5%",
    backgroundColor: SECONDARY_COLOR,
    display: "flex",
    gap: "32px",
    flexDirection: "column",
    justifyContent: "space-around",
  })
);

const WrapperContent = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "30px",
});

function VideosSection() {
  const { mediumLayout, smallLayout } = useLayout();
  return (
    <Container>
      <Wrapper $mediumLayout={mediumLayout}>
        <WrapperContent>
          <Typography variant="h3">Մեր տեսանյութերը</Typography>
          <Typography variant={smallLayout ? "h5" : "h4"}>
            Դիտեք մեր ծառայություններն օնլայն
          </Typography>
        </WrapperContent>
        <ToVideosPageButton>
          <Typography variant="h5">
            <b>Դիտել</b>
          </Typography>
        </ToVideosPageButton>
      </Wrapper>
    </Container>
  );
}

export default VideosSection;
