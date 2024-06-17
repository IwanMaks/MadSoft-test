import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { QuestionForm } from "./QuestionForm";
import { Timer } from "./Timer";
import { testInfo } from "@/constants";
import { TestContext } from "@/store/test";

export const TestPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [answers, setAnswers] = useState({});

  return (
    <TestContext.Provider value={{ activeStep, setActiveStep, answers, setAnswers }}>
      <div className="min-h-screen min-w-screen flex items-center justify-center px-4">
        <div className="w-full sm:w-3/4 px-2 py-12 sm:px-4 rounded-lg border border-gray-300 bg-gray-100 relative">
          <button
            type="button"
            className="text-primary-500 text-sm absolute top-4 right-4 underline"
            onClick={() => {
              setAnswers({});
              setActiveStep(1);
            }}
          >
            Заново
          </button>
          <div className="flex w-full items-center space-x-3 mb-4">
            <h1 className="text-3xl font-bold">Тестирование</h1>
            {testInfo.organizedByTime && <Timer initTime={testInfo.time || 0} />}
          </div>

          <ProgressBar currentStep={activeStep} />
          <QuestionForm />
        </div>
      </div>
    </TestContext.Provider>
  );
};
