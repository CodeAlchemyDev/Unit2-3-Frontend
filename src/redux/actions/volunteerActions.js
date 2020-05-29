import { apiAuth } from '../../utils/apiAuth';

export const GET_VOLUNTEER_DATA_START = 'GET_VOLUNTEER_DATA_START';
export const GET_VOLUNTEER_DATA_SUCCESS = 'GET_VOLUNTEER_DATA_SUCCESS';
export const GET_VOLUNTEER_DATA_FAIL = 'GET_VOLUNTEER_DATA_FAIL';

export const CREATE_NEW_VOLUNTEER = 'CREATE_NEW_VOLUNTEER';
export const UPDATE_VOLUNTEER = 'UPDATE_VOLUNTEER';
export const DELETE_VOLUNTEER = 'DELETE_VOLUNTEER';

export const getVolunteerData = (id) => (dispatch) => {
	dispatch({ type: GET_VOLUNTEER_DATA_START });
	apiAuth()
		.get(`/volunteer/${id}/tasks`)
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_VOLUNTEER_DATA_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: GET_VOLUNTEER_DATA_FAIL, payload: err }));
};

export const createNewVolunteer = (volunteer) => (dispatch) => {
	dispatch({ type: CREATE_NEW_VOLUNTEER, payload: volunteer });
};

export const updateVolunteer = (volunteer) => (dispatch) => {
	dispatch({ type: UPDATE_VOLUNTEER, payload: volunteer });
};

export const deleteVolunteer = (volunteer) => (dispatch) => {
	dispatch({ type: DELETE_VOLUNTEER, payload: volunteer });
};
