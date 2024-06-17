interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="text-base">
      <div
        className="text-base"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
