import { Grid } from "@mui/material";
import VideoItemPaper from "./VideoItemPaper";

function VideoItemGrid(props) {
  return (
    <Grid size={{ md: 6, sm: 12 }}>
      <VideoItemPaper
        {...props}
        slotProps={{
          videoPlayer: {
            sx: {
              borderRadius: "10px 10px 0 0",
            },
          },
        }}
      />
    </Grid>
  );
}

export default VideoItemGrid;
