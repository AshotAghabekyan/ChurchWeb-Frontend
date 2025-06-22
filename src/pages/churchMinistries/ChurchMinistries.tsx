import { useNavigate } from "react-router";
import { Grid, Stack, styled } from "@mui/material";
import headerBgImage from "../../images/ministeriesBackground.webp";
import PageHeader from "../../components/PageHeader";
import { WHITE } from "../../constants/colors";
import { CHURCH_MINISTERIES } from "../../constants/churchMinistries";
import PageHeaderTitle from "../../components/PageHeaderTitle";
import ConcreteService from "./ConcreteMinistry";
import SecondaryButton from "../../components/button/SecondaryButton";
import SecondaryButtonMedium from "../../components/button/SecondaryButtonMedium";
import useLayout from "../../hooks/layout/useLayout";
import { CONTACTS_PAGE } from "../../constants/pages";
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
  const navigator = useNavigate();
  const onClick = () => navigator(CONTACTS_PAGE);

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
        <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
          {smallLayout ? (
            <SecondaryButton onClick={onClick} fullWidth>
              Միանալ
            </SecondaryButton>
          ) : (
            <SecondaryButtonMedium onClick={onClick} sx={{ width: "40%" }}>
              Միանալ
            </SecondaryButtonMedium>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChurchMinistries;
