import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import { COMMON_BORDER_RADIUS } from "../../constants/common";
import { SECONDARY_COLOR } from "../../constants/colors";
import useLayout from "../../hooks/layout/useLayout";

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

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "40%",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    minHeight: "200px",
    width: "100%",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  color: SECONDARY_COLOR,
  width: "60%",
  overflow: "hidden auto",
  "& .MuiDialogContent-root": {
    padding: "20px 32px 0",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

function MinistryOverviewContent(props) {
  const { title, description, image } = props;
  const { smallLayout } = useLayout();
  return (
    <CardContainer elevation={5}>
      <StyledCardMedia image={image} />
      <StyledCardContent>
        <Typography variant={"h6"}>{title}</Typography>
        <Divider sx={{ mx: "-20px", my: 2 }} />
        <Typography variant={smallLayout ? "body2" : 'inherit'}>
          {description}
        </Typography>
      </StyledCardContent>
    </CardContainer>
  );
}

export default MinistryOverviewContent;
