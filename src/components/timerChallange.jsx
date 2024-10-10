import React, { useRef, useState } from "react";
import ResultModel from "./ResultModel";

const TimerChallange = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Clear Interval when target Time is Zero
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  // After Close Modal Time Would restart
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  // Create Interval which run every 10 ms
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  // Stop Interval and Open Modal
  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        remTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title} </h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Chalange
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallange;
