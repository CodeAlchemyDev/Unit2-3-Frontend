import React, { useState } from "react";
import * as yup from "yup";
import { apiAuth } from "../../utils/apiAuth";
import Validate from "./Validation";

export default function SignInForm(props) {

  // Set up yup validation schema
  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .required("Please enter your username")
      .min(4, "Username should be longer than 4 characters"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(3, "Password should be longer than 3 characters"),
  });

  // Form state and error state respectively
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
  });

  const [errorState, setErrorState] = useState({
    userName: "",
    password: "",
  });

  const inputChange = (e) => {
    e.persist();
    console.log(e.target.value);
    Validate(formSchema, e, errorState, setErrorState)
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    apiAuth()
      .post("/login", { formState })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        // props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>

      <form onSubmit={formSubmit} className="signInForm">

        <h2 className="signInTitle">Sign In</h2>

        <label htmlFor="userName">

          Username:

          <input
            className="signInInput"
            type="text"
            name="userName"
            id="userName"
            value={formState.userName}
            onChange={inputChange}
          />

        </label>

        {errorState.userName.length > 0 ? (
          <p className="error">{errorState.userName}</p>
        ) : null}

        <label htmlFor="password">

          Password:

          <input
            className="signInInput"
            type="password"
            name="password"
            id="password"
            value={formState.password}
            onChange={inputChange}
          />

        </label>

        {errorState.password.length > 0 ? (
          <p className="error">{errorState.password}</p>
        ) : null}

        <button type="submit">Login</button>

        <p className="newUserLink">New User?

          <span
            className='subLink'
            onClick={props.registerClick}>

          Click here to get started!

        </span>

        </p>

      </form>

    </>

  );

}
