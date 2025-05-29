import { List, styled } from "@mui/material";
import ColumnParagraph from "./ColumnParagraph";
import { LIGHT_PURPLE } from "../../../constants/colors";
import { FAIHT_FUNDAMENTALS_LEFT_COLUMN } from "../../../constants/church";
import useLayout from "../../../hooks/layout/useLayout";

const StyledList = styled(List)(({ theme }) => ({
  width: "45%",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  backgroundColor: LIGHT_PURPLE,
  borderRadius: 10,
}));

function LeftColumn(props: any) {
  const { showAll } = props;
  const { smallLayout } = useLayout();
  const defaultOptions =
    showAll || !smallLayout
      ? FAIHT_FUNDAMENTALS_LEFT_COLUMN
      : FAIHT_FUNDAMENTALS_LEFT_COLUMN.slice(0, 1);
  return (
    <StyledList>
      {defaultOptions.map((option) => {
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
