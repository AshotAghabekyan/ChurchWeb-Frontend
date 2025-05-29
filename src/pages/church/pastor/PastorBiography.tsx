import { Box, styled } from "@mui/material";
import {
  DARK_GOLDEN,
  LIGHT_GOLDEN,
  PRIMARY_PURPLE,
  WHITE,
} from "../../../constants/colors";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: WHITE,
  color: PRIMARY_PURPLE,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  borderRadius: 10,
  animation: "slideUp 1s ease-out",
}));

const BiographyHeader = styled("h2")({
  fontWeight: "bold",
  marginBottom: "1rem",
});

const BiographyParagraph = styled("p")({
  fontSize: 18,
  padding: 8,
});

const HighlightedParagraph = styled("p")({
  color: PRIMARY_PURPLE,
  background: `linear-gradient(135deg, ${DARK_GOLDEN}, ${LIGHT_GOLDEN})`,
  borderLeft: DARK_GOLDEN,
  padding: "1rem",
  margin: "2rem 0",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "1.1rem",
  borderRadius: 5,
});

function PastorBiograpy() {
  return (
    <Container>
      <BiographyHeader>
        Հովիվ Տիգրան Թադևոսյանը ծնվել է 1965 թվականին Երևանում։ Սովորել է Երևանի
        թիվ 139 անգլիական թեքումով դպրոցում (այժմ՝ Կ. Դեմիրճյանի անվան)։
      </BiographyHeader>
      <BiographyParagraph>
        Հայրենիքին ծառայելուց հետո նա շարունակեց իր կրթությունը Կույբիշևի (այժմ՝
        Սամարայի) Կուլտուրայի պետական համալսարանում, ստանալով
        «Մշակութալուսավորչական գործունեության կազմակերպման մեթոդիստ»
        մասնագիտություն։
      </BiographyParagraph>

      <BiographyParagraph>
        Նրա՝ արվեստի և երաժշտության հանդեպ սերն արտահայտվեց դեռ 14 տարեկանից,
        երբ սկսեց նվագել տարբեր գործիքների վրա, իսկ 15 տարեկանից իր տաղանդի
        շնորհիվ արդեն վաստակում էր ինքնուրույն։
      </BiographyParagraph>
      <HighlightedParagraph>
        Տիգրանի կյանքում ամենամեծ շրջադարձը տեղի ունեցավ, երբ նա լսեց Աստծո
        խոսքը և ապաշխարհելով, թողեց աշխարհիկ կյանքը։
      </HighlightedParagraph>
      <BiographyParagraph>
        Տիգրանի խոնարհությունը և մարդկանց հանդեպ սիրո պաշարը դարձան հովվական
        կոչման հիմք։
      </BiographyParagraph>
      <BiographyParagraph>
        2015-ին միջազգային աստվածաբանական համալսարանի կողմից Տիգրան Թադևոսյանին
        շնորհվեց դոկտորի աստիճան։
      </BiographyParagraph>
      <BiographyParagraph>
        Նրա առաջնորդությամբ «Նոր Սերունդ» եկեղեցին դարձել է հավատքի տուն՝ լի
        սրտացավությամբ, համերաշխությամբ և Աստծո զորությամբ։
      </BiographyParagraph>
      <BiographyParagraph>
        Արդեն մոտ 23 տարի է, ինչ Երևանի «Նոր Սերունդ» եկեղեցին Հայաստանում
        տարածում է Հիսուս Քրիստոսի սիրո, հույսի և փրկության ուղերձը։
      </BiographyParagraph>
    </Container>
  );
}

export default PastorBiograpy;
