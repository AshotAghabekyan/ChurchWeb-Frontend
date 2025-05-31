import styled from "@mui/system/styled";
import SecondaryButton from "./SecondaryButton";

const StyledSecondaryButton = styled(SecondaryButton)({
  paddingBlock: 18,
});

function SecondaryButtonMedium(props) {
  return <StyledSecondaryButton {...props} />;
}

export default SecondaryButtonMedium;
