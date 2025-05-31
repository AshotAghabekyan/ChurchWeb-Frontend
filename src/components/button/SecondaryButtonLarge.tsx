import styled from "@mui/system/styled";
import SecondaryButton from "./SecondaryButton";

const StyledSecondaryButton = styled(SecondaryButton)({
  paddingBlock: 25,
});

function SecondaryButtonLarge(props) {
  return <StyledSecondaryButton {...props} />;
}

export default SecondaryButtonLarge;
