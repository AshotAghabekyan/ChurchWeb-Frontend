import { Divider, Grid, Stack, styled, Typography } from "@mui/material";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants/colors";
import bgImage from "../../images/bibleImageBg.jpeg";
import PageHeader from "../../components/PageHeader";
import PastorAccount from "./pastor/PastorAccount";
import PastorBiograpy from "./pastor/PastorBiography";
import FundamentalsFaith from "./fundamentalsFaith/FundamentalsFaith";
import useLayout from "../../hooks/layout/useLayout";
import PageHeaderTitle from "../../components/PageHeaderTitle";
import {
  CONTENT_PADDING,
  MOBILE_CONTENT_PADDING,
} from "../../constants/common";

const Container = styled(Stack)({
  backgroundColor: PRIMARY_COLOR,
});

const BiograpyContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  padding: CONTENT_PADDING,
  [theme.breakpoints.down("md")]: {
    padding: MOBILE_CONTENT_PADDING,
  },
}));

const ActivityPurposeParagraph = styled(Typography)(({ theme }) => ({
  paddingInline: "20%",
  paddingBlock: "2%",
  width: "100%",
  fontSize: 18,
  color: SECONDARY_COLOR,
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    paddingInline: "1rem",
    paddingBlock: "5%",
  },
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
      <PageHeader imageUrl={bgImage}>
        <PageHeaderTitle>Եկեղեցի</PageHeaderTitle>
      </PageHeader>
      <BiograpyContainer container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <PastorAccount />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <PastorBiograpy />
        </Grid>
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
