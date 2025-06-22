import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { WHITE } from "../../constants/colors";
import {
  getChurchFacebookPageUrl,
  getChurchInstagramPageUrl,
  getChurchTelegramChannelUrl,
} from "../../helpers/socialNetworks";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
});

const SocialNetworks = () => {
  return (
    <Container>
      <IconButton
        href={getChurchFacebookPageUrl()}
        target="_blank"
        size="large"
        sx={{ color: WHITE }}
      >
        <Stack alignItems={"center"}>
          <FacebookIcon />
          <Typography>Facebook</Typography>
        </Stack>
      </IconButton>
      <IconButton
        href={getChurchInstagramPageUrl()}
        target="_blank"
        sx={{ color: WHITE }}
      >
        <Stack alignItems={"center"}>
          <InstagramIcon />
          <Typography>Instagram</Typography>
        </Stack>
      </IconButton>

      <IconButton
        href={getChurchTelegramChannelUrl()}
        target="_blank"
        sx={{ color: WHITE }}
      >
        <Stack alignItems={"center"}>
          <TelegramIcon />
          <Typography>Telegram</Typography>
        </Stack>
      </IconButton>
    </Container>
  );
};

export default SocialNetworks;
