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

const DialogHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "1rem",
});

function MainDialog(props) {
  const { title, headerIcon, content, onClose, open, actions, ...restProps } =
    props;

  const { smallLayout } = useLayout();
  return (
    <Dialog fullWidth open={open} onClose={onClose} {...restProps}>
      <DialogHeader>
        <Stack direction={"row"} alignItems={"center"}>
          {headerIcon}
          <DialogTitle
            sx={{ color: SECONDARY_COLOR }}
            fontSize={smallLayout ? 24 : 32}
          >
            {title}
          </DialogTitle>
        </Stack>
        <CloseIcon
          sx={{ cursor: "pointer", color: SECONDARY_COLOR }}
          onClick={onClose}
        />
      </DialogHeader>
      <Divider></Divider>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}

export default MainDialog;
