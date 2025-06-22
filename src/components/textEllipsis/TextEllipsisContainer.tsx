import { Box, Collapse, IconButton, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRef, useState } from "react";

interface TransitionTimeout {
  enter: number;
  exit: number;
}

interface Props {
  children: React.ReactNode;
  collapsedHeight?: number; // px
  gradientHeight?: number; // px
  timeout?: TransitionTimeout;
}

function TextEllipsisContainer({
  children,
  collapsedHeight = 300,
  gradientHeight = 50,
  timeout = { enter: 500, exit: 500 },
}: Props) {
  const { enter: startTimeout, exit: exitTimeout } = timeout!;
  const [expanded, setExpanded] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (expanded) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setExpanded(false);
      }, 300);
    } else {
      setExpanded(true);
    }
  };

  return (
    <div ref={ref}>
      <Stack spacing={1} position="relative">
        <Collapse
          in={expanded}
          timeout={{ exit: exitTimeout, enter: startTimeout }}
          collapsedSize={collapsedHeight}
        >
          <Box>{children}</Box>
          {!expanded && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: `${collapsedHeight - gradientHeight}px`,
                background: `linear-gradient(to bottom, transparent, white)`,
              }}
            />
          )}
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
    </div>
  );
}

export default TextEllipsisContainer;
