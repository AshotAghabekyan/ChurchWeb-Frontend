import { Slide } from "@mui/material";
import MainDialog from "./MainDialog";
import { forwardRef } from "react";

const SlideUpTransition = forwardRef(function Transiton(props: any, ref) {
  const { children, ...restProps } = props;
  return (
    <Slide direction="up" ref={ref} {...restProps}>
      {children}
    </Slide>
  );
});

function MobileDialog(props) {
  return (
    <MainDialog
      slots={{
        transition: SlideUpTransition,
      }}
      slotProps={{
        paper: {
          sx: { width: "100%", position: "absolute", bottom: 0, margin: 0 },
        },
      }}
      {...props}
    />
  );
}

export default MobileDialog;
