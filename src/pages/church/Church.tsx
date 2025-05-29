import { Box, Divider, styled, Typography } from "@mui/material";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants/colors";
import bgImage from "../../images/bibleImageBg.jpeg";
import PageHeader from "../../components/PageHeader";
import PastorAccount from "./pastor/PastorAccount";
import PastorBiograpy from "./pastor/PastorBiography";
import FundamentalsFaith from "./fundamentalsFaith/FundamentalsFaith";
import useLayout from "../../hooks/layout/useLayout";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: PRIMARY_COLOR,
});

const BiograpyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "2rem",
  padding: "2rem",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center,",
  },
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

const ActivityPurposeParagraph = styled("p")(({ theme }) => ({
  paddingInline: "20%",
  [theme.breakpoints.down("md")]: { paddingInline: "1rem", paddingBlock: "5%" },
  paddingBlock: "2%",
  width: "100%",
  fontSize: 18,
  color: SECONDARY_COLOR,
  textAlign: "left",
}));

const BottomSectionParagraph = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
    paddingInline: "1rem",
  },
  color: SECONDARY_COLOR,
  paddingBlock: "5%",
  paddingInline: "10%",
}));

function Church() {
  const { smallLayout } = useLayout();
  return (
    <Container>
      <PageHeader imageUrl={bgImage} title="Եկեղեցի" />
      <BiograpyContainer>
        <PastorAccount />
        <PastorBiograpy />
      </BiograpyContainer>

      <FundamentalsFaith />
      <ActivityPurposeParagraph>
        <b>«Նոր Սերունդ»</b> եկեղեցու գործունեության նպատակն է՝ քրիստոնեական
        արժեքների տարածումը հասարակության մեջ, մարդկանց հոգևոր լուսավորությունն
        ու աջակցությունը` մեղավոր ապրելակերպից հրաժարվելու, խաղամոլությունից,
        թմրամոլությունից և այլ կախվածություններից ազատվելու, ընտանիքները
        վերականգնելու հարցերում:
      </ActivityPurposeParagraph>
      <Divider />
      <BottomSectionParagraph variant={smallLayout ? "h5" : "h4"}>
        Ծառայել Աստծուն նշանակում է ծառայել մարդկանց, ծառայել մարդկանց նշանակում
        է ծառայել հասարակությանը, ծառայել հասարակությանը նշանակում է ծառայել
        պետությանը։
      </BottomSectionParagraph>
    </Container>
  );
}

export default Church;
