import { styled, Typography } from "@mui/material";
import { shouldForwardProp } from "../../helpers/shouldForwardProp";

const StyledTypography = styled(Typography, { shouldForwardProp })(
  ({ $lineCount }: { $lineCount: number }) => ({
    display: "-webkit-box",
    WebkitLineClamp: $lineCount,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  })
);

function VerticalTextEllipsis(props: any) {
  const { lineCount, children, ...restProps } = props;
  return (
    <StyledTypography $lineCount={lineCount} {...restProps}>
      {children}
    </StyledTypography>
  );
}

export default VerticalTextEllipsis;
