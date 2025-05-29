import { useNavigate } from "react-router";
import { HEADER_MENU_OPTIONS } from "../../constants/header";
import { HeaderMenuOption } from "../../types/header";
import NavigationTab from "./NavigationTab";
import NavigationTabs from "./NavigationTabs";
import HeaderToolbar from "./HeaderToolbar";

function DesktopHeader(props: any) {
  const { activeMenu, setActiveMenu } = props;
  const navigator = useNavigate();

  return (
    <HeaderToolbar>
      <NavigationTabs
        value={activeMenu}
        onChange={(_: unknown, value: number) => setActiveMenu(value)}
      >
        {HEADER_MENU_OPTIONS.map((option: HeaderMenuOption) => {
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
