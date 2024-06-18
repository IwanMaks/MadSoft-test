import { Dispatch, SetStateAction } from "react";

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type TestContextType = {
  activeStep: number;
  setActiveStep: SetStateType<number>;
  answers: Record<string, string | string[]>;
  setAnswers: SetStateType<Record<string, string | string[]>>;
  restartTest: () => void;
  finished: boolean;
  setFinished: SetStateType<boolean>;
};

export type TimerContextType = {
  timeLeft: number;
  setTimeLeft: SetStateType<number>;
};
