import validate from "../helpers/validateForm";
import React, { useState, useEffect } from "react";

const [formState, setFormState] = useState({});

export default function changeHandler(e) {
  e.persist();
  console.log(e.target.value);
  validate(e);
  setFormState({ ...formState, [e.target.name]: e.target.value });
}
