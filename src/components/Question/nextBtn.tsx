import React from "react";

interface QuestionBtn {
  handleClick: () => void;
  children: React.ReactNode;
}

const QuestionBtn: React.FC<QuestionBtn> = ({ children, handleClick }) => {
  function click() {
    handleClick();
  }

  return (
    <button
      onClick={click}
      className="BtnStyle"
    >
      {children}
    </button>
  );
};

export default QuestionBtn;
