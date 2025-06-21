import { Zoom } from "@mui/material";
import { forwardRef } from "react";

const ZoomTransition = forwardRef(function Transiton(props: any, ref) {
  const { children, ...restProps } = props;
  return (
    <Zoom ref={ref} {...restProps}>
      {children}
    </Zoom>
  );
});

export default ZoomTransition;
