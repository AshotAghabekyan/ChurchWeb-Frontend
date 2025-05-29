import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router";
import { shouldForwardProp } from "../../../helpers/shouldForwardProp";
import { DynamicLayout } from "../../../types/dynamicLayout";
import useLayout from "../../../hooks/layout/useLayout";
import PrimaryButtonLarge from "../../../components/button/PrimaryButtonLarge";

const Container = styled(Box, { shouldForwardProp })(
  ({ $smallLayout }: DynamicLayout) => ({
    width: $smallLayout ? "100%" : "40%",
  })
);

function ToVideosPageButton(props) {
  const { smallLayout } = useLayout();
  const navigate = useNavigate();
  return (
    <Container $smallLayout={smallLayout}>
      <PrimaryButtonLarge
        fullWidth
        {...props}
        onClick={() => navigate("/videos")}
      />
    </Container>
  );
}

export default ToVideosPageButton;
