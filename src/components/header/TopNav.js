import cloud from "../../assets/images/cloud.webp";
import Navigation from "./Navigation";
import React from "react";

export default function TopNav(props) {
  return (
    <section className="topNav">
      {/*Left side title in header-nav*/}
      <section className="leftNav">
        <h1 className="textStyler">School in the Cloud</h1>

        {/*Image for School in the cloud logo*/}
        <img src={cloud} alt="School in the Cloud Logo" className="logo" />
      </section>

      {/*Right side of header used for nav links*/}
      <section className="rightNav">
        <Navigation props={props} />
      </section>
    </section>
  );
}
