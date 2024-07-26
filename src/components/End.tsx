import React from "react";
import { useQuizContext } from "./../context/quizContext";

import { triviaQuizzes } from "../data";

const End: React.FC = () => {
  const { inputValue, rightAnswers } = useQuizContext();
  return (
    <div className="text-xl text-app-dark-blue font-bold">
      Game over {inputValue} you answered {rightAnswers}/{triviaQuizzes.length}
    </div>
  );
};
export default End;
