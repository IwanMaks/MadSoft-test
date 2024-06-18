import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { QuestionForm } from "./QuestionForm";
import { Timer } from "./Timer";
import { testInfo } from "@/constants";
import { TestContext } from "@/store/test";

export const TestPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const savedTime = localStorage.getItem("madsoft-test-timeLeft");
    return savedTime ? Number(savedTime) : testInfo.time || 0;
  });

  const restartTest = () => {
    setAnswers({});
    setActiveStep(1);
    setTimeLeft(testInfo.organizedByTime ? testInfo.time || 0 : 0);
    localStorage.setItem("madsoft-test-activeStep", String(1));
    localStorage.setItem("madsoft-test-answers", JSON.stringify({}));
    localStorage.setItem(
      "madsoft-test-timeLeft",
      String(testInfo.organizedByTime ? testInfo.time : 0),
    );
  };

  return (
    <TestContext.Provider
      value={{ activeStep, setActiveStep, answers, setAnswers, setTimeLeft, timeLeft }}
    >
      <div className="min-h-screen min-w-screen flex items-center justify-center px-4">
        <div className="w-full sm:w-3/4 px-2 py-12 sm:px-4 rounded-lg border border-gray-300 bg-gray-100 relative">
          {testInfo.organizedByTime && timeLeft === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-3">
              <h1 className="text-2xl">Время вышло 😢😢</h1>
              <button
                type="button"
                onClick={restartTest}
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Начать заново
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                className="text-primary-500 text-sm absolute top-4 right-4 underline"
                onClick={restartTest}
              >
                Заново
              </button>
              <div className="flex w-full items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold">Тестирование</h1>
                {testInfo.organizedByTime && (
                  <Timer
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
                  />
                )}
              </div>

              <ProgressBar currentStep={activeStep} />
              <QuestionForm />
            </>
          )}
        </div>
      </div>
    </TestContext.Provider>
  );
};
