import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let unCompletedTask = tasks.filter((task) => !task.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      You have<b data-testid="header-remaining-task">
        {" "}
        {unCompletedTask}{" "}
      </b>of <b data-testid="header-total-task">{totalTask}</b> tasks remaining
    </div>
  );
};

export default TaskHeader;
