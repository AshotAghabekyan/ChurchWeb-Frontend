import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: `16px`,
  padding: `30px 0`,
});

function Contacts(props) {
  return <StyledBox {...props} />;
}

export default Contacts