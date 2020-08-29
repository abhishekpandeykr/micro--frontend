import * as React from "react";

const Advice = (props) => {
  console.log(props);
  return (
    <div className="advice">
      <p>{props.data.slip ? props.data.slip.advice : "Loading..."}</p>
    </div>
  );
};

export default Advice;
