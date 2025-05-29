import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
  borderRadius: 10,
  transition: "0.4s",
  fontSize: 22,
  paddingInline: 6,
});

function ButtonBase(props) {
  return <StyledButton {...props} />;
}

export default ButtonBase;
