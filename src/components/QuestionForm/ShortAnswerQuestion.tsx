import { Question } from "@/types/questions";
import { ChangeEvent, useState } from "react";

interface ShortAnswerQuestionProps {
  question: Question;
}

export const ShortAnswerQuestion = ({ question }: ShortAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <fieldset>
      <label
        htmlFor="short-answer"
        className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer"
      >
        {question.title}
      </label>
      <div className="mt-6">
        <input
          type="text"
          id="short-answer"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base sm:leading-6"
          placeholder="Ваш ответ..."
          value={answer}
          onChange={handleChange}
        />
      </div>
    </fieldset>
  );
};
