import { Question } from "@/types/questions";
import { ChangeEvent, useState } from "react";

interface SingleChoiceQuestionProps {
  question: Question;
}

export const SingleChoiceQuestion = ({ question }: SingleChoiceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-6 text-gray-900">{question.title}</legend>
      <div className="mt-6 space-y-3">
        {question.options?.map((option, index) => (
          <div
            key={"single-choice-option-" + index}
            className="flex items-center"
          >
            <input
              id={"single-" + index}
              type="radio"
              className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600 cursor-pointer"
              onChange={handleOptionChange}
              checked={selectedOption === option}
              value={option}
            />
            <label
              htmlFor={"single-" + index}
              className="ml-3 block text-base font-medium leading-6 text-gray-900 cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
