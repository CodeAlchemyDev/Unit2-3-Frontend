import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  // const footerStyler = {
  //   backgroundColor: `${props.bgColor}`,
  // };

  return (
    <footer>
      <h4 className="footerLink">faq</h4>
      <h4 className="footerLink">contact</h4>
      <h4 className="footerLink" onClick={props.registerClick}>
        register
      </h4>
      <h4 className="footerLink">admin</h4>
      <h4 className="footerLink">student</h4>
      <h4 className="footerLink">volunteer</h4>
      <Link to="/login" className="footerLink" onClick={props.signInClick}>
        login
      </Link>

      <div className="footerCopyright">&#xA9;2020</div>
    </footer>
  );
}
