import { styled, Typography } from "@mui/material";
import SocialNetworks from "./SocialNetworks";
import { SECONDARY_COLOR } from "../../constants/colors";
import Contacts from "./Contacts";
import Contact from "./Contact";
import FooterBottomSection from "./FooterBottomSection";

const Container = styled("footer")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: SECONDARY_COLOR,
  padding: `20px 0`,
  color: "white",
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.5,
});

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <Contacts>
        <SocialNetworks />
        <Contact>Հեռախոսահամար: +374 10 571 633</Contact>
      </Contacts>
      <FooterBottomSection>
        <Typography
          sx={{
            fontWeight: "bold",
            margin: `8px 0`,
          }}
        >
          ԵՐԵՎԱՆԻ ՆՈՐ ՍԵՐՈՒՆԴ ԵԿԵՂԵՑԻ
        </Typography>
        <p>Ք. Երևան, Տիգրան Մեծի պողոտա 80/1</p>
        <Typography sx={{ opacity: 0.8 }}>
          ©{currentYear} Երևանի Նոր Սերունդ եկեղեցի.
        </Typography>
      </FooterBottomSection>
    </Container>
  );
};

export default Footer;
