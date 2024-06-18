import { QUESTION_TYPES, Question, TestInfo } from "@/types/questions";

export const questions: Question[] = [
  {
    id: "1",
    type: QUESTION_TYPES.SINGLE_CHOICE,
    title: "Что такое React?",
    options: [
      {
        id: "1",
        value: "Библиотека",
      },
      {
        id: "2",
        value: "Фреймворк",
      },
      {
        id: "3",
        value: "Язык",
      },
    ],
  },
  {
    id: "2",
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    title: "Выберите языки программирования:",
    options: [
      {
        id: "1",
        value: "React",
      },
      {
        id: "2",
        value: "PHP",
      },
      {
        id: "3",
        value: "Русский",
      },
    ],
  },
  {
    id: "3",
    type: QUESTION_TYPES.SHORT_ANSWER,
    title: "В каком году был придуман JS?",
  },
  {
    id: "4",
    type: QUESTION_TYPES.LONG_ANSWER,
    title: "Опишите что такое Doker",
  },
];

export const testInfo: TestInfo = {
  id: "1",
  organizedByTime: true,
  time: 300,
  questions: questions,
};
