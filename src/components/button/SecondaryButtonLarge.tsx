import { styled } from "@mui/system";
import SecondaryButton from "./SecondaryButton";

const StyledSecondaryButton = styled(SecondaryButton)({
  paddingBlock: 25,
});

function SecondaryButtonLarge(props) {
  return <StyledSecondaryButton {...props} />;
}

export default SecondaryButtonLarge;
