import React from "react";
import { useSelector } from "react-redux";

export default function VolunteerTask(props) {
  const tasks = useSelector((state) => state.tasksList[props.id]);

  return (
    <div>
      <h3>Task name : {tasks.task_name}</h3>
      <p>Created by : {tasks.created_by}</p>
      <p>Assigned to : {tasks.assigned_to}</p>
      <p>Description : {tasks.description}</p>
      <p>Due date : {tasks.due_date}</p>
      <p>Completed: {tasks.completed}</p>
    </div>
  );
}
