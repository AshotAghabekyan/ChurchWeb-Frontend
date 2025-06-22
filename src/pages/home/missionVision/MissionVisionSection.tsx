import { Grid, styled } from "@mui/material";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants/colors";
import MissionVisionTitle from "./MissionVisionTitle";
import MissionVisionDescription from "./MissionVisionDescription";

const StyledGrid = styled(Grid)(({ theme }) => ({
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  minHeight: "22rem",
  padding: "2rem 10%",
  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
    justifyContent: "flex-start",
    minHeight: "18rem",
    gap: "50px",
  },
  backgroundColor: PRIMARY_COLOR,
  color: SECONDARY_COLOR,
}));

function MissionVisionSection() {
  return (
    <StyledGrid container>
      <Grid size={{ xs: 12, sm: 12, md: 3 }}>
        <MissionVisionTitle />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6 }}>
        <MissionVisionDescription />
      </Grid>
    </StyledGrid>
  );
}

export default MissionVisionSection;
