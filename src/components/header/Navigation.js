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
        <Link
          to="https://ngriffith29.github.io/bwww/index.html"
          className="linkSt"
        >
          About Us
        </Link>
        <Link to="/volunteer" className="linkSt">
          Volunteers
        </Link>
        <Link
          to="/students"
          className="linkSt"
          onClick={props.props.props.signInClick}
        >
          Students
        </Link>
      </nav>
    </>
  );
};
export default Navigation;
