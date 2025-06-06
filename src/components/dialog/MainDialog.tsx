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

const DialogHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "1rem",
});

function MainDialog(props) {
  const { title, headerIcon, content, onClose, open, actions, ...restProps } =
    props;

  return (
    <Dialog fullWidth open={open} onClose={onClose} {...restProps}>
      <DialogHeader>
        <Stack direction={"row"} alignItems={"center"}>
          {headerIcon}
          <DialogTitle fontSize={32}>{title}</DialogTitle>
        </Stack>
        <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
      </DialogHeader>
      <Divider></Divider>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}

export default MainDialog;
