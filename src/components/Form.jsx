import React from "react";
import FormSignUP from "./FormSignUP";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <span className="close-btn">X</span>
        <div className="form-content-left">
          <img src="./src/assets/rocket.png" alt="left" className="form-img" />
        </div>
        <FormSignUP />
      </div>
    </>
  );
};

export default Form;
