import React from 'react';
import Header from "../header/Header";
import Tutor from '../../assets/images/Tutor.jpg';
import StudentImage from "../../assets/images/student2.jpg";

export default function VolunteerLanding(props){

    return(

        <>

            <Header
                bgImage={Tutor}
                registerClick={props.registerClick}
                registerState={props.registerState}
                setRegisterState={props.setRegisterState}
                signInState={props.signInState}
                setSignInState={props.setSignInState}
                bodyClicker={props.bodyClicker}
                signInClick={props.signInClick}
                title="Join our Volunteer team!"
                subTitle="Help today's students create a better tomorrow"
                buttonText="Enroll Now"
            />

        </>

    )
}