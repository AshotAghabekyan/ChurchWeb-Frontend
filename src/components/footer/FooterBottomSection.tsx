import { Stack, styled } from "@mui/material";

const StyledStack = styled(Stack)(({ theme }) => ({
  width: "80%",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10%",
  margin: `8px 0`,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

function FooterBottomSection(props) {
  return <StyledStack {...props} />;
}

export default FooterBottomSection;
