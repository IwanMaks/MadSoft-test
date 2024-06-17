import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { QuestionForm } from "./QuestionForm";
import { Timer } from "./Timer";

export const TestPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center px-4">
      <div className="w-full sm:w-3/4 px-2 py-12 sm:px-4 rounded-lg border border-gray-300 bg-gray-100">
        <div className="flex w-full items-center space-x-3 mb-4">
          <h1 className="text-3xl font-bold">Тестирование</h1>
          <Timer />
        </div>

        <ProgressBar currentStep={activeStep} />
        <QuestionForm
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  );
};
