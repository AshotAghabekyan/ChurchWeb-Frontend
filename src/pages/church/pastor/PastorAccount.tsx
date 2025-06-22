import { Stack, styled } from "@mui/material";
import pastorImage from "../../../images/pastorMainImage.jpg";
import { SECONDARY_COLOR } from "../../../constants/colors";
import { COMMON_BORDER_RADIUS } from "../../../constants/common";

const Container = styled(Stack)({
  width: "100%",
  alignItems: "center",
  textAlign: "center",
});

const PastorImage = styled("img")(({ theme }) => {
  return {
    width: "100%",
    height: "auto",
    borderRadius: COMMON_BORDER_RADIUS,
    objectFit: "contain",
    [theme.breakpoints.between("sm", "lg")]: {
      width: "80%",
      maxHeight: "40rem",
      objectFit: "cover",
      objectPosition: "top",
    },
  };
});

const PastorInfo = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  color: SECONDARY_COLOR,
});

function PastorAccount() {
  return (
    <Container>
      <PastorImage src={pastorImage} />
      <PastorInfo>
        <h2>Տիգրան Թադևոսյան</h2>
        <b>Հովիվ</b>
      </PastorInfo>
    </Container>
  );
}

export default PastorAccount;
