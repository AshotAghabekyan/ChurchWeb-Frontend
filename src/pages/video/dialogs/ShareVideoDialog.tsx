import { useState } from "react";
import { IconButton, Stack, styled, SvgIcon, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ThreadsIcon from "../../../images/icons/threads-app-icon.svg?react";
import MainDialog from "../../../components/dialog/MainDialog";
import SecondaryButton from "../../../components/button/SecondaryButton";
import {
  COPIED_TEXT,
  COPY_LINK_LABEL_TEXT,
  COPY_TEXT,
  SHARE_ON_SOCIAL_NETWORKS,
  SHARE_TEXT,
} from "../../../constants/typography";
import useLayout from "../../../hooks/layout/useLayout";
import MobileDialog from "../../../components/dialog/MobileDialog";
import { SECONDARY_COLOR } from "../../../constants/colors";
import ZoomTransition from "../../../components/transitions/Zoom";
import { copyToClimboard } from "../../../helpers/navigator";
import {
  shareOnFacebook,
  shareOnThreads,
  shareOnX,
} from "../../../helpers/socialNetworks";
import { generateYoutubeVideoLink } from "../../../helpers/video";

const StyledDialogContainer = styled(Stack)({
  width: "100%",
  justifyContent: "center",
  textAlign: "center",
  gap: "1rem",
  marginBottom: "1rem",
});

function ShareVideoDialog(props) {
  const { onClose, videoId, ...restProps } = props;
  const { smallLayout } = useLayout();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const youtubeVideoLink = generateYoutubeVideoLink(videoId);

  const DialogContent = (
    <StyledDialogContainer>
      <Typography sx={{ color: SECONDARY_COLOR }} variant="h6">
        {SHARE_ON_SOCIAL_NETWORKS}
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
      >
        <IconButton href={shareOnFacebook(youtubeVideoLink)} target="_blank">
          <FacebookIcon sx={{ fontSize: "52px", mt: '16px' }} color="primary" />
        </IconButton>
        <IconButton href={shareOnX(youtubeVideoLink)} target="_blank">
          <XIcon sx={{ fontSize: "42px" }} />
        </IconButton>
        <IconButton href={shareOnThreads(youtubeVideoLink)} target="_blank">
          <SvgIcon sx={{ color: "black", fontSize: "42px" }}>
            <ThreadsIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
    </StyledDialogContainer>
  );

  const DialogActions = (
    <StyledDialogContainer>
      <Typography sx={{ color: SECONDARY_COLOR }} variant="h6">
        {COPY_LINK_LABEL_TEXT}
      </Typography>
      <SecondaryButton
        onClick={() => {
          copyToClimboard(youtubeVideoLink);
          setIsCopied(true);
        }}
        fullWidth
        disabled={isCopied}
        endIcon={<ContentCopyIcon />}
      >
        {isCopied ? COPIED_TEXT : COPY_TEXT}
      </SecondaryButton>
    </StyledDialogContainer>
  );

  const dialogProps = {
    title: SHARE_TEXT,
    headerIcon: <ShareIcon sx={{ color: SECONDARY_COLOR }} />,
    content: DialogContent,
    actions: DialogActions,
    onClose: () => {
      setIsCopied(false);
      onClose();
    },
    ...restProps,
  };

  return smallLayout ? (
    <MobileDialog {...dialogProps} />
  ) : (
    <MainDialog {...dialogProps} slots={{ transition: ZoomTransition }} />
  );
}

export default ShareVideoDialog;
