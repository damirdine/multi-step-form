import { useFormSteps } from "../context/useFormSteps";

function Ending() {
  const context = useFormSteps();
  return (
    <div>
      <img
        src={
          "https://raw.githubusercontent.com/damirdine/multi-step-form/refs/heads/main/src/assets/images/icon-thank-you.svg"
        }
        alt="icon thank you"
      />
      <h1>{context?.currentStep?.title}</h1>
      <p>{context?.currentStep?.description}</p>
    </div>
  );
}

export default Ending;
