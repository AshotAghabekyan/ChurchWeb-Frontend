import { Grow } from "@mui/material";
import { forwardRef } from "react";

const GrowTransition = forwardRef<any>(function (props: any, ref) {
  const { children, ...restProps } = props;
  return (
    <Grow {...restProps} ref={ref}>
      {children}
    </Grow>
  );
});

export default GrowTransition;
