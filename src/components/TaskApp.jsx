import React,{useState} from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";



const TaskApp = ({ someData }) => {
  // NOTE: do not delete `data-testid` key value pair

  const [tasks, setTasks] = useState(someData);

  const handleTaskAdd = (newTask) => {

    if (newTask && !tasks.includes(newTask)) {
      const newTaskData = {
        id: tasks.length,
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskData]);
    }
  };

  const handleDeleteTask = (taskId) => {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    let newUpdatedTasks = tasks.map((el) => {
      if (el.id === updatedTask.id) {
        return updatedTask;
      } else {
       return el;
      }
    }, []);
    setTasks([...newUpdatedTasks]);
  };

  return (
    <div data-cy="task-app" className={styles.container}>
      <div data-testid="task-app" className={styles.taskApp}>
        {/* Header */}
        <TaskHeader tasks={tasks} />
        {/* Add Task */}
        <AddTask handleTaskAdd={handleTaskAdd} />
        {/* Tasks */}
        <div className={styles.taskBody}>
          <Tasks
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleUpdateTask={handleUpdateTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
