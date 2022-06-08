import React from "react";
import styles from "./counter.module.css";
// import { useState } from "react";


const Counter = ({count,updateTaskCount}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button"
      onClick={() => updateTaskCount(count + 1)}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button"onClick={() => updateTaskCount(count - 1)}
      >-</button>
    </div>
  );
};

export default Counter;
