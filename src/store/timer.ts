import { TimerContextType } from "@/types";
import { createContext } from "react";

export const TimerContext = createContext<TimerContextType>({
  timeLeft: 0,
  setTimeLeft: () => {},
});
