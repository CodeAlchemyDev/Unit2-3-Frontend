// Dependancies
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navigation = (props) => {

  return (
    <>
      <nav>
        <Link to="/" className="linkSt">
          Home
        </Link>
        <Link to="volunteer" className="linkSt">
          Volunteers
        </Link>
        <Link to="/student"
              className="linkSt"
              onClick={props.props.signInClick}
        >
          Students
        </Link>
      </nav>
    </>
  );
};
export default Navigation;
