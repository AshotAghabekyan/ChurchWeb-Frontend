import { Box, Typography, Stack, Dialog } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import HomeIcon from "@mui/icons-material/Home";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useLocation, useNavigate } from "react-router";
import useLayout from "../../hooks/layout/useLayout";
import { useState } from "react";
import { ROOT_PAGE } from "../../constants/pages";

const ServerErrorPage = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const { smallLayout } = useLayout();
  const [open, setOpen] = useState(true);
  

  return (
    <Dialog open={open} fullScreen>
      <Stack
        spacing={smallLayout ? 4 : 6}
        textAlign="center"
        alignItems="center"
        minHeight={"100%"}
        py={smallLayout ? 6 : 10}
        px={2}
        bgcolor="rgb(234, 234, 234)"
      >
        <ReportProblemIcon
          sx={{
            fontSize: smallLayout ? 60 : 80,
            color: "rgb(212, 175, 55)",
          }}
        />
        <Typography
          variant={smallLayout ? "h5" : "h3"}
          fontWeight="bold"
          color="rgb(63, 67, 89)"
        >
          500 — Վայ, ինչ-որ բան սխալ գնաց
        </Typography>
        <Typography
          variant="body1"
          color="rgb(102, 105, 122)"
          px={smallLayout ? 1 : 6}
        >
          Մեզ մոտ ինչ-որ բան սխալ է գնացել։ <br />
          Մենք արդեն աշխատում ենք խնդիրը լուծելու վրա։
        </Typography>
        {currentLocation.pathname !== ROOT_PAGE && (
          <Box sx={{ width: smallLayout ? "100%" : "40%", padding: "16px" }}>
            <PrimaryButton
              startIcon={<HomeIcon />}
              fullWidth
              onClick={() => {
                setOpen(false);
                navigate("/");
              }}
            >
              Գլխավոր էջ
            </PrimaryButton>
          </Box>
        )}
      </Stack>
    </Dialog>
  );
};

export default ServerErrorPage;
