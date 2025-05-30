import { Box, styled } from "@mui/material";
import pastorImage from "../../../images/pastorMainImage.jpg";
import { SECONDARY_COLOR } from "../../../constants/colors";
import { COMMON_BORDER_RADIUS } from "../../../constants/common";

const Container = styled(Box)(({ theme }) => ({
  width: theme.breakpoints.down("md") ? "100%" : "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

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

const PastorInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
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
