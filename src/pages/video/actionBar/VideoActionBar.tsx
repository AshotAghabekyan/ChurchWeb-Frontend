import { ReactElement, useState } from "react";
import Chip from "@mui/material/Chip";
import ShareIcon from "@mui/icons-material/Share";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShareVideoDialog from "../dialogs/ShareVideoDialog";
import ChipContainer from "../../../components/chip/ChipItem";
import {
  SHARE_TEXT,
  VIEW_ON_YOUTUBE_TEXT,
} from "../../../constants/typography";
import { genereateYoutubeVideoWatchLink } from "../../../helpers/video";

function VideoActionsBar(props: any) {
  const { actionProps = {}, slots = {} } = props;
  const { extraActions, videoId } = actionProps;
  const { Chip: DefaultChip = Chip } = slots;
  const [openShareDialog, setOpenShareDialog] = useState(false);

  return (
    <>
      <ChipContainer>
        <DefaultChip
          icon={<ShareIcon />}
          label={SHARE_TEXT}
          onClick={() => setOpenShareDialog(true)}
          clickable
        />
        <ShareVideoDialog
          videoId={videoId}
          open={openShareDialog}
          onClose={() => setOpenShareDialog(false)}
        />
      </ChipContainer>
      <ChipContainer>
        <DefaultChip
          component="a"
          icon={<YouTubeIcon />}
          label={VIEW_ON_YOUTUBE_TEXT}
          clickable
          onClick={() => {}}
          color="error"
          target="_blank"
          href={genereateYoutubeVideoWatchLink(videoId)}
        />
      </ChipContainer>
      {extraActions &&
        extraActions.map((action: ReactElement, index: number) => (
          <ChipContainer key={index}>{action}</ChipContainer>
        ))}
    </>
  );
}

export default VideoActionsBar;
