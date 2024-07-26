import React, { createContext, useContext, useState } from "react";
import { triviaQuizzes } from "./data";

interface QuizContextProviderProp {
  children: React.ReactNode;
}

interface QuestionType {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface ContextTypes {
  inputValue: string;
  setInputValue: (value: string) => void;
  rightAnswers: number;
  setRightAnswers: (value: number) => void;
  questions: QuestionType[];
  question: QuestionType | null;
  generateQuestion: () => void;
}

const quizContext = createContext<ContextTypes | undefined>(undefined);

// Provider component
const QuizContextProvider: React.FC<QuizContextProviderProp> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<QuestionType[]>(triviaQuizzes);
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");

  // Function to generate a random question
  function generateQuestion() {
    if (questions.length === 0) {
      setQuestion(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
    setQuestions((prevQuestions) =>
      prevQuestions.filter((_, index) => index !== randomIndex)
    );
  }

  return (
    <quizContext.Provider
      value={{
        inputValue,
        setInputValue,
        rightAnswers,
        setRightAnswers,
        question,
        generateQuestion,
        questions,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export default QuizContextProvider;

// Custom hook to use the context
export const useQuizContext = () => {
  const context = useContext(quizContext);
  if (context === undefined) {
    throw new Error("usequizContext must be used within a quizContextProvider");
  }
  return context;
};
