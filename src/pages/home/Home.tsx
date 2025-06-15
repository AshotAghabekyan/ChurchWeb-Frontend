import { Divider, styled, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../constants/colors";
import headerBgImage from "../../images/home_header.webp";
import MissionVisionSection from "./missionVision/MissionVisionSection";
import VideosSection from "./videosSection/VideosSection";
import DonationSection from "./donationSection/DonationSection";
import PageHeader from "../../components/PageHeader";
import useLayout from "../../hooks/layout/useLayout";
import ImageGrid from "../../components/Image/ImageGrid";
import VisitUs from "./VisitUs";
import ImageCarousel from "../../components/Image/ImageCarousel";

const Container = styled("main")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: PRIMARY_COLOR,
});

function Home() {
  const { smallLayout, mediumLayout } = useLayout();
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
      <Divider orientation="horizontal" sx={{ marginBlock: "10px" }} />
      {mediumLayout ? <ImageCarousel /> : <ImageGrid />}
      {mediumLayout && (
        <Divider orientation="horizontal" sx={{ marginBottom: "20px" }} />
      )}
      <VisitUs />
    </Container>
  );
}

export default Home;
