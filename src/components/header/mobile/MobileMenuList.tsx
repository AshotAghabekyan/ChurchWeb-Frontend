import { useNavigate } from "react-router";
import { Divider, List, ListItem, styled } from "@mui/material";
import {
  HEADER_MENU_OPTIONS,
  ROOT_PAGE_OPTIONS,
} from "../../../constants/header";
import { SECONDARY_COLOR, WHITE } from "../../../constants/colors";
import { NavigationOption } from "../interfaces";

const StyledList = styled(List)({
  width: "100%",
  backgroundColor: SECONDARY_COLOR,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StyledListItem = styled(ListItem)({
  maxWidth: "60%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
  color: WHITE,
  padding: 24,
  cursor: "pointer",
  transition: "0.5s",
  "&:hover": {
    opacity: 0.5,
  },
});

const DividerIndicator = styled(Divider)({
  width: "100%",
  height: 2,
  borderRadius: "50px",
  backgroundColor: WHITE,
});

function MobileMenuList(props: any) {
  const { activeMenu, setActiveMenu, onClose } = props;
  const navigator = useNavigate();
  const options = [ROOT_PAGE_OPTIONS, ...HEADER_MENU_OPTIONS];

  return (
    <StyledList>
      {options.map((option: NavigationOption) => {
        return (
          <StyledListItem
            key={option.id}
            onClick={() => {
              setActiveMenu(option.link);
              navigator(option.link);
              onClose();
            }}
          >
            {option.label}
            {option.link == activeMenu && (
              <DividerIndicator orientation="horizontal" />
            )}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
}

export default MobileMenuList;
