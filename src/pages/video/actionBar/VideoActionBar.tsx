import { ReactElement, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ShareVideoDialog from "../dialogs/ShareVideoDialog";
import ChipContainer from "../../../components/chip/ChipItem";
import {
  SHARE_TEXT,
  VIEW_ON_YOUTUBE_TEXT,
} from "../../../constants/typography";
import { Chip } from "@mui/material";

function VideoActionsBar(props: any) {
  const { actionProps = {}, slots = {} } = props;
  const { extraActions } = actionProps;
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
          open={openShareDialog}
          onClose={() => setOpenShareDialog(false)}
        />
      </ChipContainer>
      <ChipContainer>
        <DefaultChip
          icon={<YouTubeIcon />}
          label={VIEW_ON_YOUTUBE_TEXT}
          clickable
          color="error"
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
