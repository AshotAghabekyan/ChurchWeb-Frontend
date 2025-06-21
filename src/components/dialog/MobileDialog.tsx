import SlideTransition from "../transitions/Slide";
import MainDialog from "./MainDialog";

function MobileDialog(props) {
  return (
    <MainDialog
      slots={{
        transition: SlideTransition,
      }}
      sx={{
        "& .MuiDialogContent-root": {
          paddingInline: "10px",
        },
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
