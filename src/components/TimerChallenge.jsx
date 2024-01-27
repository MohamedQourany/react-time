import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const [timeRemaining,settimeRemaining] = useState(targetTime*1000)
    const timerActive = timeRemaining > 0 && timeRemaining<targetTime*1000
  const timer = useRef();
  const dialog = useRef()
  const handleStart = () => {
    timer.current = setInterval(() => {
settimeRemaining(prevtimeRemaining=>prevtimeRemaining-10)
    }, 10);
  };
  if (timeRemaining<=0) {
    clearInterval(timer.current)
    dialog.current.open()
}
  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open()
};
const handleReset = ()=>{
    settimeRemaining(targetTime*1000)
}
  return (
    <>
    <ResultModal onReset={handleReset} ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerActive ? handleStop : handleStart}>
          {timerActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerActive ? "active" : undefined}>
        {timerActive ? "Time is running" : "Timer Inactive"}
      </p>
    </section>
    </>
  );
};

export default TimerChallenge;
