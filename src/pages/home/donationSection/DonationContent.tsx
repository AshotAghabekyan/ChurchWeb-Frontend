import { Box, styled, Typography } from "@mui/material";
import { shouldForwardProp } from "../../../helpers/shouldForwardProp";
import { DynamicLayout } from "../../../types/dynamicLayout";
import useLayout from "../../../hooks/layout/useLayout";

const Container = styled(Box, { shouldForwardProp })(
  ({ $smallLayout }: DynamicLayout) => ({
    textAlign: $smallLayout ? "left" : "justify",
    paddingInline: "5%",
    display: "flex",
    flexDirection: "column",
    gap: 40,
  })
);

function DonationContent() {
  const { smallLayout } = useLayout();
  return (
    <Container $smallLayout={smallLayout}>
      <Typography sx={{ lineHeight: "2" }} variant={smallLayout ? "h5" : "h4"}>
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
