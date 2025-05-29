import { Box, CircularProgress, styled, Typography } from "@mui/material";
import { SECONDARY_COLOR } from "../constants/colors";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "30rem",
  padding: "2rem",
  color: SECONDARY_COLOR,
});

function LoadingPlaceholder() {
  return (
    <Container>
      <CircularProgress size="5rem" sx={{ color: SECONDARY_COLOR }} />
      <Typography mt={2} variant="h4">
        Բեռնվում է...
      </Typography>
    </Container>
  );
}

export default LoadingPlaceholder;
