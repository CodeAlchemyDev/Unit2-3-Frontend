import { apiAuth } from "../../utils/apiAuth";

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

export const getStudentData = () => (dispatch) => {
  dispatch({ type: GET_DATA_START });
  apiAuth()
    .get("/")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_DATA_FAIL, payload: err }));
};

// export const createNewStudent = (student) => (dispatch) => {
//   dispatch({ type: CREATE_NEW_STUDENT, payload: student });
// };
