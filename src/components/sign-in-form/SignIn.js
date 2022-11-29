import React, { useState } from "react";
import { SignInContainer, ButtonContainer } from "./sign-in.styles.js";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action.js";
import { selectIsLoading } from "../../store/user/user.selector.js";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      dispatch(emailSignInStart(email, password));

      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          value={email}
          type="email"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          required
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button isLoading={isLoading} type="subimt">
            SIGN IN
          </Button>
          <Button
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
