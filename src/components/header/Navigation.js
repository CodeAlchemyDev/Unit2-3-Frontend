// Dependancies
import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  return (
    <>
      <nav>
        <Link to="/" className="linkSt">
          Home
        </Link>
        <Link to="volunteer" className="linkSt">
          Volunteers
        </Link>
        <Link
          to="/students"
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
