import { ChangeEvent, useState } from "react";
import { Question } from "../../types/questions";

interface ShortAnswerQuestionProps {
  question: Question;
}

export const ShortAnswerQuestion = ({ question }: ShortAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="text-base">
      <h3>{question.title}</h3>
      <input
        type="text"
        value={answer}
        onChange={handleChange}
      />
    </div>
  );
};
