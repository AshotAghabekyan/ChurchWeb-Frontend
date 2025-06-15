import { Box, styled } from "@mui/material";
import ChurchLogo from "../../images/white_NG_logo.svg";
import Icon from "../Icon/Icon";

const Container = styled(Box)(({ theme }) => ({
  top: 2,
  left: 2,
  width: 100,
  height: 100,
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
}));

function LogoContainer(props: any) {
  return (
    <Container {...props}>
      <Icon icon={ChurchLogo} width={"100%"} height={"100%"} />
    </Container>
  );
}

export default LogoContainer;
