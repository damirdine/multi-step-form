import { createContext, useContext, useState, useEffect } from "react";
import getFormSteps from "../lib/data";
import { FormStep } from "../types";

type FormStepsContextType = {
  steps: FormStep[];
  currentStep: FormStep | null;
  setCurrentStep: (step: FormStep | null) => void;
  goToStep: (num: number) => void;
};

const FormStepsContext = createContext<FormStepsContextType | null>(null);

export function FormStepsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [steps, setSteps] = useState<FormStep[]>([]);
  const [currentStep, setCurrentStep] = useState<FormStep | null>(null);

  useEffect(() => {
    const fetchSteps = async () => {
      const stepsData: FormStep[] = await getFormSteps();
      setSteps(stepsData);
      setCurrentStep(stepsData[0]);
    };
    fetchSteps();
  }, []);

  const FormStepsContextValue: FormStepsContextType = {
    steps,
    currentStep,
    setCurrentStep,
    goToStep(num) {
      const newStep = steps?.find((el) => el?.number === num);
      if (newStep) {
        return setCurrentStep(newStep);
      }
    },
  };

  return (
    <FormStepsContext.Provider value={FormStepsContextValue}>
      {children}
    </FormStepsContext.Provider>
  );
}

export const useFormSteps = () => {
  return useContext(FormStepsContext);
};
