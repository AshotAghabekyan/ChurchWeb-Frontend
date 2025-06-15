import { Stack, styled, Typography } from "@mui/material";
import { SECONDARY_COLOR } from "../../constants/colors";

const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
});

const Title = styled(Typography)({
  color: SECONDARY_COLOR,
  paddingInline: "1rem",
});

function ImageListHeader() {
  return (
    <StyledStack>
      <Title variant="h4">Մեր Եկեղեցին</Title>
    </StyledStack>
  );
}

export default ImageListHeader;
