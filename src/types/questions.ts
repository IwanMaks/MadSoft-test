export const QUESTION_TYPES = {
  SINGLE_CHOICE: "single_choice",
  MULTIPLE_CHOICE: "multiple_choice",
  SHORT_ANSWER: "short_answer",
  LONG_ANSWER: "long_answer",
} as const;

export interface Question {
  type: (typeof QUESTION_TYPES)[keyof typeof QUESTION_TYPES];
  title: string;
  options?: string[];
}
