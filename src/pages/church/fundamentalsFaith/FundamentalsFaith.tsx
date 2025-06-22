import { Grid, Stack, styled } from "@mui/material";
import { PRIMARY_PURPLE, WHITE } from "../../../constants/colors";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import useLayout from "../../../hooks/layout/useLayout";
import AccordionList from "./AccordionList";
import { CONTENT_PADDING } from "../../../constants/common";

const Container = styled(Stack)({
  backgroundColor: PRIMARY_PURPLE,
  paddingBlock: "5%",
  padding: CONTENT_PADDING,
});

const SectionTitle = styled("h2")({
  textAlign: "center",
  marginBottom: "1rem",
  color: WHITE,
});

const ColumnsContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    maxHeight: "400px",
    overflow: "auto",
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
        <ColumnsContainer spacing={4} container>
          <Grid size={6}>
            <LeftColumn />
          </Grid>
          <Grid size={6}>
            <RightColumn />
          </Grid>
        </ColumnsContainer>
      )}
    </Container>
  );
}

export default FundamentalsFaith;
