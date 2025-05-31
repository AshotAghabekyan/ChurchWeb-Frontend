import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BRIGHT_GOLDEN, LIGHT_PURPLE, WHITE } from "../../../constants/colors";

const HighlightedUnderlinedText = styled("p")({
  color: BRIGHT_GOLDEN,
  fontWeight: "bold",
});

const StyledAccordion = styled(Accordion)({
  backgroundColor: LIGHT_PURPLE,
});

function AccordionItem(props) {
  const { title, description, refVerb, id, expanded, onClick, onClose } = props;
  const opened = expanded == id;
  const toggleButtonClick = (e) => {
    if (opened) {
      e.stopPropagation();
      onClose();
    } else {
      onClick();
    }
  };

  return (
    <StyledAccordion expanded={expanded == id} onClick={toggleButtonClick}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: WHITE }} />}>
        <HighlightedUnderlinedText>{title}</HighlightedUnderlinedText>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: WHITE }}>{description}</Typography>
        <Typography sx={{ textAlign: "left", width: "100%", color: WHITE }}>
          <i>{refVerb}</i>
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
}

export default AccordionItem;
