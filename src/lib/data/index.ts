import stepsRaw from "./steps.json";
import { FormStep } from "../../types";

const steps: FormStep[] = stepsRaw as FormStep[];

const getFormSteps = async (): Promise<FormStep[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(steps);
    }, 2000);
  });
};

export default getFormSteps;
