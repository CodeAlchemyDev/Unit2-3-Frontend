import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { createTask, getTasks } from "../../redux/actions/adminActions";

// useState for tasks
const Task = (props) => {
    console.log("THESE ARE MY PROPS: ", props)
    const [task, setTask] = useState({
        name: "",
        description: "",
        date: new Date(),
})
        // {
        // "task_id": 16,
        // "task_name": "Zoom Session",
        // "created_by": 2,
        // "assigned_to": 1,
        // "description": "Prepare the PVD and DB Schema",
        // "due_date": "",
        // "completed": 1
        // },

useEffect(() => {
    props.getTasks()
},[props.getTasks])



// handleChange
const handleChange = (e) => {
    setTask({
        ...task, 
        [e.target.name] : e.target.value
    });
};
const handleDate = date => {
    setTask({
        ...task,
        date: date
    })
};
const handleTask = () => {
    const newTask = {
        ...task,
        date: `${task.date}`,
        assigned_to: 1,
        created_by: 2,
    }
    props.createTask(newTask)
    setTask({        
    name: "",
    description: "",
    date: new Date(),})
}

return (
    // MY BUILT OUT LOGIN FORM
    <>
    <div className="registerForm">
        <form>
            <label htmlFor="name" />
            <input className="myinput"
                id="name"
                type="text"
                name="name"
                placeholder="John Smith"
                value={task.name}
                onChange={handleChange}
            />
            <label htmlFor="description" />
            <input className="myinput"
                id="description"
                type="text"
                name="description"
                placeholder="A very important task"
                value={task.description}
                onChange={handleChange}
            />
            <DatePicker
                selected={task.date}
                onChange={handleDate}
             />
        </form>
        <button onClick={handleTask}>Create New Task</button>

    </div>
    <div>
    {props.data.map(data => <div key={data.id}>{data.task_name}</div>)}
    </div>
    </>
);  
};
const mapStateToProps = state => {
    return {
        data: state.adminReducer.data
    }
}
export default connect(mapStateToProps, {createTask, getTasks})(Task);