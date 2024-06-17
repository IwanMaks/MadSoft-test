import { TestContext } from "@/store/test";
import { Question } from "@/types/questions";
import { ChangeEvent, useContext } from "react";

interface ShortAnswerQuestionProps {
  question: Question;
}

export const ShortAnswerQuestion = ({ question }: ShortAnswerQuestionProps) => {
  const { answers, setAnswers } = useContext(TestContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [question.id]: e.target.value,
      };
    });
  };

  return (
    <fieldset>
      <label
        htmlFor="short-answer"
        className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer"
      >
        {question.title}
      </label>
      <div className="mt-4">
        <input
          type="text"
          id="short-answer"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base sm:leading-6"
          placeholder="Ваш ответ..."
          value={answers[question.id] || ""}
          onChange={handleChange}
        />
      </div>
    </fieldset>
  );
};
