import { List, styled } from "@mui/material";
import ColumnParagraph from "./ColumnParagraph";
import { LIGHT_PURPLE } from "../../../constants/colors";
import { FAIHT_FUNDAMENTALS_LEFT_COLUMN } from "../../../constants/church";
import {
  COMMON_BORDER_RADIUS,
  CONTENT_PADDING,
} from "../../../constants/common";

const StyledList = styled(List)(({ theme }) => ({
  padding: CONTENT_PADDING,
  display: "flex",
  flexDirection: "column",
  gap: 32,
  backgroundColor: LIGHT_PURPLE,
  borderRadius: COMMON_BORDER_RADIUS,
  [theme.breakpoints.down("md")]: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

function LeftColumn() {
  return (
    <StyledList>
      {FAIHT_FUNDAMENTALS_LEFT_COLUMN.map((option) => {
        return (
          <ColumnParagraph
            key={option.title}
            title={option.title}
            description={option.description}
            refVerb={option.refVerb}
          />
        );
      })}
    </StyledList>
  );
}

export default LeftColumn;
