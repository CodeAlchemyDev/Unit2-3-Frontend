import React, { useState, useEffect } from "react";
import * as yup from "yup";

const [errorState, setErrorState] = useState({
  userName: "",
  password: "",
});

// validation on input change
export default function validate(formSchema, e, errorState, setErrorState) {
  yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then((valid) => {
      setErrorState({
        ...errorState,
        [e.target.name]: "",
      });
    })
    .catch((err) => {
      setErrorState({
        ...errorState,
        [e.target.name]: err.errors[0],
      });
    });
}
