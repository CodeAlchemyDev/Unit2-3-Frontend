// // Dependancies
import React, { useState,useEffect } from "react";

import { connect } from "react-redux";
import { createNewStudent } from "../../store/actions/studentActions";
import EyeGrabber from "../EyeGrabber";
import TopNav from "./TopNav";


const Header = (props) => {

    const headerImage = {
        backgroundImage: `url(${props.bgImage})`
    }

  return (
    <header style={headerImage}>

        <TopNav props={props} />

        <EyeGrabber
            title={props.title}
            subTitle={props.subTitle}
            registerClick={props.registerClick}
            bodyClicker={props.bodyClicker}
            buttonText = {props.buttonText}
        />

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
