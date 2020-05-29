import {
  GET_TASKS_START,
  GET_TASKS,
} from "../actions/adminActions";

const initialState = {
  data: [],
  isLoading: false,
  isUpdating: false,
  error: "",
};

// Reducer needs Action & Copy of Current State
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          error: "",
        };
    case GET_TASKS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    default:
      return state;
  }
};

export default adminReducer;
