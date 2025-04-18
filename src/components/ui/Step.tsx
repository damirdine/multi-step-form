import styled from "styled-components";
import { useFormSteps } from "../../context/useFormSteps";

const StepStyled = styled.div`
  display: flex;
  > * {
    color: var(--white);
    font-family: "Ubuntu Bold";
    font-size: 14px;
  }
`;
const NumberStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 2px ${`var(--pastel-blue)`};
  width: 30px;
  height: 30px;
  margin-right: 15px;

  &.is-active {
    background-color: var(--light-blue);
    color: var(--marine-blue);
  }
`;

const P = styled.p`
  color: var(--pastel-blue);
`;
type StepProps = {
  number: number;
  name: string;
};

export default function Step({ number, name }: StepProps) {
  const context = useFormSteps();
  const step = context?.currentStep;
  return (
    <StepStyled key={step?.slug}>
      <NumberStyled className={number === step?.number ? "is-active" : ""}>
        {number}
      </NumberStyled>
      <div>
        <P>STEP {number}</P>
        <h3>{name}</h3>
      </div>
    </StepStyled>
  );
}
