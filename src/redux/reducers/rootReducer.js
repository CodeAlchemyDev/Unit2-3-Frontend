import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import volunteerReducer from "./volunteerReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  studentReducer,
  dataReducer,
  volunteerReducer,
});
