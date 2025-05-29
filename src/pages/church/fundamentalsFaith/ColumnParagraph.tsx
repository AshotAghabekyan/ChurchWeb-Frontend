import { ListItem } from "@mui/material";
import { styled } from "@mui/system";
import { BRIGHT_GOLDEN, WHITE } from "../../../constants/colors";

const StyledListItem = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  color: WHITE,
  fontSize: 18,
});


const HighlightedUnderlinedText = styled("u")({
  color: BRIGHT_GOLDEN,
  fontWeight: "bold",
});

function ColumnParagraph(props: any) {
  const { title, description, refVerb } = props;

  return (
    <StyledListItem>
      <p style={{width: '100%'}}>
        <HighlightedUnderlinedText>{title}</HighlightedUnderlinedText>
        <span> - {description}</span>
      </p>
      <p style={{ textAlign: "left", width: "100%" }}>
        <i>{refVerb}</i>
      </p>
    </StyledListItem>
  );
}

export default ColumnParagraph;
