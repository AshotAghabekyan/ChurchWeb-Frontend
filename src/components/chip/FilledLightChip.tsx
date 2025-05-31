import styled from "@mui/system/styled";
import Chip from "@mui/material/Chip";
import { DARK_GRAY, WHITE } from "../../constants/colors";

const StyledChip = styled(Chip)({
  backgroundColor: WHITE,
  color: DARK_GRAY,
  border: "2px solid",
  "& .MuiChip-icon": {
    color: DARK_GRAY,
  },
  "&:hover": {
    color: WHITE,
    borderColor: WHITE,
    "& .MuiChip-icon": {
      color: WHITE,
    },
  },
});

function FilledLightChip(props) {
  return <StyledChip {...props} />;
}

export default FilledLightChip;
