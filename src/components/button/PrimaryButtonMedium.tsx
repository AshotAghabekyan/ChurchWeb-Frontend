import { styled } from "@mui/material";
import PrimaryButton from "./PrimaryButton";

const StyledPrimaryButton = styled(PrimaryButton)({
  paddingBlock: 18,
});

const PrimaryButtonMedium = (props) => {
  return <StyledPrimaryButton {...props} />;
};

export default PrimaryButtonMedium;
