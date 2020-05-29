import React from "react";
import VolunteerTask from "./VolunteerTask";

export default function VolunteerTaskList(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.taskList.map((task) => (
          <VolunteerTask task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
