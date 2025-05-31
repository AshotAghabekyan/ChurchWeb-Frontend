import { Box, Typography, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router";
import PrimaryButton from "../../components/button/PrimaryButton";
import useLayout from "../../hooks/layout/useLayout";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { smallLayout } = useLayout();
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      textAlign="center"
      minHeight={"60vh"}
      py={10}
      px={2}
      bgcolor="rgb(234, 234, 234)"
      borderRadius={3}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "rgb(212, 103, 40)" }} />
      <Typography
        variant={smallLayout ? "h5" : "h3"}
        fontWeight="bold"
        color="rgb(63, 67, 89)"
        mt={2}
      >
        404 — Էջը չի գտնվել
      </Typography>
      <Typography
        variant="body1"
        color="rgb(102, 105, 122)"
        px={smallLayout ? 1 : 6}
      >
        Հնարավոր է, որ էջը տեղափոխվել կամ ջնջվել է:
      </Typography>
      <Box sx={{ width: smallLayout ? "100%" : "40%", padding: "16px" }}>
        <PrimaryButton
          startIcon={<HomeIcon />}
          fullWidth
          onClick={() => navigate("/")}
        >
          Գլխավոր էջ
        </PrimaryButton>
      </Box>
    </Stack>
  );
};

export default NotFoundPage;
