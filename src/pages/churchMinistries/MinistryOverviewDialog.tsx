import { Breadcrumbs, Typography } from "@mui/material";
import MainDialog from "../../components/dialog/MainDialog";
import ZoomTransition from "../../components/transitions/Zoom";
import useLayout from "../../hooks/layout/useLayout";
import MobileDialog from "../../components/dialog/MobileDialog";
import SlideTransition from "../../components/transitions/Slide";
import SecondaryButton from "../../components/button/SecondaryButton";
import MinistryOverviewContent from "./MinistryOverviewContent";
import { useNavigate } from "react-router";
import { CONTACTS_PAGE } from "../../constants/pages";

function MinistryOverviewDialog(props) {
  const { title, description, image, open, handleClose } = props;
  const { smallLayout } = useLayout();
  const navigate = useNavigate();

  const dialogProps = {
    open,
    onClose: handleClose,
    title: smallLayout ? (
      <Typography variant="subtitle1">Մեր Ծառայությունները</Typography>
    ) : (
      <Breadcrumbs>
        <Typography>Մեր Ծառայությունները</Typography>
        <Typography>{title}</Typography>
      </Breadcrumbs>
    ),
    content: (
      <MinistryOverviewContent
        title={title}
        description={description}
        image={image}
      />
    ),
    actions: (
      <SecondaryButton
        onClick={() => navigate(CONTACTS_PAGE)}
        sx={{ width: smallLayout ? "100%" : "30%" }}
      >
        Միանալ
      </SecondaryButton>
    ),
    slots: {
      transition: smallLayout ? SlideTransition : ZoomTransition,
    },
    ...(!smallLayout && {
      sx: {
        "& .MuiDialog-paper": {
          maxWidth: !smallLayout && "70%",
        },
      },
    }),
  };

  return smallLayout ? (
    <MobileDialog {...dialogProps} />
  ) : (
    <MainDialog {...dialogProps} />
  );
}

export default MinistryOverviewDialog;
