import React from "react";
import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign In with Google
      </button>
    </div>
  );
}

export default SignIn;
