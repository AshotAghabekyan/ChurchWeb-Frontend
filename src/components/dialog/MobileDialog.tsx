import SlideTransition from "../transitions/Slide";
import MainDialog from "./MainDialog";

function MobileDialog(props: any) {
  return (
    <MainDialog
      slots={{
        transition: SlideTransition,
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
