import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import volunteerReducer from "./volunteerReducer";
import adminReducer from "./adminReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  dataReducer,
  studentReducer,
  adminReducer,
  volunteerReducer,
});
