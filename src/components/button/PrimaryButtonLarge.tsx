import styled from "@mui/system/styled";
import PrimaryButton from "./PrimaryButton";

const StyledPrimaryButton = styled(PrimaryButton)({
  paddingBlock: 20,
});

function PrimaryButtonLarge(props) {
  return <StyledPrimaryButton {...props} />;
}

export default PrimaryButtonLarge;
