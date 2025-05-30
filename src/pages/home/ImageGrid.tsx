import {
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";
import useLayout from "../../hooks/layout/useLayout";

const GallerySection = styled(Box)({
  padding: "3rem 1rem",
  backgroundColor: "#fff",
  color: "#000",
  textAlign: "center",
});

const StyledImageList = styled(ImageList)({
  width: "100%",
  maxWidth: 1200,
  margin: "auto",
});

function ImageGrid() {
  const { smallLayout } = useLayout();
  const galleryImages = Array.from({ length: 13 }, (_, i) => ({
    img: `/src/images/${i}.webp`,
    title: `Image ${i}`,
  }));

  return (
    <GallerySection>
      <Typography variant="h4" gutterBottom>
        Մեր Եկեղեցին
      </Typography>
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
