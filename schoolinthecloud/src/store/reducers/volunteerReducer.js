import {GET_VOLUNTEER_DATA_SUCCESS} from "../actions/volunteerActions";

const initialState = {
    taskList: []
};

export default function volunteerReducer(state, action) {
    if (!state.volunteers) {
        state = {
            ...state,
            volunteers: initialState,
        };
    }

	switch (action.type) {
		case GET_VOLUNTEER_DATA_SUCCESS:
			return {
                ...state,
                volunteers: {
                    ...state.volunteers,
                    taskList: action.payload
                },
            };

		default:
			return state;
	}
}
