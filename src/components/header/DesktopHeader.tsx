import { useNavigate } from "react-router";
import { HEADER_MENU_OPTIONS } from "../../constants/header";
import NavigationTab from "./NavigationTab";
import NavigationTabs from "./NavigationTabs";
import HeaderToolbar from "./HeaderToolbar";
import { NavigationOption } from "./interfaces";

function DesktopHeader(props: any) {
  const { activeMenu, setActiveMenu } = props;
  const navigator = useNavigate();
  const tabLinks = HEADER_MENU_OPTIONS.map((opt) => opt.link);
  const safeActiveMenu = tabLinks.includes(activeMenu) ? activeMenu : false;

  return (
    <HeaderToolbar>
      <NavigationTabs
        value={safeActiveMenu}
        onChange={(_: unknown, value: number) => setActiveMenu(value)}
      >
        {HEADER_MENU_OPTIONS.map((option: NavigationOption) => {
          return (
            <NavigationTab
              key={option.id}
              value={option.link}
              onClick={() => {
                setActiveMenu(option.link);
                navigator(option.link);
              }}
              label={option.label}
            />
          );
        })}
      </NavigationTabs>
    </HeaderToolbar>
  );
}

export default DesktopHeader;
