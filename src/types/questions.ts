export const QUESTION_TYPES = {
  SINGLE_CHOICE: "single_choice",
  MULTIPLE_CHOICE: "multiple_choice",
  SHORT_ANSWER: "short_answer",
  LONG_ANSWER: "long_answer",
} as const;

export interface Question {
  id: string;
  type: (typeof QUESTION_TYPES)[keyof typeof QUESTION_TYPES];
  title: string;
  options?: Option[];
}

export interface Option {
  id: string;
  value: string;
}

export interface TestInfo {
  id: string;
  organizedByTime: boolean;
  time?: number;
  questions: Question[];
}
