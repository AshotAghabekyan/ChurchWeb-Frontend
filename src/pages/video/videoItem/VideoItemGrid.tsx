import { Grid } from "@mui/material";
import VideoItemPaper from "./VideoItemPaper";
import { COMMON_BORDER_RADIUS } from "../../../constants/common";

function VideoItemGrid(props) {
  return (
    <Grid size={{ md: 6, sm: 12 }}>
      <VideoItemPaper
        {...props}
        slotProps={{
          videoPlayer: {
            sx: {
              borderRadius: `${COMMON_BORDER_RADIUS}px ${COMMON_BORDER_RADIUS}px 0 0`,
            },
          },
        }}
      />
    </Grid>
  );
}

export default VideoItemGrid;
