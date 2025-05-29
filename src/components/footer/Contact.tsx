import { styled } from "@mui/material";

const StyledLink = styled("a")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  color: "white",
  opacity: 0.9,
  transition: "opacity 0.3s ease",
  "&:hover": { opacity: 1 },
});

function Contact(props) {
  return <StyledLink {...props} />;
}

export default Contact;
