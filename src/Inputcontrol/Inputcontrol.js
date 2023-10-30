import React from "react";

import "./Inputcontrol.css";

function Inputcontrol(props) {
  return (
    <div className="container">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default Inputcontrol;
