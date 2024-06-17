import { questions } from "@/constants";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { ShortAnswerQuestion } from "./ShortAnswerQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";
import { QUESTION_TYPES, Question } from "@/types/questions";
import { LongAnswerQuestion } from "./LongAnswerQuestion";
import { FormEvent, useContext, useEffect } from "react";
import { TestContext } from "@/store/test";
import { TestContextType } from "@/types";
import { validateAnswers } from "@/helpers/validation";

export const QuestionForm = () => {
  const { activeStep, setActiveStep, answers, setAnswers } =
    useContext<TestContextType>(TestContext);

  useEffect(() => {
    const savedIndex = localStorage.getItem("currentQuestionIndex");
    const savedAnswers = localStorage.getItem("answers");

    if (savedIndex) {
      setActiveStep(Number(savedIndex));
    }

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("madsoft-test-activeStep", String(activeStep - 1));
    localStorage.setItem("madsoft-test-answers", JSON.stringify(answers));
  }, [activeStep, answers]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateAnswers(answers, questions[activeStep - 1].id)) {
      if (activeStep < questions.length) {
        setActiveStep((prev: number) => prev + 1);
      } else {
        if (Object.keys(answers).length === questions.length) {
          alert("Ура, вы тест закончили");
        } else {
          alert("Вы на что-то не ответили");
        }
      }
    } else {
      alert("Нужно ответить на вопрос");
    }
  };

  const handlePrev = () => {
    setActiveStep((prev: number) => prev - 1);
  };

  const renderQuestion = (question: Question, index: number) => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderQuestion(questions[activeStep - 1], activeStep - 1)}
      <div className="w-full flex items-center justify-end space-x-4 mt-4">
        {activeStep !== 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Назад
          </button>
        )}
        <button
          type="submit"
          className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          {activeStep === questions.length ? "Завершить" : "Ответить"}
        </button>
      </div>
    </form>
  );
};
