// import React from "react";
import { useParams } from "react-router-dom";

function Param(Component) {
  return (props) => <Component {...props} useparam={useParams} />;
}

export default Param;
