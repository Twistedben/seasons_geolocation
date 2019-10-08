import React from "react";

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h4>Loading....</h4>
        <h6>Finding your hemispheric location.</h6>
      </div>
    </div>
  );
};

export default Spinner;
