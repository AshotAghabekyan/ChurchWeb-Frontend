import { Slide } from "@mui/material";
import { forwardRef } from "react";

const SlideTransition = forwardRef(function Transiton(props: any, ref) {
  const { children, direction = "up", ...restProps } = props;
  return (
    <Slide direction={direction} ref={ref} {...restProps}>
      {children}
    </Slide>
  );
});

export default SlideTransition;
