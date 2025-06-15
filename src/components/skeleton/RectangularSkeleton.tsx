import {
  Box,
  CircularProgress,
  Skeleton,
  styled,
} from "@mui/material";
import { shouldForwardProp } from "../../helpers/shouldForwardProp";
import { SECONDARY_COLOR } from "../../constants/colors";

const StyledCircularProgress = styled(CircularProgress)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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

function RectangularSkeleton({
  showLoadingProgrsss = true,
  skeletonHeight = "100%",
}) {
  const height =
    typeof skeletonHeight == "number" ? `${skeletonHeight}px` : skeletonHeight;
  return (
    <Box width={"100%"} height={"100%"} position={"relative"}>
      <StyledSkeleton $height={height} variant="rectangular" />
      {showLoadingProgrsss && <StyledCircularProgress />}
    </Box>
  );
}
export default RectangularSkeleton;
