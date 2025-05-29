import { Tabs, styled } from "@mui/material";
import { WHITE } from "../../constants/colors";

const StyledTabs = styled(Tabs)({
  ".MuiTabs-indicator": {
    backgroundColor: WHITE,
  },
});

function NavigationTabs(props) {
  return <StyledTabs {...props} />;
}

export default NavigationTabs;
