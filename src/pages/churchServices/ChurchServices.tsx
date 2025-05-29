import { Box, styled } from "@mui/material";
import headerBgImage from "../../images/servicesBackground.webp";
import PageHeader from "../../components/PageHeader";
import ConcreteService from "./ConcreteService";
import { WHITE } from "../../constants/colors";
import { CHURCH_SERVICES } from "../../constants/churchServices";

const Container = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: WHITE,
});

function ChurchServices() {
  const REVERSED_CONTAINER_INDEX = 1;
  return (
    <Container>
      <PageHeader imageUrl={headerBgImage} title="Մեր Ծառայությունները" />
      {CHURCH_SERVICES.map((service, index) => {
        return (
          <ConcreteService
            {...(index == REVERSED_CONTAINER_INDEX && { reverse: true })}
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        );
      })}
    </Container>
  );
}

export default ChurchServices;
