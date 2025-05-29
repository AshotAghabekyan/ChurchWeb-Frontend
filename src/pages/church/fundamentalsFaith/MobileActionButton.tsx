import { Box, styled } from "@mui/material";
import PrimaryButton from "../../../components/button/PrimaryButton";
import PrimaryButtonLarge from "../../../components/button/PrimaryButtonLarge";

const Container = styled(Box)({
  marginTop: 4,
  paddingInline: "2rem",
  display: "flex",
  justifyContent: "center",
});

const FixedToggleButton = styled(PrimaryButtonLarge)({
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 999,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

function MobileActionButton(props) {
  const { showAll, setShowAll, bottomButtonRef, hideFixedButton } = props;

  return (
    <>
      <Container>
        <PrimaryButton
          fullWidth
          ref={bottomButtonRef}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Փակել" : "Ավելին"}
        </PrimaryButton>
      </Container>

      {!hideFixedButton && (
        <FixedToggleButton fullWidth onClick={() => setShowAll(!showAll)}>
          {showAll ? "Փակել" : "Ավելին"}
        </FixedToggleButton>
      )}
    </>
  );
}

export default MobileActionButton;
