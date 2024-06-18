import { TestContextType } from "@/types";
import { createContext } from "react";

export const TestContext = createContext<TestContextType>({
  activeStep: 1,
  setActiveStep: () => {},
  answers: {},
  setAnswers: () => {},
  restartTest: () => {},
  finished: false,
  setFinished: () => {},
});
