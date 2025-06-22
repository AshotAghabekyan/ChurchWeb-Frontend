import { Box, styled } from "@mui/material";
import handsWithHearthGif from "../../../images/icons/handWithHearth.gif";

const Container = styled(Box)({
  width: "100%",
  height: "5rem",
  background: `url(${handsWithHearthGif}) center/contain`,
  backgroundRepeat: "no-repeat",
});

function GifIcon() {
  return <Container />;
}

export default GifIcon;
