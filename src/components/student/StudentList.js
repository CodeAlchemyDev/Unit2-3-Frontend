import React, { useState, useEffect } from "react";
import { apiAuth } from "../../utils/apiAuth";
import { connect } from "react-redux";

const StudentList = (props) => {
  const [students, setStudents] = useState([]);

  // TODO: Change Endpoint to Proper Data

  useEffect(() => {
    apiAuth()
      .get("/student/view")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((err) => console.log(err, "Can't locate any students"));
  }, []);

  return (
    <>
      <div>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {`${student.firstName} ${student.lastName}`}
            </li>
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
    isUpdating: state.isUpdating,
  };
};

export default connect(mapStateToProps, {})(StudentList);
