import styled from "styled-components";
import Button from "./ui/Button";
import { useFormSteps } from "../context/useFormSteps";

const ButtonSectionStyled = styled.section<{
  justify?: string;
}>`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  margin-top: 38px;
`;

function ButtonSection() {
  const context = useFormSteps();
  if (!context?.currentStep) {
    return;
  }
  const step = context?.currentStep;
  return (
    <ButtonSectionStyled
      justify={step.number === 1 ? "flex-end" : "space-between"}
    >
      {step.number === 1 || (
        <Button
          onClick={(e) => {
            e.preventDefault();
            context.goToStep(step.number - 1);
          }}
        >
          Go back
        </Button>
      )}
      {context.steps.length !== step.number && (
        <Button
          primary={true}
          onClick={(e) => {
            e.preventDefault();
            context.goToStep(step.number + 1);
          }}
        >
          Next Step
        </Button>
      )}
    </ButtonSectionStyled>
  );
}

export default ButtonSection;
