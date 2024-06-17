import { ChangeEvent, useState } from "react";
import { Question } from "../../types/questions";

interface SingleChoiceQuestionProps {
  question: Question;
}

export const SingleChoiceQuestion = ({ question }: SingleChoiceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="text-base">
      <h3>{question.title}</h3>
      {question.options?.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            onChange={handleOptionChange}
            checked={selectedOption === option}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
