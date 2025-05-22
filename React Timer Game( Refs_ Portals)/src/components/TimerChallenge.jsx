import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialogRef = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    // setRemainingTime(targetTime * 1000);
    dialogRef.current.open();
  }

  function handleReset(){
    setRemainingTime(targetTime*1000) // this makes timer reset to initial on clicking close button rather than when timer is less than 0
  }

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  //   let timer; // if we use a variable here then whenever state changes component reexecutes and when state changes timer of handleStart changes then handleStop gets a different timer value than what was expected. Other way around will be to keep this variable outside of main function so that it is not recreated on very state change cycle. But this poses another problem where if we simultaneously start 2 challenges then the later one overrides the first one and the later one resets the timer according to itself
  function handleStart() {
    // setTimerStarted(true);
    timer.current =
      // setTimeout(() => {
      setInterval(
        () => {
          setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10);
          // setTimerExpired(true);
          // dialogRef.current.showModal(); // but this only works for dialog components
          // dialogRef.current.open(); //this is self defined method using useImperativeHandle in Result component
        },
        //  targetTime * 1000
        10
      );
  }

  function handleStop() {
    // clearTimeout(timer.current);
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  return (
    <>
      <ResultModal targetTime={targetTime} remainingTime={remainingTime} ref={dialogRef} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
