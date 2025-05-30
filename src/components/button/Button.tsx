import { Button, styled } from "@mui/material";
import { COMMON_BORDER_RADIUS } from "../../constants/common";

const StyledButton = styled(Button)({
  borderRadius: COMMON_BORDER_RADIUS,
  transition: "0.4s",
  fontSize: 22,
  paddingInline: 6,
});

function ButtonBase(props) {
  return <StyledButton {...props} />;
}

export default ButtonBase;
