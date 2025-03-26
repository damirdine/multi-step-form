import { createContext, useContext, useState, useEffect } from "react";
import getFormData from "../lib/data";
import { FormEnding, FormStep } from "../types";

type FormStepsContextType = {
  ending: FormEnding | null;
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
  const [ending, setEnding] = useState<FormEnding | null>(null);

  useEffect(() => {
    const fetchSteps = async () => {
      const { steps: stepsData, ending } = await getFormData();
      setSteps(stepsData);
      setCurrentStep(stepsData[0]);
      setEnding(ending);
    };
    fetchSteps();
  }, []);

  const FormStepsContextValue: FormStepsContextType = {
    ending,
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
