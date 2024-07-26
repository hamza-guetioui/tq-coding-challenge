import React from "react";
import { useQuizContext } from "../quizContext";
import StartBtn from "./StartBtn";

function Start() {

  const { inputValue, setInputValue , generateQuestion } = useQuizContext();

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }


  return (
    <div>
      <h1 className="text-2xl font-bold text-app-dark-blue  mb-4">Quizzical</h1>
      <p className="text-app-light-blue text-light-blue mb-4">
        Answer the questions and test your knowledge!
      </p>

      <input
        className="py-2 px-4  rounded-lg border-[1px] border-app-light-blue mb-4"
        type="text"
        placeholder="What is your name ?"
        value={inputValue}
        onChange={(e) => handleInputValue(e)}
      />
      <StartBtn isOff={!inputValue} handleClick={generateQuestion} >
        Start Quiz
      </StartBtn>
    </div>
  );
}

export default Start;
