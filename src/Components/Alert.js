import React from "react";
import AlertContext from "../AlertContext/Alertcontext";
import { useContext } from "react";
const Alert = () => {
    const alertcontext = useContext(AlertContext);
    const {AlertDisp,AlertMsg,AlertType} = alertcontext;
  return (
    <>
      <div className={`alert alert-${AlertType} ${AlertDisp?'':'d-none'}`} role="alert">
        {AlertMsg}
      </div>
    </>
  );
};

export default Alert;
