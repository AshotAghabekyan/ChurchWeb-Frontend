import { Box, IconButton, styled } from "@mui/material";
import { PRIMARY_PURPLE, WHITE } from "../../../constants/colors";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { useFundamentalsFaith } from "./useFundamentalsFaith";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function FundamentalsFaith() {
  const { expanded, handleToggle, smallLayout } = useFundamentalsFaith();

  return (
    <Container>
      <SectionTitle>ՀԱՎԱՏՔԻ ՀԻՄՔԵՐԸ</SectionTitle>
      <ColumnsContainer>
        <LeftColumn showAll={expanded} />
        <RightColumn showAll={expanded} />
      </ColumnsContainer>

      {smallLayout && (
        <IconButton
          onClick={handleToggle}
          sx={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            alignSelf: "center",
          }}
        >
          <ExpandMoreIcon fontSize="large" sx={{ color: WHITE }} />
        </IconButton>
      )}
    </Container>
  );
}

export default FundamentalsFaith;
