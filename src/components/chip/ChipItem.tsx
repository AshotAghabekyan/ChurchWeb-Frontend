import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  cursor: "pointer",
});

function ChipContainer(props) {
  return <Container {...props} />;
}

export default ChipContainer;
