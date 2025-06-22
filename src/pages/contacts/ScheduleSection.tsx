import {
  Divider,
  List,
  ListItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { PRIMARY_PURPLE, WHITE } from "../../constants/colors";
import { CHURCH_WEEKLY_SCHEDULE } from "../../constants/contacts";
import {
  CONTENT_PADDING,
  MOBILE_CONTENT_PADDING,
} from "../../constants/common";

const Container = styled(Stack)(({ theme }) => ({
  padding: CONTENT_PADDING,
  width: "100%",
  gap: "5%",
  backgroundColor: PRIMARY_PURPLE,
  [theme.breakpoints.down("sm")]: {
    paddingInline: MOBILE_CONTENT_PADDING,
  },
}));

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const StyledListItem = styled(ListItem)({
  display: "flex",
  gap: 8,
  width: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "& > *": {
    textAlign: "left",
    color: WHITE,
  },
});

export default function ChurchSchedules() {
  return (
    <Container>
      <StyledList>
        {CHURCH_WEEKLY_SCHEDULE.map((schedule) => {
          return (
            <StyledListItem>
              <Typography variant="h5">{schedule.title}</Typography>
              {schedule.description && (
                <Typography>{schedule.description}</Typography>
              )}
              <Typography>{schedule.time}</Typography>
              <Divider sx={{ backgroundColor: WHITE, width: "100%" }} />
            </StyledListItem>
          );
        })}
      </StyledList>
    </Container>
  );
}
