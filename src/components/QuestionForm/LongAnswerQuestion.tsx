import { ChangeEvent, useState } from "react";
import { Question } from "../../types/questions";

interface LongAnswerQuestionProps {
  question: Question;
}

export const LongAnswerQuestion = ({ question }: LongAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="text-base">
      <h3>{question.title}</h3>
      <textarea
        value={answer}
        onChange={handleChange}
      />
    </div>
  );
};
