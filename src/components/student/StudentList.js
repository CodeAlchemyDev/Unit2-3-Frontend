import React, { useState, useEffect } from "react";
import { apiAuth, authHeader } from "../../utils/apiAuth";
import { connect } from "react-redux";

const StudentList = (props) => {
  const [volunteers, setVolunteers] = useState([]);

  // TODO: Change Endpoint to Proper Data

  useEffect(() => {
    apiAuth()
      .get("/student/view")
      .then((res) => {
        console.log(res);
        setVolunteers(res.data);
      })
      .catch((err) => console.log(err, "Can't locate any volunteers"));
  }, []);

  return (
    <>
      <h3>Available Volunteers</h3>

      <ul>
        {volunteers.map((volunteer) => {
          return (
            <li key={volunteer.volunteer_id}>
              {`${volunteer.volunteer_firstName} ${volunteer.volunteer_lastName}`}
            </li>
          );
        })}
      </ul>
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
