import { Box, styled } from "@mui/material";
import ChurchLogo from "../../images/white_NG_logo.svg";
import Icon from "../Icon/Icon";

const Container = styled(Box)({
  top: 2,
  left: 2,
  width: 100,
  height: 100,
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
});

function LogoContainer(props: any) {
  return (
    <Container {...props}>
      <Icon icon={ChurchLogo} width={'100%'} height={'100%'} />
    </Container>
  );
}

export default LogoContainer;
