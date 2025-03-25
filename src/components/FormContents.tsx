import styled from "styled-components";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useFormSteps } from "../context/useFormSteps";

const StyledFormContents = styled.div`
  padding: 24px 64px;
`;

const H2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: var(--marine-blue);
  margin-bottom: 8px;
`;

const P = styled.p`
  margin-bottom: 25px;
  font-size: 15px;
  color: var(--cool-gray);
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

function FormContents() {
  const context = useFormSteps();
  if (!context?.currentStep) {
    return;
  }
  const step = context?.currentStep;
  return (
    <StyledFormContents>
      <H2>{step.title}</H2>
      <P>{step.description}</P>

      {step.inputs.map((el) => (
        <Input
          key={el.label}
          label={el.label}
          type={el.type}
          placeholder={el.placeholder}
        />
      ))}
      <ButtonSection>
        {step.number === 1 || <Button>Go back</Button>}
        <Button primary={true}>Next Step</Button>
      </ButtonSection>
    </StyledFormContents>
  );
}

export default FormContents;
