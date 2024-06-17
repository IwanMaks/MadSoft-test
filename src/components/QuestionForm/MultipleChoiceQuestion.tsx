import { Question } from "@/types/questions";
import { useState } from "react";

interface MultipleChoiceQuestionProps {
  question: Question;
}

export const MultipleChoiceQuestion = ({ question }: MultipleChoiceQuestionProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((opt) => opt !== option) : [...prev, option],
    );
  };

  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-6 text-gray-900">{question.title}</legend>
      <div className="mt-6 space-y-3">
        {question.options?.map((option, index) => (
          <div
            key={"multiple-choice-option-" + index}
            className="flex items-center"
          >
            <input
              id={"multi-" + index}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
              onChange={() => handleOptionChange(option)}
              checked={selectedOptions.includes(option)}
            />
            <label
              htmlFor={"multi-" + index}
              className="ml-3 text-base leading-6 font-medium text-gray-900 cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
