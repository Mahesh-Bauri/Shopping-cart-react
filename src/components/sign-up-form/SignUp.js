import React, { useState } from "react";
import { SignUpContainer } from "./sign-up.style.js";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(
    defaultFormFields
  );
  const { displayName, email, password, confirmPassword } =
    formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(
          "uer creation encountered an error",
          error
        );
      }
    }
    resetFields();
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
        />
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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
        />
        <Button type="subimt">Submit</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
