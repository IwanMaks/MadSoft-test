import { QUESTION_TYPES, Question } from "@/types/questions";

export const questions: Question[] = [
  {
    type: QUESTION_TYPES.SINGLE_CHOICE,
    title: "Что такое React?",
    options: ["Библиотека", "Фреймворк", "Язык"],
  },
  {
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    title: "Выберите языки программирования:",
    options: ["React", "PHP", "Русский"],
  },
  {
    type: QUESTION_TYPES.SHORT_ANSWER,
    title: "В каком году был придуман JS?",
  },
  {
    type: QUESTION_TYPES.LONG_ANSWER,
    title: "Опишите что такое Doker",
  },
];
