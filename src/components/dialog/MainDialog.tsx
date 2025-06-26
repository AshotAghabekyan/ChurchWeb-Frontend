import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SECONDARY_COLOR } from "../../constants/colors";
import useLayout from "../../hooks/layout/useLayout";
import {
  COMMON_BORDER_RADIUS,
  CONTENT_PADDING,
  MOBILE_CONTENT_PADDING,
} from "../../constants/common";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: COMMON_BORDER_RADIUS,
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiDialog-paper": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
}));

const DialogHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "1rem",
});

function MainDialog(props: any) {
  const { title, headerIcon, content, onClose, open, actions, ...restProps } =
    props;

  const { smallLayout } = useLayout();
  return (
    <StyledDialog fullWidth open={open} onClose={onClose} {...restProps}>
      <DialogHeader>
        <Stack direction={"row"} alignItems={"center"}>
          {headerIcon}
          <DialogTitle
            sx={{
              color: SECONDARY_COLOR,
              fontSize: smallLayout ? 24 : 32,
              paddingInline: smallLayout
                ? MOBILE_CONTENT_PADDING
                : CONTENT_PADDING,
            }}
          >
            {title}
          </DialogTitle>
        </Stack>
        <CloseIcon
          sx={{ cursor: "pointer", color: SECONDARY_COLOR }}
          onClick={onClose}
        />
      </DialogHeader>
      <Divider />
      <DialogContent
        sx={
          smallLayout
            ? { paddingInline: MOBILE_CONTENT_PADDING }
            : { padding: CONTENT_PADDING }
        }
      >
        {content}
      </DialogContent>
      <DialogActions
        sx={{
          borderTop: "1px solid lightgray",
          px: smallLayout ? MOBILE_CONTENT_PADDING : CONTENT_PADDING,
        }}
      >
        {actions}
      </DialogActions>
    </StyledDialog>
  );
}

export default MainDialog;
