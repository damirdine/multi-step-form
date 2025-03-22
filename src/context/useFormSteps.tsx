import { createContext, useContext, useState, useEffect } from "react";
import getFormSteps from "../lib/data";
import { FormStep } from "../types";

type FormStepsContextType = {
  steps: FormStep[];
  currentStep: FormStep | null;
  setCurrentStep: (step: FormStep | null) => void;
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
  }, [steps]);

  const FormStepsContextValue: FormStepsContextType = {
    steps,
    currentStep,
    setCurrentStep,
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
