import {
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import MainDialog from "../../components/dialog/MainDialog";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import ZoomTransition from "../../components/transitions/Zoom";
import useLayout from "../../hooks/layout/useLayout";
import MobileDialog from "../../components/dialog/MobileDialog";
import SlideTransition from "../../components/transitions/Slide";
import { SECONDARY_COLOR } from "../../constants/colors";

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  maxHeight: 400,
  borderRadius: COMMON_BORDER_RADIUS,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    maxHeight: "unset",
  },
}));

function MinistryOverviewDialog(props) {
  const { title, description, image, open, handleClose } = props;
  const { smallLayout } = useLayout();
  const DialogContent = (
    <CardContainer>
      <CardMedia
        sx={{
          width: "40%",
          ...(smallLayout && {
            minHeight: "200px",
            width: "100%",
          }),
          backgroundSize: "cover",
        }}
        image={image}
      />
      <CardContent
        sx={{
          color: SECONDARY_COLOR,
          width: smallLayout ? "100%" : "60%",
          overflow: "hidden auto",
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Divider sx={{ mx: "-20px", my: 2 }} />
        <Typography variant="h6">{description}</Typography>
      </CardContent>
    </CardContainer>
  );

  const dialogProps = {
    open,
    onClose: handleClose,
    title: smallLayout ? (
      <Typography variant="subtitle1">{title}</Typography>
    ) : (
      <Breadcrumbs>
        <Typography>Մեր Ծառայությունները</Typography>
        <Typography>{title}</Typography>
      </Breadcrumbs>
    ),
    slots: {
      transition: smallLayout ? SlideTransition : ZoomTransition,
    },
    ...(!smallLayout && {
      sx: {
        "& .MuiDialog-paper": {
          maxWidth: !smallLayout && "80%",
        },
      },
    }),
  };

  return smallLayout ? (
    <MobileDialog content={DialogContent} {...dialogProps} />
  ) : (
    <MainDialog content={DialogContent} {...dialogProps} />
  );
}

export default MinistryOverviewDialog;
