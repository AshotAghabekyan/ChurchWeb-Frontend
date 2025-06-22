import { styled } from "@mui/material";

const StyledIcon = styled("img")({
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
