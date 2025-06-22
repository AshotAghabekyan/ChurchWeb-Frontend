import { Stack, styled } from "@mui/material";
import { PRIMARY_PURPLE, WHITE } from "../../../constants/colors";
import {
  COMMON_BORDER_RADIUS,
  CONTENT_PADDING,
} from "../../../constants/common";
import BiographyContent from "./BiograhyText";
import useLayout from "../../../hooks/layout/useLayout";
import PastorBiographyMobile from "./PastorBiographyMobile";

const Container = styled(Stack)(({ theme }) => ({
  backgroundColor: WHITE,
  color: PRIMARY_PURPLE,
  padding: CONTENT_PADDING,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  borderRadius: COMMON_BORDER_RADIUS,
  animation: "slideUp 1s ease-out",
}));

function PastorBiograpy() {
  const { mediumLayout } = useLayout();
  return (
    <Container>
      {mediumLayout ? <PastorBiographyMobile /> : <BiographyContent />}
    </Container>
  );
}

export default PastorBiograpy;
