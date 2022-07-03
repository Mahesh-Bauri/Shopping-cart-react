import React from "react";
import "./authentication.style.js";
import SignUp from "../../sign-up-form/SignUp";
import SignIn from "../../sign-in-form/SignIn";
import { AuthenticationContainer } from "./authentication.style.js";

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}

export default Authentication;
