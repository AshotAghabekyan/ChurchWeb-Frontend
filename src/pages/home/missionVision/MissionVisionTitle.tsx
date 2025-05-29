import { Box, styled, Typography } from "@mui/material";
import useLayout from "../../../hooks/layout/useLayout";
import { shouldForwardProp } from "../../../helpers/shouldForwardProp";
const Container = styled(Box, { shouldForwardProp })(
  ({ $smallLayout }: { $smallLayout: boolean }) => ({
    width: $smallLayout ? "100%" : "20%",
    height: "100%",
    fontSize: "2.7rem",
    display: "flex",
    alignItems: "center",
  })
);

function MissionVisionTitle() {
  const { smallLayout } = useLayout();
  return (
    <Container $smallLayout={smallLayout}>
      <Typography variant="h4">ՄԵԾ ԸՆՏԱՆԻՔ</Typography>
    </Container>
  );
}

export default MissionVisionTitle;
