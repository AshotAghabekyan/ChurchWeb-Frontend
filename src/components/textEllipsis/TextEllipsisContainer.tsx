import { Box, Collapse, IconButton, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  collapsedHeight?: number; // px
  gradientHeight?: number; // px
};

function TextEllipsisContainer({
  children,
  collapsedHeight = 300,
  gradientHeight = 50,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (ref.current && expanded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setExpanded((prev) => !prev);
  };

  return (
    <Stack spacing={1} position="relative" ref={ref}>
      <Collapse in={expanded} collapsedSize={collapsedHeight}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {children}

          {!expanded && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: gradientHeight,
                background: "linear-gradient(to bottom, transparent, white)",
              }}
            />
          )}
        </Box>
      </Collapse>

      <IconButton
        onClick={handleToggle}
        sx={{
          transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
          alignSelf: "center",
        }}
      >
        <ExpandMoreIcon />
      </IconButton>
    </Stack>
  );
}

export default TextEllipsisContainer;
