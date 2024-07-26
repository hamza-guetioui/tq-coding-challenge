

import Main from "./components/Main"
import QuizContextProvider from "./context/quizContext";

function App() {
  return <div className="flex justify-center items-center min-w-full min-h-screen">
     <QuizContextProvider>
      <Main/>
     </QuizContextProvider>
    

  </div>;
}

export default App;
