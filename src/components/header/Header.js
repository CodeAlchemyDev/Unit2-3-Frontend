// // Dependancies
import React, { useState, useEffect } from "react";
import cloud from "../../assets/images/cloud.webp";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { createNewStudent } from "../../redux/actions/studentActions";

// Import Styled Components
import Button from "../buttons/Buttons";
import Text from "../styled/Text";
import Image from "../styled/Image";
import SignInForm from "../forms/SignInForm";
import Register from "../forms/Register.js";

const Header = (props) => {
  return (
    <header>
      <section className="topNav">
        {/*Left side title in header-nav*/}
        <section className="leftNav">
          <h1 className="textStyler">School in the Cloud</h1>

          {/*Image for School in the cloud logo*/}
          <Image
            url={cloud}
            margin="auto 0 auto 10px"
            height="40px"
            width="50px"
          />
        </section>

        {/*Right side of header used for nav links*/}
        {/* Added Navigation component for routing*/}
        <section className="rightNav">
          <Navigation props={props} />
        </section>
      </section>

      <section className="headliner" onClick={props.bodyClicker}>
        {/*If signin or register state is true will remove h1 text and subtext and*/}
        {/*mount signin or register window*/}
        {props.signInState && !props.registerState ? (
          <SignInForm registerClick={props.registerClick} />
        ) : !props.signInState && props.registerState ? (
          <Register />
        ) : (
          <>
            <Text text="Educational Mentoring Service for children who need it most " />

            <h4 className="subTitler">
              Our hope is to lighten the burden of overworked teachers and
              parents
            </h4>

            <Button
              clickHandler={props.registerClick}
              text="Get Started!"
            ></Button>
          </>
        )}
      </section>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoading: state.isLoading,
    isUpdating: state.isUpdating,
    data: state.data,
  };
};
export default connect(mapStateToProps, { createNewStudent })(Header);
