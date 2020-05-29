import React from "react";

export default function VolunteerTask(props){
    return (
        <div>
            <h3>Task name : {props.task.task_name}</h3>
            <p>Created by : {props.task.created_by}</p>
            <p>Assigned to : {props.task.assigned_to}</p>
            <p>Description : {props.task.description}</p>
            <p>Due date : {props.task.due_date}</p>
            <p>Completed: {props.task.completed}</p>
        </div>
    );
}