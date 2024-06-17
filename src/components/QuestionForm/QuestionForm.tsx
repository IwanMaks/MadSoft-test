import { QUESTION_TYPES, Question } from "../../types/questions";
import { LongAnswerQuestion } from "./LongAnswerQuestion";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { ShortAnswerQuestion } from "./ShortAnswerQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";

export const QuestionForm = () => {
  const questions: Question[] = [
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

  return (
    <div>
      {questions.map((question, index) => {
        switch (question.type) {
          case QUESTION_TYPES.SINGLE_CHOICE:
            return (
              <SingleChoiceQuestion
                key={"short-choice-question-" + index}
                question={question}
              />
            );
          case QUESTION_TYPES.MULTIPLE_CHOICE:
            return (
              <MultipleChoiceQuestion
                key={"multiple-choice-question-" + index}
                question={question}
              />
            );
          case QUESTION_TYPES.SHORT_ANSWER:
            return (
              <ShortAnswerQuestion
                key={"short-answer-question-" + index}
                question={question}
              />
            );
          case QUESTION_TYPES.LONG_ANSWER:
            return (
              <LongAnswerQuestion
                key={"long-answer-question-" + index}
                question={question}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
