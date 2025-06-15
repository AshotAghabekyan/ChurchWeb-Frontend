import { Box, styled } from "@mui/material";
import { PRIMARY_PURPLE, WHITE } from "../../../constants/colors";
import { COMMON_BORDER_RADIUS } from "../../../constants/common";
import BiographyContent from "./BiograhyText";
import useLayout from "../../../hooks/layout/useLayout";
import PastorBiographyMobile from "./PastorBiographyMobile";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: WHITE,
  color: PRIMARY_PURPLE,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  borderRadius: COMMON_BORDER_RADIUS,
  animation: "slideUp 1s ease-out",
}));

function PastorBiograpy() {
  const { smallLayout } = useLayout();
  return (
    <Container>
      {smallLayout ? <PastorBiographyMobile /> : <BiographyContent />}
    </Container>
  );
}

export default PastorBiograpy;
