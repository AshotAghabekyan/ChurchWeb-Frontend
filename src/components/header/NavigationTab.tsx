import { styled, Tab } from "@mui/material";
import { WHITE } from "../../constants/colors";

const StyledTab = styled(Tab)({
  color: WHITE,
  fontFamily: "bainsley",
  fontWeight: "bold",
  cursor: "pointer",
  "&.Mui-selected": {
    color: WHITE,
  },
  "&:hover": {
    opacity: 0.8,
  },
});

function NavigationTab(props) {
  return <StyledTab {...props} />;
}

export default NavigationTab;
