import { useNavigate } from "react-router";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { SECONDARY_COLOR } from "../../constants/colors";
import { shouldForwardProp } from "../../helpers/shouldForwardProp";
import SecondaryButtonMedium from "../../components/button/SecondaryButtonMedium";
import useLayout from "../../hooks/layout/useLayout";
import SecondaryButton from "../../components/button/SecondaryButton";
import { CONTACTS_PAGE } from "../../constants/pages";
import TextEllipsisContainer from "../../components/textEllipsis/TextEllipsisContainer";
import { COMMON_BORDER_RADIUS } from "../../constants/common";

interface StyledCardProps {
  $reverse: boolean;
}

const StyledCard = styled(Card, { shouldForwardProp })<StyledCardProps>(
  ({ theme, $reverse }) => ({
    display: "flex",
    flexDirection: $reverse ? "row-reverse" : "row",
    width: "100%",
    padding: "2rem",
    borderRadius: 0,
    color: SECONDARY_COLOR,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  })
);

const StyledCardMedia = styled(CardMedia, { shouldForwardProp })(
  ({ theme }) => ({
    width: "100%",
    height: "auto",
    borderRadius: COMMON_BORDER_RADIUS,
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      height: "30rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
    },
  })
);

const StyledCardContent = styled(CardContent)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  paddingInline: 0,
}));

function ConcreteService(props) {
  const { title, description, image, reverse } = props;
  const { smallLayout } = useLayout();
  const navigator = useNavigate();
  const onClick = () => navigator(CONTACTS_PAGE);

  return (
    <StyledCard $reverse={reverse}>
      <StyledCardMedia image={image}></StyledCardMedia>
      <StyledCardContent>
        <Typography paddingBlock={"16px"} variant="h4">
          {title}
        </Typography>

        {smallLayout ? (
          <TextEllipsisContainer
            collapsedHeight={200}
            timeout={{ enter: 300, exit: 300 }}
          >
            {description}
          </TextEllipsisContainer>
        ) : (
          <Typography variant="h6">{description}</Typography>
        )}

        <StyledCardActions>
          {smallLayout ? (
            <SecondaryButton onClick={onClick} fullWidth>
              Միանալ
            </SecondaryButton>
          ) : (
            <SecondaryButtonMedium onClick={onClick} fullWidth>
              Միանալ
            </SecondaryButtonMedium>
          )}
        </StyledCardActions>
      </StyledCardContent>
    </StyledCard>
  );
}

export default ConcreteService;
