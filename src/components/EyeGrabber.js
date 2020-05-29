import React from "react";

export default function EyeGrabber(props) {
  return (
    <section className="headliner" onClick={props.bodyClicker}>
      <div className="titler">{props.title}</div>

      <h4 className="subTitler">{props.subTitle}</h4>

      <button onClick={props.registerClick}>{props.buttonText}</button>
    </section>
  );
}
