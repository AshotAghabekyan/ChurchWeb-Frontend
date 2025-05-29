import MenuIcon from "@mui/icons-material/Menu";
import { useMobileHeader } from "./useMobileHeader";
import { Drawer, styled, Toolbar } from "@mui/material";
import MobileMenuList from "./MobileMenuList";

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
});

function MobileHeader(props: any) {
  const { isDrawerOpened, handleMenuClose, handleMenuOpen } = useMobileHeader();
  return (
    <StyledToolbar>
      <MenuIcon fontSize="large" onClick={handleMenuOpen} />
      <StyledDrawer
        anchor="top"
        open={isDrawerOpened}
        onClose={handleMenuClose}
      >
        <MobileMenuList {...props} onClose={handleMenuClose} />
      </StyledDrawer>
    </StyledToolbar>
  );
}

export default MobileHeader;
