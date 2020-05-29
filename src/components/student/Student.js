// import React, { useState, useEffect } from "react";
// import { apiAuth } from "../utils/apiAuth";
// import { updateStudent } from "../redux/actions/studentActions";
// import { connect } from "react-redux";
// import { useForm } from "react-hook-form";
//
// const Student = (props) => {
//   const [volunteers, setVolunteers] = useState([]);
//
//   useEffect(() => {
//     const id = props.match.params.id;
//
//     // TODO: Change Endpoint to Proper Data
//     apiAuth()
//       .get(`student/view`)
//       .then((response) => {
//         setVolunteers(response.data);
//       })
//       .catch((err) => console.log(err, "Can't find volunteers"));
//   }, [props.match.params.id]);
//
//   console.log("initial:", props);
//
//   const { register, handleSubmit } = useForm();
//
//   const onSubmit = (data, e) => {
//     e.target.reset();
//     props.updateStudent(data);
//   };
//   const deleteStudentAccount = (student, e) => {
//     e.preventDefault();
//     props.deleteStudentAccount(student);
//   };
//
//   return (
//     <>
//       <div clasName="student-info">
//         <h2>Your Profile</h2>
//       </div>
//
//       <div className="volunteer-list">
//         <h3>Choose a Volunteer</h3>
//         {volunteers.map((volunteer) => {
//           return (
//             <li key={volunteer.id}>
//               {`${volunteer.firstName} ${volunteer.lastName}`}
//             </li>
//           );
//         })}
//       </div>
//
//       <div className="profile-fields">
//         <h3>Update Your Profile</h3>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             ref={register}
//             type="text"
//             name="firstName"
//             value={props.firstName}
//           />
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             ref={register}
//             type="text"
//             name="lastName"
//             value={props.lastName}
//           />
//           <button onClick={handleSubmit}>Update Profile</button>
//         </form>
//       </div>
//     </>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     isUpdating: state.isUpdating,
//   };
// };
//
// export default connect(mapStateToProps, {
//   updateStudent,
// })(Student);
