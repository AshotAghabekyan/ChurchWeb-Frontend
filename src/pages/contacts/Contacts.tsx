import { Stack, styled } from "@mui/material";
import headerBgImage from "../../images/visitUsBackground.webp"
import PageHeader from "../../components/PageHeader";
import PageHeaderTitle from "../../components/PageHeaderTitle";

const Container = styled(Stack)({
  width: "100%",
});



function Contacts() {
  return (
    <Container>
      <PageHeader imageUrl={headerBgImage}>
        <PageHeaderTitle>Այցելեք մեզ</PageHeaderTitle>
      </PageHeader>

    </Container>
  );
}

export default Contacts;
