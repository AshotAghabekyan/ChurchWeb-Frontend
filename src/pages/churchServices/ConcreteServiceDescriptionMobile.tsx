import { Collapse, IconButton, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerticalTextEllipsis from "../../components/textEllipsis/VerticalTextEllipsis";
import { useRef, useState } from "react";

function ConcreteServiceDescriptionMobile(props) {
  const { children } = props;
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<any>(null);
  const handleToggle = () => {
    if (ref.current && expanded) {
      const offset = ref.current.getBoundingClientRect().top;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setExpanded((prev) => !prev);
  };

  return (
    <Stack ref={ref} justifyContent={"center"}>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography variant="h6">{children}</Typography>
      </Collapse>

      {!expanded && (
        <VerticalTextEllipsis variant="h6" lineCount={4}>
          {children}
        </VerticalTextEllipsis>
      )}

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

export default ConcreteServiceDescriptionMobile;
