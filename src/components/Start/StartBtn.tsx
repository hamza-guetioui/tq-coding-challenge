import React from "react";

interface StartBtn {
  handleClick: () => void;
  children: React.ReactNode;
  isOff: boolean;
}

const StartBtn: React.FC<StartBtn> = ({ children, handleClick, isOff }) => {
  function Click() {
    handleClick();
  }

  return (
    <div>
      <button
        onClick={Click}
        disabled={isOff}
        className={` ${
          isOff && "bg-app-light-blue"
        } BtnStyle`}
      >
        {children}
      </button>
    </div>
  );
};

export default StartBtn;
