import { styled } from "@mui/material";
import Icon from "../Icon/Icon";

const StyledIcon = styled(Icon)({
  width: `20px`,
  height: `20px`,
  marginBottom: `20px`,
  transition: "transform 0.3s ease",
  "&:hover": { transform: "scale(1.1)" },
});

function ContactIcon(props) {
  return <StyledIcon {...props} />;
}

export default ContactIcon;
