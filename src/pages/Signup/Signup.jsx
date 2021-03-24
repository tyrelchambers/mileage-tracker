import React from "react";
import { H1 } from "../../components/Headings/Headings";
import SignupForm from "../../forms/SignupForm";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <H1>Sign up</H1>
      <SignupForm />
    </div>
  );
};

export default Signup;
