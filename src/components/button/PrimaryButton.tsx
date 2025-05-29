import { styled } from "@mui/material";
import { SECONDARY_COLOR, WHITE } from "../../constants/colors";
import ButtonBase from "./Button";

const StyledButtonBase = styled(ButtonBase)({
  color: SECONDARY_COLOR,
  backgroundColor: WHITE,
  "&:hover": {
    backgroundColor: SECONDARY_COLOR,
    color: WHITE,
  },
  "&:active": {
    backgroundColor: SECONDARY_COLOR,
    color: WHITE,
  },
  "&.Mui-disabled": {
    color: SECONDARY_COLOR,
  },
});

function PrimaryButton(props) {
  return <StyledButtonBase {...props} />;
}

export default PrimaryButton;
