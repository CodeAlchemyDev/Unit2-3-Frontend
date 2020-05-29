import { GET_VOLUNTEER_DATA_SUCCESS } from "../actions/volunteerActions";

const initialState = {
  taskList: [],
};

export default function volunteerReducer(state = initialState, action) {
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
        isLoading: false,
        taskList: action.payload,
        error: "",
      };

    default:
      return state;
  }
}
