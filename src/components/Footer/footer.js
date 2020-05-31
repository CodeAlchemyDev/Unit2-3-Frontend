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
            <Link to="/admin" className="footerLink">admin</Link>
            <Link to="/students" className="footerLink">student</Link>
            <Link to="/volunteer" className="footerLink">volunteer</Link>
            <h4 className="footerLink" onClick={props.signInClick}>
                login
            </h4>

            <div className="footerCopyright">&#xA9;2020</div>
        </footer>
    );
}