import React, { useState, useEffect } from "react";
import { apiAuth } from "../../utils/apiAuth";
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
      <div>
        {volunteers.map((volunteer) => {
          return (
            <li key={volunteer.id}>
              {`${volunteer.firstName} ${volunteer.lastName}`}
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
