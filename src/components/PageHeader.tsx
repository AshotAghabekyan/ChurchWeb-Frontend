import { Box, styled } from "@mui/material";
import { shouldForwardProp } from "../helpers/shouldForwardProp";
import {
  MAIN_BG_IMAGE_HEIGHT,
  PAGE_HEADER_IMAGE_HEIGHT_MOBILE,
} from "../constants/common";
import { WHITE } from "../constants/colors";
import useLayout from "../hooks/layout/useLayout";
import { useState } from "react";
import RectangularSkeleton from "./skeleton/RectangularSkeleton";

const Container = styled(Box, { shouldForwardProp })(
  ({ $smallLayout }: { $smallLayout: boolean }) => ({
    position: "relative",
    width: "100%",
    height: $smallLayout
      ? PAGE_HEADER_IMAGE_HEIGHT_MOBILE
      : MAIN_BG_IMAGE_HEIGHT,
    color: WHITE,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "stretch",
    textAlign: "center",
    flexDirection: "column",
    flexGrow: 1,
    boxSizing: "border-box",
  })
);

const Img = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

const Title = styled(Box)({
  padding: "10%",
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

function PageHeader(props: Record<string, any>) {
  const { imageUrl, children, ...restProps } = props;
  const { smallLayout } = useLayout();
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <RectangularSkeleton
          skeletonHeight={
            smallLayout ? PAGE_HEADER_IMAGE_HEIGHT_MOBILE : MAIN_BG_IMAGE_HEIGHT
          }
        />
      )}
      <Container
        $smallLayout={smallLayout}
        sx={loading ? { display: "none" } : null}
        {...restProps}
      >
        <Img onLoad={() => setLoading(false)} src={imageUrl} />
        <Title>{children}</Title>
      </Container>
    </>
  );
}

export default PageHeader;
