import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h2>{props.activity}</h2>
        <h3>{props.message}</h3>
      </div>
    </div>
  );
};

// If no prop value was passed in other component, these defaults are used
Spinner.defaultProps = {
  activity: "Loading...",
  message: "Please wait"
};

export default Spinner;
