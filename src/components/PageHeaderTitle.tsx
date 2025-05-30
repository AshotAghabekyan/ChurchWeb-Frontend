import { Typography } from "@mui/material";
import useLayout from "../hooks/layout/useLayout";

function PageHeaderTitle({ children }) {
  const { smallLayout } = useLayout();
  return (
    <Typography
      textAlign={"center"}
      width={"100%"}
      variant={smallLayout ? "h4" : "h2"}
    >
      {children}
    </Typography>
  );
}

export default PageHeaderTitle;
