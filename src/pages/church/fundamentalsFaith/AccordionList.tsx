import { useState } from "react";
import {
  FAIHT_FUNDAMENTALS_LEFT_COLUMN,
  FAIHT_FUNDAMENTALS_RIGHT_COLUMN,
} from "../../../constants/church";
import { Stack, styled } from "@mui/material";
import AccordionItem from "./AccordionItem";

const Container = styled(Stack)({
  width: "100%",
});

function AccordionList() {
  const [expanded, setExpanded] = useState<any>(null);
  const fullList = [
    ...FAIHT_FUNDAMENTALS_LEFT_COLUMN,
    ...FAIHT_FUNDAMENTALS_RIGHT_COLUMN,
  ];
  return (
    <Container>
      {fullList.map((listItem) => {
        return (
          <AccordionItem
            {...listItem}
            expanded={expanded}
            onClick={setExpanded}
            key={listItem.id}
          />
        );
      })}
    </Container>
  );
}

export default AccordionList;
