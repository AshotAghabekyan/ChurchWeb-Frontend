import { useMediaQuery, useTheme } from "@mui/material";

const useLayout = () => {
  const theme = useTheme();
  const smallLayout = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumLayout = useMediaQuery(theme.breakpoints.down("md"));
  const largeLayout = useMediaQuery(theme.breakpoints.down("lg"));
  const extraLargeLayout = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    smallLayout,
    mediumLayout,
    largeLayout,
    extraLargeLayout,
  };
};

export default useLayout;
