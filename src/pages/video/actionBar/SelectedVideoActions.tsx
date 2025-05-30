import { Box, Chip, styled } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { DARK_GRAY } from "../../../constants/colors";
import VideoStatsBar from "./VideoStatBar";
import VideoActionsBar from "./VideoActionBar";
import FilledLightChip from "../../../components/chip/FilledLightChip";
import OutlinedLightChip from "../../../components/chip/OutlinedLightChip";
import { COMMON_BORDER_RADIUS } from "../../../constants/common";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  backgroundColor: DARK_GRAY,
  width: "100%",
  borderRadius: COMMON_BORDER_RADIUS,
  gap: "8px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
  },
}));

function SelectedVideoActions(props) {
  const { statProps, actionProps = {}, ...restProps } = props;
  const subscribeChip = (
    <Chip
      color="error"
      label="Բաժանորդագրվել"
      icon={<YouTubeIcon />}
      clickable
    />
  );
  return (
    <Container {...restProps}>
      <VideoStatsBar {...statProps} slots={{ Chip: OutlinedLightChip }} />
      <VideoActionsBar
        actionProps={{ extraActions: [subscribeChip], ...actionProps }}
        slots={{ Chip: FilledLightChip }}
      />
    </Container>
  );
}

export default SelectedVideoActions;
