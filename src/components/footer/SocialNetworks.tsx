import { Box, styled } from "@mui/material";
import FacebookIcon from "../../images/facebook.webp";
import InstagramIcon from "../../images/instagram.webp";
import TelegramIcon from "../../images/telegram.webp";
import Contact from "./Contact";
import ContactIcon from "./ContactIcon";
import ContactItem from "./ContactItem";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: `32px`,
});

const SocialNetworks = () => {
  return (
    <Container>
      <Contact
        href="https://www.facebook.com/newgenerationchurch.am"
        target="_blank"
      >
        <ContactItem>
          <ContactIcon icon={FacebookIcon} />
          <p>Facebook</p>
        </ContactItem>
      </Contact>
      <Contact
        href="https://www.instagram.com/newgeneration_arm/"
        target="_blank"
      >
        <ContactItem>
          <ContactIcon icon={InstagramIcon} />
          <p>Instagram</p>
        </ContactItem>
      </Contact>
      <Contact href="https://t.me/newgenerationarmenia" target="_blank">
        <ContactItem>
          <ContactIcon icon={TelegramIcon} />
          <p>Telegram</p>
        </ContactItem>
      </Contact>
    </Container>
  );
};

export default SocialNetworks;
