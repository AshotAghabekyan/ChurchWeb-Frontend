import { Button, Stack, styled, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { CONTENT_PADDING } from "../../constants/common";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants/colors";

const Container = styled(Stack)(({ theme }) => ({
  height: "100%",
  gap: "5rem",
  justifyContent: "center",
  alignItems: "center",
  padding: CONTENT_PADDING,
  backgroundColor: PRIMARY_COLOR,
  [theme.breakpoints.down("md")]: {
    gap: "2rem",
  },
  "&  *": {
    color: SECONDARY_COLOR,
  },
}));

function ContactUs() {
  return (
    <Container>
      <Stack>
        <Typography variant="h4">ՀԵՏԱԴԱՐՁ ԿԱՊ</Typography>
        <Button
          href="https://www.facebook.com/newgenerationchurch.am"
          target="_blank"
          sx={{ width: "fit-content", color: SECONDARY_COLOR }}
          startIcon={<FacebookIcon fontSize="small" />}
        >
          Facebook
        </Button>
        <Button
          href="https://www.instagram.com/newgeneration_arm/"
          target="_blank"
          sx={{ width: "fit-content", color: SECONDARY_COLOR }}
          startIcon={<InstagramIcon fontSize="small" />}
        >
          Instagram
        </Button>
        <Button
          href="https://t.me/newgenerationarmenia"
          target="_blank"
          sx={{ width: "fit-content", color: SECONDARY_COLOR }}
          startIcon={<TelegramIcon fontSize="small" />}
        >
          Telegram
        </Button>
      </Stack>
      <Stack>
        <Typography variant="h4">ՀԱՍՑԵ</Typography>
        <Typography>Ք. Երևան, Տիգրան Մեծի պողոտա 80/1</Typography>
      </Stack>
    </Container>
  );
}

export default ContactUs;
