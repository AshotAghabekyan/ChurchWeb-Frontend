import { List, styled } from "@mui/material";
import { COMMON_BORDER_RADIUS } from "../constants/common";

const StyledList = styled(List)({
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
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#555",
    borderRadius: COMMON_BORDER_RADIUS,
  },
});

function ScrollContainer(props: any) {
  return <StyledList {...props} />;
}

export default ScrollContainer;
