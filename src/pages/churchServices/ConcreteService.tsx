import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import { WHITE } from "../../constants/colors";
import { useState } from "react";
import ServiceOverviewDialog from "./ServiceOverviewDialog";

const CardContainer = styled(Card)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  width: "100%",
  height: "400px",
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
  borderRadius: COMMON_BORDER_RADIUS,
  overflow: "hidden",
  transition: "transform 0.6s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

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
  justifyContent: "center",
  top: 0,
  left: 0,
  zIndex: 2,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  color: WHITE,
  textAlign: "center",
  textShadow: "0 2px 6px rgba(0,0,0,0.8)",
});

function ConcreteService(props) {
  const { title, image } = props;
  const [showDialog, setShowDialog] = useState(false);
  const handleOpenDialog = () => setShowDialog(true);
  const handleCloseDialog = () => setShowDialog(false);

  return (
    <>
      <CardContainer onClick={handleOpenDialog} elevation={10}>
        <StyledCardMedia image={image} />
        <GradientOverlay />
        <StyledCardContent>
          <Typography variant="h4">{title}</Typography>
        </StyledCardContent>
      </CardContainer>
      <ServiceOverviewDialog
        {...props}
        open={showDialog}
        handleClose={handleCloseDialog}
      />
    </>
  );
}

export default ConcreteService;
