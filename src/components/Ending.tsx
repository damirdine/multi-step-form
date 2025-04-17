import styled from "styled-components";
import { useFormSteps } from "../context/useFormSteps";
import Button from "./ui/Button";

const StyledEnding = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 38px;

  div {
    text-align: center;
    margin: 0px 54px;

    p {
        margin-top: 18px;
        color: var(--cool-gray)
    }
  }
`;

function Ending() {
  const context = useFormSteps();
  return (
    <StyledEnding>
      <img
        src={
          "https://raw.githubusercontent.com/damirdine/multi-step-form/refs/heads/main/src/assets/images/icon-thank-you.svg"
        }
        alt="icon thank you"
      />
      <div>
        <h1>{context?.currentStep?.title}</h1>
        <p>{context?.currentStep?.description}</p>
      </div>

      <Button>Restart</Button>
    </StyledEnding>
  );
}

export default Ending;
