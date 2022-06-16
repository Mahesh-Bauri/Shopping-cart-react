import React from "react";
import "./authentication.style.scss";
import SignUp from "../../sign-up-form/SignUp";
import SignIn from "../../sign-in-form/SignIn";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
