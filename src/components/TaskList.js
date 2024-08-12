import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="tasks">
      {props.tasks.map(function(task) {
        return (
          <Task 
            key={task.text} 
            text={task.text} 
            category={task.category} 
            onDeleteTask={props.onDeleteTask} 
          />
        );
      })}
    </div>
  );
}

export default TaskList;
