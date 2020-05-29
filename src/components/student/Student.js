import React from "react";
import { updateStudent } from "../../redux/actions/studentActions";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import StudentList from "./StudentList";

const Student = (props) => {
  console.log("I am a Student:", props);
  const { register, handleSubmit } = useForm();

  const onSubmit = (student, e) => {
    console.log("submitted: ", student);
    e.target.reset();
    props.updateStudent(student);
  };
  const deleteStudentAccount = (student, e) => {
    console.log("deleted: ", student);

    e.preventDefault();
    props.deleteStudentAccount(student);
  };

  return (
    <>
      <div clasName="student-info">
        <h2>Your Profile</h2>
      </div>

      <div className="volunteer-list">
        <h3>Choose a Volunteer</h3>
        <StudentList props={props} />
      </div>

      <div className="profile-fields">
        <h3>Update Your Profile</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input
            ref={register}
            type="text"
            name="firstName"
            value={props.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            ref={register}
            type="text"
            name="lastName"
            value={props.lastName}
          />
          <button onClick={handleSubmit}>Update Profile</button>
        </form>
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

export default connect(mapStateToProps, {
  updateStudent,
})(Student);