import { Chip, styled } from "@mui/material";
import { WHITE } from "../../constants/colors";

const StyledChip = styled(Chip)({
  borderWidth: "2px",
  borderColor: WHITE,
  color: WHITE,
  "& .MuiChip-icon": {
    color: WHITE,
  },
});

function OutlinedLightChip(props) {
  return <StyledChip {...props} />;
}

export default OutlinedLightChip;
