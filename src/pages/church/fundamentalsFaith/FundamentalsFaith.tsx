import { Box, styled } from "@mui/material";
import { PRIMARY_PURPLE, WHITE } from "../../../constants/colors";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import useLayout from "../../../hooks/layout/useLayout";
import AccordionList from "./AccordionList";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: PRIMARY_PURPLE,
  paddingBlock: "5%",
});

const SectionTitle = styled("h2")({
  textAlign: "center",
  marginBottom: "1rem",
  color: WHITE,
});

const ColumnsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    maxHeight: "400px",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

function FundamentalsFaith() {
  const { mediumLayout } = useLayout();

  return (
    <Container>
      <SectionTitle>ՀԱՎԱՏՔԻ ՀԻՄՔԵՐԸ</SectionTitle>
      {mediumLayout ? (
        <AccordionList />
      ) : (
        <ColumnsContainer>
          <LeftColumn />
          <RightColumn />
        </ColumnsContainer>
      )}
    </Container>
  );
}

export default FundamentalsFaith;
