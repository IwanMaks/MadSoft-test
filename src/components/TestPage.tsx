import { ProgressBar } from "./ProgressBar";
import { QuestionForm } from "./QuestionForm";
import { Timer } from "./Timer";

export const TestPage = () => {
  return (
    <div>
      <h1>Тестирование</h1>
      <Timer />
      <ProgressBar
        currentStep={1}
        totalSteps={3}
      />
      <QuestionForm />
    </div>
  );
};
