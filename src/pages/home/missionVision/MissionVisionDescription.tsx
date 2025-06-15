import { Box, Button, styled, Typography } from "@mui/material";
import { LIGHT_GRAY_BLUE, SECONDARY_COLOR } from "../../../constants/colors";
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

const StyledTextButton = styled(Button)({
  "&.MuiButton-text": {
    display: "flex",
    justifyContent: "left",
    fontSize: "18px",
    textAlign: "left",
    color: SECONDARY_COLOR,
    textDecoration: "none",
    transition: "color 0.5s",
  },
  "&:hover": {
    color: LIGHT_GRAY_BLUE,
  },
  // "&:active": {
  //   color: ORANGE_HOVER,
  // },
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
      <StyledTextButton variant="text">
        <u>Ավելին</u>
      </StyledTextButton>
    </Container>
  );
}

export default MissionVisionDescription;
