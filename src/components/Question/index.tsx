import React, { useState } from "react";
import { useQuizContext } from "../quizContext";
import Button from "./nextBtn";

import { triviaQuizzes } from "../data";
interface QuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
    answer: string;
  };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  const { rightAnswers, setRightAnswers, generateQuestion, questions } =
    useQuizContext();

  // state when the answer checked the value will be true to moving to the next question
  const [check, setCheck] = useState(false);

  // get the clicked option value => validate if right the, {setRightAnswers} will set +1
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(e.target.value);
  }

  // button functions => Check Value
  function handleCheck() {
    if (!selectedValue) return;
    if (selectedValue === question.answer) {
      setRightAnswers(rightAnswers + 1);
    }
    setCheck(true);
  }
  // button functions =>  to Go Next Quetion  by generate new one
  function handleButtonClick() {
    if (check && selectedValue !== null) {
      generateQuestion();
      setCheck(false);
      setSelectedValue(null);
      return;
    }
  }

  return (
    <div>
      <p className="text-3xl font-bold text-app-dark-blue mb-4">
        {question.question}
      </p>
      <div className="flex justify-center items-center gap-4 mb-5">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`${
              check
                ? option === question.answer
                  ? "bg-green-400 opacity-65"
                  : "bg-red-400 opacity-65"
                : ""
            } px-5 py-3 border-[1px] border-black rounded-xl ${
              selectedValue === option && !check ? "bg-slate-300" : ""
            } `}
          >
            <input
              className="appearance-none"
              onChange={(e) => handleInputValue(e)}
              type="radio"
              name="option"
              value={option}
              disabled={check}
            />
            {option}
          </label>
        ))}
      </div>

      <Button handleClick={check ? handleButtonClick : handleCheck}>
        {!check ? "Check" : "Go To Next"}
      </Button>

      <div className="mt-5">
        {questions.length + 1}/{triviaQuizzes.length}
      </div>
    </div>
  );
};

export default Question;
