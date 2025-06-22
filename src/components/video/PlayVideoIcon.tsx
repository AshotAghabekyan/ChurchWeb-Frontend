import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { styled } from "@mui/material";
import { WHITE } from "../../constants/colors";

const StyledIcon = styled(PlayCircleOutlineIcon)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "64px",
  color: WHITE,
  opacity: 0,
  transition: "opacity 0.3s ease",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    opacity: 1,
  },
}));

function PlayVideoIcon(props: any) {
  return <StyledIcon {...props} />;
}

export default PlayVideoIcon;
