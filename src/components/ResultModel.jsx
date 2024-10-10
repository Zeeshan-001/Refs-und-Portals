import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(({ targetTime, remTime, onReset }, ref) => {
  const dialog = useRef();

  // Variable Check if User lost or not
  const userLost = remTime <= 0;

  // Time Formatted
  const formattedRemTime = (remTime / 1000).toFixed(2);

  // Score Remaining
  const score = Math.round((1 - remTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You lost</h2> : <h2>Your Score {score}</h2>}
      <p>
        This target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You Stopped the Timer with
        <strong> {formattedRemTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModel;
