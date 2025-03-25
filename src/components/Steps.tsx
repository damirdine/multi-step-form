import styled from "styled-components";
import Step from "./ui/Step";
import { useFormSteps } from "../context/useFormSteps";

const StepStyled = styled.ul`
  display: grid;
  gap: 25px;
`;

function Steps() {
  const context = useFormSteps()
  if(!context?.steps){
    return <>Noon</>
  }
  return (
    <StepStyled>
      {context.steps.map((el) => (
        <li key={el.number}>
          <Step name={el.slug.toUpperCase()} number={el.number} />
        </li>
      ))}
    </StepStyled>
  );
}

export default Steps;
