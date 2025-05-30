import { Box, styled, Typography } from "@mui/material";
import worshipImage from "../../images/worship_v2.jpeg";

const VisitUsSection = styled(Box)({
  padding: "4rem 2rem",
  height: "20rem",
  background: `url('${worshipImage}') center/cover no-repeat`,
  color: "#fff",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  alignItems: "center",
  justifyContent: "center",
});

function VisitUs() {
  return (
    <VisitUsSection>
      <Typography variant="h3">Ժամանակն է Այցելել Մեզ </Typography>
      <Typography variant="h5" sx={{ maxWidth: "800px" }}>
        Ամեն կիրակի, եկե՛ք միասին փառաբանենք, աղոթենք և կառուցենք մեր հավատքը։
      </Typography>
    </VisitUsSection>
  );
}

export default VisitUs;
