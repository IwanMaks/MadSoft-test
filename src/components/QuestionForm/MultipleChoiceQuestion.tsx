import { TestContext } from "@/store/test";
import { Question } from "@/types/questions";
import { useContext } from "react";

interface MultipleChoiceQuestionProps {
  question: Question;
}

export const MultipleChoiceQuestion = ({ question }: MultipleChoiceQuestionProps) => {
  const { answers, setAnswers } = useContext(TestContext);

  const handleOptionChange = (optionId: string) => {
    setAnswers((prev) => {
      const prevQuestion = prev[question.id];
      const parsedArray: string[] = Array.isArray(prevQuestion) ? prevQuestion : [];
      return {
        ...prev,
        [question.id]: parsedArray.includes(optionId)
          ? parsedArray.filter((opt) => opt !== optionId)
          : [...parsedArray, optionId],
      };
    });
  };

  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-6 text-gray-900">{question.title}</legend>
      <div className="mt-4 space-y-3">
        {question.options?.map((option) => (
          <div
            key={"multiple-choice-option-" + option.id}
            className="flex items-center"
          >
            <input
              id={"multi-choice-" + option.id + "-question-" + question.id}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
              onChange={() => handleOptionChange(option.id)}
              checked={answers[question.id]?.includes(option.id)}
            />
            <label
              htmlFor={"multi-choice-" + option.id + "-question-" + question.id}
              className="ml-3 text-base leading-6 font-medium text-gray-900 cursor-pointer"
            >
              {option.value}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
