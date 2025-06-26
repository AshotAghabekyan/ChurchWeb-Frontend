import { Stack, styled } from "@mui/material";
import { LIGHT_GRAY_BLUE, PRIMARY_COLOR } from "../../../constants/colors";
import GifIcon from "./GifIcon";
import DonationContent from "./DonationContent";

const Container = styled(Stack)({
  minHeight: 300,
  justifyContent: "space-between",
  gap: 10,
  alignItems: "center",
  textAlign: "center",
  lineHeight: 2,
  backgroundColor: PRIMARY_COLOR,
  color: LIGHT_GRAY_BLUE,
  paddingTop: "3rem",
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
