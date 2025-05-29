import { Box, Stack, styled, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareIcon from "@mui/icons-material/Share";
import faceBookIcon from "../../../images/facebookIcon.webp";
import threadsIcon from "../../../images/threadsIcon.webp";
import xIcon from "../../../images/twitter.webp";
import MainDialog from "../../../components/dialog/MainDialog";
import Icon from "../../../components/Icon/Icon";
import SecondaryButton from "../../../components/button/SecondaryButton";
import {
  COPIED_TEXT,
  COPY_LINK_LABEL_TEXT,
  COPY_TEXT,
  SHARE_ON_SOCIAL_NETWORKS,
  SHARE_TEXT,
} from "../../../constants/typography";
import { useState } from "react";
import useLayout from "../../../hooks/layout/useLayout";
import MobileDialog from "../../../components/dialog/MobileDialog";

const StyledDialogContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  gap: "1rem",
  marginBottom: "1rem",
});

const StyledIcon = styled(Icon)({
  width: 48,
  height: 48,
  cursor: "pointer",
  transition: "0.5s",
  "&:hover": {
    scale: 1.1,
  },
});

function ShareVideoDialog(props) {
  const { onClose, ...restProps } = props;
  const { smallLayout } = useLayout();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const DialogContent = (
    <StyledDialogContainer>
      <Typography variant="h6">{SHARE_ON_SOCIAL_NETWORKS}</Typography>
      <Stack direction={"row"} spacing={5} justifyContent={"center"}>
        <StyledIcon icon={faceBookIcon} />
        <StyledIcon icon={xIcon} />
        <StyledIcon icon={threadsIcon} />
      </Stack>
    </StyledDialogContainer>
  );

  const DialogActions = (
    <StyledDialogContainer>
      <Typography variant="h6">{COPY_LINK_LABEL_TEXT}</Typography>
      <SecondaryButton
        onClick={() => setIsCopied(true)}
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
    headerIcon: <ShareIcon />,
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
    <MainDialog {...dialogProps} />
  );
}

export default ShareVideoDialog;
