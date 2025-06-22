import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)({
  fontSize: "2.7rem",
  display: "flex",
  alignItems: "center",
});

function MissionVisionTitle() {
  return (
    <Container>
      <Typography variant="h4">ՄԵԾ ԸՆՏԱՆԻՔ</Typography>
    </Container>
  );
}

export default MissionVisionTitle;
