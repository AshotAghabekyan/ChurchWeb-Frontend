import styled from "@mui/system/styled";
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from "../../constants/colors";
import ButtonBase from "./Button";

const StyledButtonBase = styled(ButtonBase)({
  color: WHITE,
  backgroundColor: SECONDARY_COLOR,
  "&:hover": {
    backgroundColor: PRIMARY_COLOR,
    color: SECONDARY_COLOR,
  },
  "&:active": {
    backgroundColor: PRIMARY_COLOR,
    color: SECONDARY_COLOR,
  },
  "&.Mui-disabled": {
    color: WHITE,
  },
});

function SecondaryButton(props) {
  return <StyledButtonBase {...props} />;
}

export default SecondaryButton;
