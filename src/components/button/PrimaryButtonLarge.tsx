import { styled } from "@mui/material";
import PrimaryButton from "./PrimaryButton";

const StyledPrimaryButton = styled(PrimaryButton)({
  paddingBlock: 25,
});

function PrimaryButtonLarge(props) {
  return <StyledPrimaryButton {...props} />;
}

export default PrimaryButtonLarge;
