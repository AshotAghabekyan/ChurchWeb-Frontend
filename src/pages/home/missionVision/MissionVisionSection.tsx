import { Box, styled } from "@mui/material";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants/colors";
import MissionVisionTitle from "./MissionVisionTitle";
import MissionVisionDescription from "./MissionVisionDescription";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  minHeight: "22rem",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {
    paddingInline: "1rem",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "18rem",
    gap: "50px",
  },
  backgroundColor: PRIMARY_COLOR,
  color: SECONDARY_COLOR,
}));

function MissionVisionSection() {
  return (
    <StyledBox>
      <MissionVisionTitle />
      <MissionVisionDescription />
    </StyledBox>
  );
}

export default MissionVisionSection;
