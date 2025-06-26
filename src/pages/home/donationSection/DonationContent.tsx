import { Stack, styled, Typography } from "@mui/material";
import { shouldForwardProp } from "../../../helpers/shouldForwardProp";
import useLayout from "../../../hooks/layout/useLayout";

const Container = styled(Stack, { shouldForwardProp })(({ theme }) => ({
  textAlign: "justify",
  paddingInline: "10%",
  margin: "auto",
  gap: 20,
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
  },
}));

function DonationContent() {
  const { smallLayout } = useLayout();
  return (
    <Container>
      <Typography
        sx={{ lineHeight: smallLayout ? 1.5 : 2 }}
        variant={smallLayout ? "h5" : "h4"}
      >
        “Ամեն մեկը թող ըստ իր սրտի հոժարության տա և ոչ թե տրտմությամբ կամ
        հարկադրաբար, որովհետև Աստված սիրում է հոժարությամբ տվողին։”
      </Typography>
      <Typography variant={smallLayout ? "h5" : "h4"}>
        Բ Կորնթացիներին 9.7
      </Typography>
    </Container>
  );
}

export default DonationContent;
