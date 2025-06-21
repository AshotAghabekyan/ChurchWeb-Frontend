import { Grid, Stack, styled } from "@mui/material";
import headerBgImage from "../../images/visitUsBackground.webp";
import PageHeader from "../../components/PageHeader";
import PageHeaderTitle from "../../components/PageHeaderTitle";
import ChurchSchedules from "./ScheduleSection";
import ChurchLocation from "./Location";
import ContactUs from "./ContactUs";

const Container = styled(Stack)({
  width: "100%",
});

function Contacts() {
  return (
    <Container>
      <PageHeader imageUrl={headerBgImage}>
        <PageHeaderTitle>Այցելեք մեզ</PageHeaderTitle>
      </PageHeader>
      <Grid container>
        <Grid size={{ sm: 12, md: 6 }}>
          <ChurchSchedules />
        </Grid>
        <Grid size={{ sm: 12, md: 6, xs: 12 }}>
          <ContactUs />
        </Grid>
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <ChurchLocation />
      </Grid>
    </Container>
  );
}

export default Contacts;
