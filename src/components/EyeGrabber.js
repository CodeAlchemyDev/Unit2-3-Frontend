import Text from "./styled/Text";
import Button from "./buttons/Buttons";
import React from "react";

export default function EyeGrabber(props){

    return(

        <section className="headliner" onClick={props.bodyClicker}>

            <>
                <Text
                    text={props.title}
                />

                <h4 className="subTitler">
                    {props.subTitle}
                </h4>

                <Button
                    clickHandler={props.registerClick}
                    text={props.buttonText}
                />
            </>

            )}

        </section>
    )

}

