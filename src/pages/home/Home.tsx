import { styled, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../constants/colors";
import headerBgImage from "../../images/home_header.webp";
import MissionVisionSection from "./missionVision/MissionVisionSection";
import VideosSection from "./videosSection/VideosSection";
import DonationSection from "./donationSection/DonationSection";
import PageHeader from "../../components/PageHeader";
import useLayout from "../../hooks/layout/useLayout";
import ImageGrid from "./ImageGrid";
import VisitUs from "./VisitUs";

const Container = styled("main")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: PRIMARY_COLOR,
});

function Home() {
  const { smallLayout } = useLayout();

  return (
    <Container>
      <PageHeader imageUrl={headerBgImage}>
        <Typography variant={smallLayout ? "h5" : "h4"}>
          ԲԱՐԻ ԳԱԼՈՒՍՏ
        </Typography>
        <Typography variant={smallLayout ? "h4" : "h3"}>
          ԵՐԵՎԱՆԻ ՆՈՐ ՍԵՐՈՒՆԴ ԵԿԵՂԵՑԻ
        </Typography>
      </PageHeader>

      <MissionVisionSection />
      <VideosSection />
      <DonationSection />
      <ImageGrid />
      <VisitUs />
    </Container>
  );
}

export default Home;
