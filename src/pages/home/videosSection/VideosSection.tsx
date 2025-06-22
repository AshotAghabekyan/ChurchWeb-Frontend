import { Box, Paper, styled, Typography } from "@mui/material";
import worshipBgImage from "../../../images/videosPageBackground.webp";
import useLayout from "../../../hooks/layout/useLayout";
import {
  COMMON_BORDER_RADIUS,
  CONTENT_PADDING,
} from "../../../constants/common";
import PrimaryButtonMedium from "../../../components/button/PrimaryButtonMedium";
import { useNavigate } from "react-router";
import { VIDEOS_ROOT_PAGE } from "../../../constants/pages";

const Container = styled(Paper)(({ theme }) => ({
  position: "relative",
  width: "95%",
  padding: CONTENT_PADDING,
  alignSelf: "center",
  borderRadius: COMMON_BORDER_RADIUS,
  "& *": {
    borderRadius: COMMON_BORDER_RADIUS,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url(${worshipBgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center",
  },
  color: "white",
}));

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3))",
});

const WrapperContent = styled(Box)({
  width: "100%",
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "30px",
  zIndex: 1,
  textShadow: "0 2px 6px rgba(0,0,0,0.8)",
});

function VideosSection() {
  const { smallLayout } = useLayout();
  const navigator = useNavigate();

  return (
    <Container elevation={10}>
      <GradientOverlay />
      <WrapperContent>
        <Typography variant={smallLayout ? "h4" : "h3"}>
          Մեր տեսանյութերը
        </Typography>
        <Typography variant={smallLayout ? "h5" : "h4"}>
          Դիտեք մեր ծառայություններն օնլայն
        </Typography>
        <PrimaryButtonMedium
          onClick={() => navigator(VIDEOS_ROOT_PAGE)}
          sx={{ width: smallLayout ? "100%" : "40%" }}
        >
          <b>Դիտել</b>
        </PrimaryButtonMedium>
      </WrapperContent>
    </Container>
  );
}

export default VideosSection;
