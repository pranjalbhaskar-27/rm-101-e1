import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import rm from "../../assets/remove.svg"

const Task = ({ task, handleUpdateTask, handleDeleteTask }) => {
  // NOTE: do not delete `data-testid` key value pair

  function toggleTaskStatus() {
    handleUpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const updateTaskCount = (newCount) => {
    if (newCount > 0) {
      handleUpdateTask({
        ...task,
        count: newCount,
      });
    }
  };

  return (
    <li data-testid="task" className={styles.task}>
      <div className={`${styles.taskTitle} ${task.done ? styles.taskDone : ""}`}>
        <input
          type="checkbox"
          data-testid="task-checkbox"
          onChange={toggleTaskStatus}
          checked={task.done}
        />
        <div data-testid="task-text">{task.text}</div>
      </div>
      {/* Counter here */}
      <Counter taskId={task.id} count={task.count} updateTaskCount={updateTaskCount} />
      <button
        data-testid="task-remove-button"
        className={styles.removebtn}
        onClick={() => handleDeleteTask(task.id)}
      >
        {" "}
        <img src={rm} alt="remove button text" />
      </button>
    </li>
  );
};

export default Task;
