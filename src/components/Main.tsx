import Start from "./Start";
import Question from "./Question";
import End from "./End";


// context
import { useQuizContext } from "./../context/quizContext";

function Main() {
  const { question , questions } = useQuizContext();

  return (
    <div className="flex flex-col items-center text-center">
      {!question ? (
        <Start />
      ) : questions.length === 0 ? (
        <End />
      ) : (
        <Question question={question} />
      )}
    </div>
  );
}

export default Main;
