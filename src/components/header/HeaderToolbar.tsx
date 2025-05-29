import { styled, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
});

function HeaderToolbar(props) {
  return <StyledToolbar {...props} />;
}

export default HeaderToolbar;
