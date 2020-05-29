import React, { useState } from "react";
import Header from "../header/Header";
import StudentImage from "../../assets/images/student2.jpg";

export default function StudentLanding(props) {
  console.log(props);
  return (
    <Header
      bgImage={StudentImage}
      registerClick={props.registerClick}
      registerState={props.registerState}
      setRegisterState={props.setRegisterState}
      signInState={props.signInState}
      setSignInState={props.setSignInState}
      bodyClicker={props.bodyClicker}
      signInClick={props.signInClick}
      title="Become all you can be!"
      subTitle="or some other inspiring motto, I don't know im sleepy"
      buttonText="Enroll Now"
    />
  );
}
