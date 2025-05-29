import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router";
import { ORANGE_BASE, ORANGE_HOVER } from "../../../constants/colors";
import { shouldForwardProp } from "../../../helpers/shouldForwardProp";
import useLayout from "../../../hooks/layout/useLayout";

const Container = styled(Box, { shouldForwardProp })(
  ({ $smallLayout }: { $smallLayout: boolean }) => ({
    width: $smallLayout ? "100%" : "45%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  })
);

const StyledTypography = styled(Typography)({
  marginBottom: "1rem",
});

const StyledLink = styled(Link)({
  display: "flex",
  justifyContent: "left",
  fontSize: "24px",
  marginTop: "1rem",
  textAlign: "left",
  color: ORANGE_BASE,
  textDecoration: "none",
  transition: "color 0.5s",
  "&:hover": {
    color: ORANGE_HOVER,
  },
  "&:active": {
    color: ORANGE_HOVER,
  },
});

function MissionVisionDescription() {
  const { smallLayout } = useLayout();
  return (
    <Container $smallLayout={smallLayout}>
      <StyledTypography variant="h6">
        Մեր նպատակն է առաջնորդել մարդկանց Հիսուս Քրիստոսի հետ անձնական
        փոխհարաբերության։
      </StyledTypography>
      <StyledTypography variant="h6">
        <b>
          <i>
            Եվ այն ազատությունով, որ Քրիստոսը մեզ ազատեց, հաստատ մնացեք եւ
            դարձյալ ծառայության լծի տակ մի մտեք։ (Գաղատացիս 5։1)
          </i>
        </b>
      </StyledTypography>
      <StyledLink to="/church">
        <b>Ավելին</b>
      </StyledLink>
    </Container>
  );
}

export default MissionVisionDescription;
