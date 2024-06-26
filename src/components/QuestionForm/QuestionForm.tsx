import { questions } from "@/constants";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { ShortAnswerQuestion } from "./ShortAnswerQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";
import { QUESTION_TYPES, Question } from "@/types/questions";
import { LongAnswerQuestion } from "./LongAnswerQuestion";
import { FormEvent, useContext, useEffect, useState } from "react";
import { TestContext } from "@/store/test";
import { TestContextType } from "@/types";
import { validateAnswers } from "@/helpers/validation";
import { CompliteTestModal, Toast } from "../UI";

export const QuestionForm = () => {
  const [showValidationToast, setShowValidationToast] = useState(false);
  const [showCompliteModal, setShowCompliteModal] = useState(false);
  const { activeStep, setActiveStep, answers, setAnswers, setFinished, finished } =
    useContext<TestContextType>(TestContext);

  useEffect(() => {
    const savedIndex = localStorage.getItem("madsoft-test-activeStep");
    const savedAnswers = localStorage.getItem("madsoft-test-answers");
    const savedFinished = localStorage.getItem("madsoft-test-finished");

    if (savedFinished) {
      setFinished(savedFinished.toLowerCase() === "true");
    }

    if (savedIndex) {
      setActiveStep(Number(savedIndex));
    }

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateAnswers(answers, questions[activeStep - 1].id)) {
      if (activeStep < questions.length) {
        setShowValidationToast(false);
        setActiveStep((prev: number) => prev + 1);
        localStorage.setItem("madsoft-test-activeStep", String(activeStep + 1));
      } else {
        if (Object.keys(answers).length === questions.length) {
          setShowValidationToast(false);
          setShowCompliteModal(true);
          setFinished(true);
          localStorage.setItem("madsoft-test-finished", String(true));
        } else {
          setShowValidationToast(true);
        }
      }
    } else {
      setShowValidationToast(true);
    }
  };

  const handlePrev = () => {
    setActiveStep((prev: number) => prev - 1);
    localStorage.setItem("madsoft-test-activeStep", String(activeStep - 1));
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
    <>
      <Toast
        show={showValidationToast}
        setShow={setShowValidationToast}
      />
      <CompliteTestModal
        open={finished || showCompliteModal}
        setOpen={setShowCompliteModal}
      />
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
    </>
  );
};
