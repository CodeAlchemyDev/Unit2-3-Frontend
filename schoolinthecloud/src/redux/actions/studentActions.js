import { apiAuth } from "../../utils/apiAuth";

export const GET_STUDENT_DATA_START = "GET_DATA_START";
export const GET_STUDENT_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_STUDENT_DATA_FAIL = "GET_DATA_FAIL";

export const CREATE_NEW_STUDENT = "CREATE_NEW_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";

export const getStudentData = () => (dispatch) => {
  dispatch({ type: GET_STUDENT_DATA_START });
  apiAuth()
    .get("/student")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_STUDENT_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_STUDENT_DATA_FAIL, payload: err }));
};

export const createNewStudent = (student) => (dispatch) => {
  dispatch({ type: CREATE_NEW_STUDENT, payload: student });
};

export const updateStudent = (student) => (dispatch) => {
  dispatch({ type: UPDATE_STUDENT, payload: student });
};

export const deleteStudent = (student) => (dispatch) => {
  dispatch({ type: DELETE_STUDENT, payload: student });
};
