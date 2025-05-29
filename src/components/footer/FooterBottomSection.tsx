import { Box, styled } from "@mui/material";
import { shouldForwardProp } from "../../helpers/shouldForwardProp";
import { DynamicLayout } from "../../types/dynamicLayout";
import useLayout from "../../hooks/layout/useLayout";

const StyledBox = styled(Box, { shouldForwardProp })(
  ({ $smallLayout }: DynamicLayout) => ({
    width: "80%",
    display: "flex",
    flexDirection: $smallLayout ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10%",
    margin: `8px 0`,
    textAlign: "center",
  })
);

function FooterBottomSection(props) {
  const { smallLayout } = useLayout();
  return <StyledBox $smallLayout={smallLayout} {...props} />;
}

export default FooterBottomSection;
