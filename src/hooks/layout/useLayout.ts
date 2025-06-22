import { useMediaQuery, useTheme } from "@mui/material";

interface MediaLayout {
  [key: string]: boolean;
}

const useLayout = (): MediaLayout => {
  const theme = useTheme();
  const smallLayout: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumLayout: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const largeLayout: boolean = useMediaQuery(theme.breakpoints.down("lg"));
  const extraLargeLayout: boolean = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    smallLayout,
    mediumLayout,
    largeLayout,
    extraLargeLayout,
  };
};

export default useLayout;
