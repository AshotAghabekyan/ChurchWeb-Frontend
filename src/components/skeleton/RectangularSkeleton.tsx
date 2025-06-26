import { Box, CircularProgress, Skeleton, styled } from "@mui/material";
import { shouldForwardProp } from "../../helpers/shouldForwardProp";
import { SECONDARY_COLOR } from "../../constants/colors";

const LoaderContainer = styled(Box)({
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledCircularProgress = styled(CircularProgress)({
  color: SECONDARY_COLOR,
});

const StyledSkeleton = styled(Skeleton, { shouldForwardProp })(
  ({ $height }: { $height: number | string }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: $height || "100%",
    borderRadius: "10px",
  })
);

interface Props {
  showLoadingProgress?: boolean;
  skeletonHeight?: number | string;
}

function RectangularSkeleton({
  showLoadingProgress = true,
  skeletonHeight = "100%",
}: Props) {
  const height =
    typeof skeletonHeight == "number" ? `${skeletonHeight}px` : skeletonHeight;

  return (
    <Box width={"100%"} height={"100%"} position={"relative"}>
      <StyledSkeleton $height={height} variant="rectangular" />
      {showLoadingProgress && (
        <LoaderContainer>
          <StyledCircularProgress />
        </LoaderContainer>
      )}
    </Box>
  );
}
export default RectangularSkeleton;
