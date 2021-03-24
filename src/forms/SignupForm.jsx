import React from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { MainBtn } from "../components/Buttons/Buttons";

const SignupForm = () => {
  return (
    <form className="max-w-screen-sm mt-10 w-full">
      <InputWrapper name="email" label="Email">
        <Input name="email" placeholder="user@example.com" />
      </InputWrapper>

      <InputWrapper name="password" label="Password">
        <Input name="password" type="password" />
      </InputWrapper>

      <InputWrapper name="confirmPassword" label="Confirm Password">
        <Input name="confirmPassword" type="password" />
      </InputWrapper>

      <MainBtn>Sign Up</MainBtn>
    </form>
  );
};

export default SignupForm;
