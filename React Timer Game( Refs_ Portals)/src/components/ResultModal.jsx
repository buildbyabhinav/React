import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = ({ targetTime, ref, remainingTime , onReset}) => {
  const dialogRef = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime/1000).toFixed(2);
  const score = Math.round((1- remainingTime/(targetTime*1000))*100)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" 
    // ref={ref}
    ref={dialogRef}
    onClose={onReset}
    >
      {userLost &&<h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong> {formattedRemainingTime}seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
};

export default ResultModal;
// earlier forwardRef was used to forward ref as a prop
