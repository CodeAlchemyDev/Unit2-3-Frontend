import React, { useState, useEffect } from "react";
import { apiAuth } from "../../utils/apiAuth";

const formSubmit = (e, endpoint, method, formState) => {
  e.preventDefault();
  apiAuth()
    .post("/login", { formState })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      //   props.history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
