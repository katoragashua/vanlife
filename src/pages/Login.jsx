import React from "react";
import {
  Form,
  useLoaderData,
  useRouteError,
  useNavigate,
  useActionData,
  useNavigation
} from "react-router-dom";
import BtnLarge from "../components/BtnLarge";
import { loginUser } from "../api";
import { redirect } from "../../utils/mutateResponse";
import { useEffect } from "react";

export const loader = async ({ request }) => {
  const url = new URL(request.url).searchParams.get("message");
  return url;
};

export const action = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const data = await loginUser(body);
    localStorage.setItem("loggedIn", true);
    return redirect("/host");
  } catch (error) {
    return error;
  }
};

const Login = () => {
  const message = useLoaderData();
  const navigate = useNavigate();

  // useNavigation to track the state/status of our form submission
  const {state} = useNavigation();
  console.log(state);
  const errorMessage = useActionData();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const userData = Object.fromEntries(formData);
  //   const data = await loginUser(userData);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("loggedIn");
  //   if (isLoggedIn) {
  //     return navigate("/", { replace: true });
  //   }
  // }, []);

  return (
    <div className="container">
      <div className="flex flex-col gap-8 pt-4 xl:w-[60%] m-auto ">
        <h3 className="text-center">Sign in to your account.</h3>
        {message && (
          <span className="text-center font-semibold" style={{ color: "red" }}>
            {message}
          </span>
        )}
        {errorMessage && (
          <span className="text-center font-semibold" style={{ color: "red" }}>
            {errorMessage.message}
          </span>
        )}
        <Form
          className="flex flex-col gap-8"
          // onSubmit={handleSubmit}
          method="POST"
          replace
        >
          <div className="form-inputs rounded-md border">
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
          <BtnLarge text={state === "submitting" ? "Logging in" : "Log in"} />
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
