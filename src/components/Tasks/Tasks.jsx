import React from "react";
import { Task } from "../Task";
import empty from "../../assets/empty.svg";
import styles from "./tasks.module.css";

const Tasks = ({ tasks, handleUpdateTask, handleDeleteTask }) => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {tasks.length === 0 && (
          <div data-cy="empty" className={styles.empty}>
            <img src={empty} alt="empty task list" />
            <p>
              <b>Empty list</b>
            </p>
            <p>Add a new task above</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
