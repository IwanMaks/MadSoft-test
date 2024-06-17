import { TestContext } from "@/store/test";
import { Question } from "@/types/questions";
import { ChangeEvent, useContext } from "react";

interface SingleChoiceQuestionProps {
  question: Question;
}

export const SingleChoiceQuestion = ({ question }: SingleChoiceQuestionProps) => {
  const { answers, setAnswers } = useContext(TestContext);

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [question.id]: e.target.value,
      };
    });
  };

  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-6 text-gray-900">{question.title}</legend>
      <div className="mt-4 space-y-3">
        {question.options?.map((option) => (
          <div
            key={"single-choice-option-" + option.id}
            className="flex items-center"
          >
            <input
              id={"single-option-" + option.id + "-question-" + question.id}
              type="radio"
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600 cursor-pointer"
              onChange={handleOptionChange}
              checked={answers[question.id] === option.id}
              value={option.id}
            />
            <label
              htmlFor={"single-option-" + option.id + "-question-" + question.id}
              className="ml-3 block text-base font-medium leading-6 text-gray-900 cursor-pointer"
            >
              {option.value}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
