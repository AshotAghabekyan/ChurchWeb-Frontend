import { Chip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { VIEWS_TEXT } from "../../../constants/typography";
import ChipContainer from "../../../components/chip/ChipItem";

function VideoStatsBar(props) {
  const { likeCount, viewCount, slots = {} } = props;
  const { Chip: DefaultChip = Chip } = slots;

  return (
    <>
      <ChipContainer>
        <DefaultChip variant="outlined" label={`${VIEWS_TEXT}: ${viewCount}`} />
      </ChipContainer>
      <ChipContainer>
        <DefaultChip
          variant="outlined"
          icon={<FavoriteBorderIcon />}
          label={likeCount}
        />
      </ChipContainer>
    </>
  );
}

export default VideoStatsBar;
