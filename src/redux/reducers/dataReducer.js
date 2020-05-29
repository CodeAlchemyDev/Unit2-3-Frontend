import {
  SET_OPTION,
  GET_DATA_START,
  GET_DATA_FAIL,
  GET_DATA_SUCCESS,
} from "../actions/index";

const initialState = {
  data: [],
  isLoading: false,
  isUpdating: false,
  error: "",
};

// Reducer needs Action & Copy of Current State
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...state,
        isLoading: false,
        option: [...state.option, action.payload],
        error: "",
      };
    case GET_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
        error: "",
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "I am GROOT",
      };
    default:
      return state;
  }
};

export default dataReducer;
