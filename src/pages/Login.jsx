import React from "react";
import { Form } from "react-router-dom";
import BtnLarge from "../components/BtnLarge";

const Login = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 pt-4 xl:w-[60%] m-auto ">
        <h3 className="text-center">Sign in to your account.</h3>
        <Form className="flex flex-col gap-8">
          <div className="form-inputs rounded-md border-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="rounded-t-md p-2 py-3 w-full outline-none"
            />
            <hr />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="rounded-b-md p-2 py-3 w-full outline-none"
            />
          </div>
          <BtnLarge text={"Sign in"} />
        </Form>
        <div className="flex gap-1 justify-center">
          <span className="text-black font-semibold">
            Don't have an account?
          </span>
          <span className="text-orange font-semibold">Create one now.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
