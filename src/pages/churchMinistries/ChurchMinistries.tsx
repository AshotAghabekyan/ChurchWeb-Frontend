import { Grid, Stack, styled } from "@mui/material";
import headerBgImage from "../../images/ministeriesBackground.webp";
import PageHeader from "../../components/PageHeader";
import { WHITE } from "../../constants/colors";
import { CHURCH_MINISTERIES } from "../../constants/churchMinistries";
import PageHeaderTitle from "../../components/PageHeaderTitle";
import ConcreteService from "./ConcreteMinistry";
import useLayout from "../../hooks/layout/useLayout";
import {
  CONTENT_PADDING,
  MOBILE_CONTENT_PADDING,
} from "../../constants/common";

const Container = styled(Stack)({
  justifyContent: "center",
  backgroundColor: WHITE,
});

function ChurchMinistries() {
  const { smallLayout } = useLayout();

  return (
    <Container>
      <PageHeader imageUrl={headerBgImage}>
        <PageHeaderTitle>Մեր Ծառայությունները</PageHeaderTitle>
      </PageHeader>
      <Grid
        container
        padding={smallLayout ? MOBILE_CONTENT_PADDING : CONTENT_PADDING}
        spacing={5}
      >
        {CHURCH_MINISTERIES.map((service) => {
          return (
            <Grid key={service.title} size={{ md: 4, sm: 12, xs: 12 }}>
              <ConcreteService
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ChurchMinistries;
