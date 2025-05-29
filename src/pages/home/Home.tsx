import { styled, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../../constants/colors";
import headerBgImage from "../../images/home_header.webp";
import MissionVisionSection from "./missionVision/MissionVisionSection";
import VideosSection from "./videosSection/VideosSection";
import DonationSection from "./donationSection/DonationSection";
import PageHeader from "../../components/PageHeader";

const Container = styled("main")({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  backgroundColor: PRIMARY_COLOR,
});

function Home() {
  return (
    <Container>
      <PageHeader imageUrl={headerBgImage}>
        <h1>ԲԱՐԻ ԳԱԼՈՒՍՏ</h1>
        <Typography variant="h3">ԵՐԵՎԱՆԻ ՆՈՐ ՍԵՐՈՒՆԴ ԵԿԵՂԵՑԻ</Typography>
      </PageHeader>

      <MissionVisionSection />
      <VideosSection />
      <DonationSection />
    </Container>
  );
}

export default Home;
