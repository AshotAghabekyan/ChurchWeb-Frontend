import { Box, styled } from "@mui/material";
import { shouldForwardProp } from "../helpers/shouldForwardProp";
import {
  MAIN_BG_IMAGE_HEIGHT,
  PAGE_HEADER_IMAGE_HEIGHT_MOBILE,
} from "../constants/bgImages";
import { WHITE } from "../constants/colors";
import useLayout from "../hooks/layout/useLayout";

const Container = styled(Box, { shouldForwardProp })(
  ({ $url, $smallLayout }: { $url: string; $smallLayout: boolean }) => ({
    background: `url(${$url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "100%",
    height: $smallLayout
      ? PAGE_HEADER_IMAGE_HEIGHT_MOBILE
      : MAIN_BG_IMAGE_HEIGHT,
    color: WHITE,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flexGrow: 1,
    boxSizing: "border-box",
    padding: "10%",
  })
);

function PageHeader(props: Record<string, any>) {
  const { imageUrl, children, ...restProps } = props;
  const { smallLayout } = useLayout();
  return (
    <Container $url={imageUrl} $smallLayout={smallLayout} {...restProps}>
      {children}
    </Container>
  );
}

export default PageHeader;
