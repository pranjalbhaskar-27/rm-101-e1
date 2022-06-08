import React from "react";
import styles from "./addTask.module.css";
import { useState} from "react";

const AddTask = ({handleTaskAdd}) => {
  const [inp,setInp]=useState('')


  
  // NOTE: do not delete `data-testid` key value pair

  const handleClick = () => {
    handleTaskAdd(inp);
    setInp("");
  };
  return (
    <div className={styles.addTask}>
      <input
        data-testid="add-task-input"
        type="text"
        value={inp}
        placeholder="Add task..."
        onChange={(e) => setInp(e.target.value)}
      />
      <button data-testid="add-task-button" onClick={handleClick}>+</button>
    </div>
  );
};

export default AddTask;