import { AppBar, styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { SECONDARY_COLOR } from "../../constants/colors";
import MobileHeader from "./mobile/MobileHeader";
import useLayout from "../../hooks/layout/useLayout";
import DesktopHeader from "./DesktopHeader";
import { useState } from "react";
import LogoContainer from "./LogoContainer";
import { ROOT_PAGE } from "../../constants/pages";

const StyledAppBar = styled(AppBar)({
  position: "sticky",
  backgroundColor: SECONDARY_COLOR,
  width: "100%",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingBlock: "10px",
  boxSizing: "border-box",
});


function Header() {
  const navigator = useNavigate()
  const location = useLocation();
  const currentPathname = location.pathname;
  const { smallLayout } = useLayout();
  const [selectedNavigationTab, setSelectedNavigationTab] =
    useState<string>(currentPathname);

  return (
    <StyledAppBar>
      <LogoContainer
        onClick={() => {
          setSelectedNavigationTab(ROOT_PAGE);
          navigator(ROOT_PAGE);
        }}
      />
      {smallLayout ? (
        <MobileHeader
          activeMenu={selectedNavigationTab}
          setActiveMenu={setSelectedNavigationTab}
        />
      ) : (
        <DesktopHeader
          activeMenu={selectedNavigationTab}
          setActiveMenu={setSelectedNavigationTab}
        />
      )}
    </StyledAppBar>
  );
}

export default Header;
