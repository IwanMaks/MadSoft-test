import { useState } from "react";
import { Question } from "../../types/questions";

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
    <div className="text-base">
      <h3>{question.title}</h3>
      {question.options?.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option}
            onChange={() => handleOptionChange(option)}
            checked={selectedOptions.includes(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
