import React from "react";
import Header from "../header/Header";
import Student from "./Student";

export default function StudentLanding(props) {
  return (
    <div id="student">
      <Student props={props} />
    </div>
  );
}
