import React, { useState } from "react";
import bgImage from '../assets/images/student2.jpg';



import Header from "./header/Header";
import TopNav from "./header/TopNav";
import SignInForm from "./forms/SignInForm";
import Register from "./forms/Register";
import EyeGrabber from "./EyeGrabber";
import StudentImage from "../assets/images/student2.jpg";

export default function StudentLanding(props){
    console.log(props);
    return(

        <Header
            bgImage = {StudentImage}
            registerClick={props.registerClick}
            registerState={props.registerState}
            setRegisterState={props.setRegisterState}
            signInState={props.signInState}
            setSignInState={props.setSignInState}
            bodyClicker={props.bodyClicker}
            signInClick={props.signInClick}
            title ="Become all you can be!"
            subTitle="or some other inspiring motto, I don't know im sleepy"
            buttonText = "Enroll Now"
        />


            )
}