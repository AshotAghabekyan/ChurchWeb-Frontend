import { Stack, styled } from "@mui/material";
import { LIGHT_GRAY_BLUE, PRIMARY_COLOR } from "../../../constants/colors";
import GifIcon from "./GifIcon";
import DonationContent from "./DonationContent";

const Container = styled(Stack)({
  minHeight: 300,
  justifyContent: "space-between",
  gap: "max(10%, 40px)",
  alignItems: "center",
  textAlign: "center",
  lineHeight: 2,
  backgroundColor: PRIMARY_COLOR,
  color: LIGHT_GRAY_BLUE,
  paddingTop: "2rem",
  paddingBottom: "3rem",
});

function DonationSection() {
  return (
    <Container>
      <GifIcon />
      <DonationContent />
    </Container>
  );
}

export default DonationSection;
