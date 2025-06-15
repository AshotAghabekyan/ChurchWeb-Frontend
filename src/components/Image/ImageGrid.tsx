import { ImageList, ImageListItem, Stack, styled } from "@mui/material";
import useLayout from "../../hooks/layout/useLayout";
import ImageListHeader from "./ImageListHeader";

const GallerySection = styled(Stack)({
  gap: "20px",
  padding: "1rem 10%",
  color: "#000",
  textAlign: "center",
});

const StyledImageList = styled(ImageList)({
  width: "100%",
  maxWidth: '100%',
});

function ImageGrid() {
  const { smallLayout } = useLayout();
  const galleryImages = Array.from({ length: 13 }, (_, i) => ({
    img: `/src/images/${i}.webp`,
    title: `Image ${i}`,
  }));

  return (
    <GallerySection direction={"column"}>
      <ImageListHeader />
      <StyledImageList
        sx={{}}
        variant="masonry"
        cols={smallLayout ? 2 : 4}
        gap={12}
      >
        {galleryImages.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              style={{ borderRadius: "12px", width: "100%" }}
            />
          </ImageListItem>
        ))}
      </StyledImageList>
    </GallerySection>
  );
}

export default ImageGrid;
