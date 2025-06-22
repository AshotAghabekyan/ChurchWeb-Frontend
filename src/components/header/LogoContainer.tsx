import { Box, styled } from "@mui/material";
import ChurchLogo from "../../images/icons/church_logo.svg";

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  left: 10,
  width: 70,
  height: 70,
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
  [theme.breakpoints.down("sm")]: {
    width: 80,
  },
}));

const StyledImg = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
});

function LogoContainer(props: any) {
  return (
    <Container {...props}>
      <StyledImg src={ChurchLogo} />
    </Container>
  );
}

export default LogoContainer;
