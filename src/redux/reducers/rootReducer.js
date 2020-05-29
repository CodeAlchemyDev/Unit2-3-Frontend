import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import dataReducer from "./dataReducer";

export default combineReducers({ studentReducer, dataReducer });
