import { Paper, Stack, styled } from "@mui/material";
import ScrollContainer from "../ScrollContainer";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import ImageListHeader from "./ImageListHeader";
import { GalleryItem } from "./interfaces";

const Container = styled(Stack)({
  width: "100%",
  gap: "10px",
});

const StackImageItem = styled(Paper)({
  width: "300px",
  height: "200px",
  display: "flex",
  flexShrink: 0,
  borderRadius: COMMON_BORDER_RADIUS,
});

const StyledImg = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: COMMON_BORDER_RADIUS,
});

const galleryImages: GalleryItem[] = Array.from({ length: 13 }, (_, i) => ({
  img: `/src/images/carousel/${i}.webp`,
  title: `Image ${i}`,
}));

function ImageCarousel() {
  return (
    <Container alignItems={"flex-start"} direction={"column"}>
      <ImageListHeader />
      <ScrollContainer
        hideScrollbar={true}
        sx={{ width: "100vw", padding: "1rem" }}
      >
        {galleryImages.map((item, index) => {
          return (
            <StackImageItem elevation={4} key={index}>
              <StyledImg src={item.img} />
            </StackImageItem>
          );
        })}
      </ScrollContainer>
    </Container>
  );
}

export default ImageCarousel;
