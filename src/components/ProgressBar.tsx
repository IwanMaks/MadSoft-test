import { questions } from "@/constants";

interface ProgressBarProps {
  currentStep: number;
}

export const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const totalSteps = questions.length;

  return (
    <div aria-label="Progress">
      <ol
        role="list"
        className="space-x-2 flex"
      >
        {Array(totalSteps)
          .fill(1)
          .map((_, i) => (
            <li
              key={"questions-step-" + i}
              className="flex-1"
            >
              {i + 1 < currentStep ? (
                <div className="border-primary-600 py-2 border-l-0 border-t-4 pb-0 pl-0 pt-4" />
              ) : i + 1 === currentStep ? (
                <div
                  className="border-primary-600 py-2 border-l-0 border-t-4 pb-0 pl-0 pt-4"
                  aria-current="step"
                />
              ) : (
                <div className="border-gray-400 py-2 border-l-0 border-t-4 pb-0 pl-0 pt-4" />
              )}
            </li>
          ))}
      </ol>
    </div>
  );
};
