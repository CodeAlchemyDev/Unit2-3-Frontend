import React, { useState } from "react";

// useState for tasks
const Task = (props) => {
	const [task, setTask] = useState({
		Task: {
			Name: "",
            Date: "",
            Time: "",
		},
    })


// handleChange
const handleChange = (e) => {
    setTask({
        Task: {
            ...task.Task,
            [e.target.name]: e.target.value,
        },
    });
};

return (
    // MY BUILT OUT LOGIN FORM
    <div className="registerForm">
        <form>
            <input className="myinput"
                type="text"
                name="Name"
                placeholder="John Smith"
                value={task.Task.Name}
                onChange={handleChange}
            />
            <input className="myinput"
                type="date"
                name="Date"
                placeholder="01/01/2021"
                value={task.Task.Date}
                onChange={handleChange}
            />
            <input className="myinput"
                type="time"
                name="Time"
                placeholder="09:00"
                value={task.Task.Time}
                onChange={handleChange}
                min="06:00"
                max="24:00" 
                required 
            />
        </form>
    </div>
);  
};

export default Task;