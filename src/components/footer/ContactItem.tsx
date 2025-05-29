import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

function ContactItem(props) {
  return <StyledBox {...props} />;
}

export default ContactItem;
