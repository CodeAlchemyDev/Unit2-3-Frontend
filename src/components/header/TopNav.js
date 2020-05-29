import Image from "../styled/Image";
import cloud from "../../assets/images/cloud.webp";
import Navigation from "./Navigation";
import React from "react";

export default function TopNav(props){

    return(

        <section className="topNav">
            {/*Left side title in header-nav*/}
            <section className="leftNav">
                <h1 className="textStyler">School in the Cloud</h1>

                {/*Image for School in the cloud logo*/}
                <Image url={cloud} margin="auto 0 auto 10px" height="40px" width="50px" />
            </section>

            {/*Right side of header used for nav links*/}
            {/* Added Navigation component for routing*/}
            <section className="rightNav">
                <Navigation props={props}/>
            </section>
        </section>

    )

}

