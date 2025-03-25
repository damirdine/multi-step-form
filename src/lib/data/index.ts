import { FormStep } from "../../types";

const getFormSteps = async (): Promise<FormStep[]> => {
  const data = await fetch(
    "https://raw.githubusercontent.com/damirdine/multi-step-form/refs/heads/main/src/lib/data/steps.json"
  );
  return data.json();
};

export default getFormSteps;
