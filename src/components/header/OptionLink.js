import React from "react";
import { NavLink } from "react-router-dom";

const OptionLink = ({ option, children }) => (
  <NavLink
    exact
    to={option === "home" ? "/" : `/${option}`}
    activeStyle={{
      textDecoration: "none",
      color: "baby-blue",
    }}
  >
    {children}
  </NavLink>
);

export default OptionLink;
