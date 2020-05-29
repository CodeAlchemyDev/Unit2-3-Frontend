import {
  GET_STUDENT_DATA_START,
  GET_STUDENT_DATA_SUCCESS,
  GET_STUDENT_DATA_FAIL,
  CREATE_NEW_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../actions/studentActions";

const initialState = {
  data: [],
  isLoading: false,
  isUpdating: false,
  error: "",
};

// Reducer needs Action & Copy of Current State
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_STUDENT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
        error: "",
      };
    case GET_STUDENT_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "oops",
      };
    case CREATE_NEW_STUDENT:
      return {
        ...state,
        student: [...state.student, action.payload],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        student: [...state.student, action.payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        student: [...state.student, action.payload],
      };
    default:
      return state;
  }
};

export default studentReducer;
