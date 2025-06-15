import BiographyContent from "./BiograhyText";
import TextEllipsisContainer from "../../../components/textEllipsis/TextEllipsisContainer";

function PastorBiographyMobile() {
  return (
    <TextEllipsisContainer timeout={{ enter: 600, exit: 800 }}>
      <BiographyContent />
    </TextEllipsisContainer>
  );
}

export default PastorBiographyMobile;
