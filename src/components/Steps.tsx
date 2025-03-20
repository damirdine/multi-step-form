import styled from "styled-components";
import Step from "./ui/Step";

const StepStyled = styled.ul`
  display: grid;
  gap: 25px;
`;
function Steps() {
  const steps = [
    { number: 1, name: "Your info" },
    { number: 2, name: "Select plan" },
    { number: 3, name: "Add-ons" },
    { number: 4, name: "Summary" },
  ];
  return (
    <StepStyled>
      {steps.map((el) => (
        <li key={el.number}>
          <Step name={el.name.toUpperCase()} number={el.number} />
        </li>
      ))}
    </StepStyled>
  );
}

export default Steps;
