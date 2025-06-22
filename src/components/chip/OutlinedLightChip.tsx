import styled from "@mui/system/styled";
import Chip from "@mui/material/Chip";
import { WHITE } from "../../constants/colors";

const StyledChip = styled(Chip)({
  borderWidth: "2px",
  borderColor: WHITE,
  color: WHITE,
  "& .MuiChip-icon": {
    color: WHITE,
  },
});

function OutlinedLightChip(props: any) {
  return <StyledChip {...props} />;
}

export default OutlinedLightChip;
