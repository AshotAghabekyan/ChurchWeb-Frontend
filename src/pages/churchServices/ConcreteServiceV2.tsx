import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import { WHITE } from "../../constants/colors";

const CardContainer = styled(Card)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "400px",
  borderRadius: COMMON_BORDER_RADIUS,
  overflow: "hidden",
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

const GradientOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))",
});

const StyledCardContent = styled(CardContent)({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 2,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  color: WHITE,
  textAlign: "left",
  textShadow: "0 2px 6px rgba(0,0,0,0.8)",
  "&:hover .description": {
    transform: "translateY(0)",
  },
});

const ContentDesciption = styled(Typography)({
  overflow: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  transition: "transform 0.8s ease",
  transform: "translateY(1000px)",
});

function ConcreteServiceV2(props) {
  const { title, description, image } = props;

  return (
    <CardContainer elevation={10}>
      <StyledCardMedia image={image} />
      <GradientOverlay />
      <StyledCardContent>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <ContentDesciption className="description" variant="h6">
          {description}
        </ContentDesciption>
      </StyledCardContent>
    </CardContainer>
  );
}

export default ConcreteServiceV2;
