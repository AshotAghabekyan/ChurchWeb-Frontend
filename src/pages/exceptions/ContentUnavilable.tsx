import { Typography, Stack } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import PrimaryButton from "../../components/button/PrimaryButton"; // путь подгони под себя

interface SectionErrorProps {
  message?: string;
  onRetry?: () => void;
}

const ContentUnavailable = ({ message, onRetry }: SectionErrorProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={2}
      px={2}
      py={4}
      borderRadius={2}
      width={"100%"}
      height={"100%"}
      bgcolor="rgba(255, 255, 255, 0.6)"
      border="1px dashed rgb(212, 175, 55)"
    >
      <ErrorOutlineIcon sx={{ fontSize: 40, color: "rgb(212, 175, 55)" }} />
      <Typography
        variant="body1"
        color="rgb(63, 67, 89)"
        textAlign="center"
        fontWeight={500}
      >
        {message || "Այս բաժինը անհասանելի է։ Խնդրում ենք փորձել ավելի ուշ։"}
      </Typography>
      {onRetry && (
        <PrimaryButton
          onClick={onRetry}
          startIcon={<RefreshIcon />}
          variant="contained"
          size="small"
        >
          Փորձել կրկին
        </PrimaryButton>
      )}
    </Stack>
  );
};

export default ContentUnavailable;
