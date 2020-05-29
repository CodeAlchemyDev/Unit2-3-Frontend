import { apiAuth } from '../../utils/apiAuth';

export const CREATE_TASK = 'CREATE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL';
export const GET_TASKS_START = 'GET_TASKS_START';

export const getTasks = () => (dispatch) => {
	dispatch({ type: GET_TASKS_START});
	apiAuth()
		.get('/admin/tasks')
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_TASKS, payload: res.data });
		})
		.catch((err) => dispatch({ type: GET_TASKS_FAIL, payload: err }));
};

export const createTask = (tasks) => (dispatch) => {
	dispatch({ type: CREATE_TASK, payload: tasks });
	apiAuth()
	.post("/admin/tasks", tasks)
	.then(res => {
        console.log(res)
        apiAuth()
		.get('/admin/tasks')
		.then((res) => {
			console.log("HEY THIS IS YOUR RES: ", res);
			dispatch({ type: GET_TASKS, payload: res.data });
		})
		.catch((err) => dispatch({ type: GET_TASKS_FAIL, payload: err }));
    })
	.catch(err => console.log(err))

};

export const editTask = (tasks) => (dispatch) => {
	dispatch({ type: EDIT_TASK, payload: tasks });
};

export const deleteTask = (tasks) => (dispatch) => {
	dispatch({ type: DELETE_TASK, payload: tasks });
};