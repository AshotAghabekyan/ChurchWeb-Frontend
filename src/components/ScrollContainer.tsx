import { List, styled } from "@mui/material";
import { COMMON_BORDER_RADIUS } from "../constants/common";
import { shouldForwardProp } from "../helpers/shouldForwardProp";

const StyledList = styled(List, { shouldForwardProp })(
  ({ $hideScrollbar }: any) => ({
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    gap: "1.5rem",
    overflowX: "auto",
    padding: "1rem 0",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      height: 8,
      ...($hideScrollbar && { display: "none" }),
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#555",
      borderRadius: COMMON_BORDER_RADIUS,
    },
  })
);

function ScrollContainer(props: any) {
  const { hideScrollbar = false, ...restProps } = props;
  return <StyledList {...restProps} $hideScrollbar={hideScrollbar} />;
}

export default ScrollContainer;
