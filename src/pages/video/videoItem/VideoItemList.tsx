import { ListItem, styled } from "@mui/material";
import VideoItemPaper from "./VideoItemPaper";

const StyledListItem = styled(ListItem)({
  display: "flex",
  flexShrink: 0,
  width: 400,
});

function VideoItemList(props) {
  return (
    <StyledListItem>
      <VideoItemPaper {...props} />
    </StyledListItem>
  );
}

export default VideoItemList;
