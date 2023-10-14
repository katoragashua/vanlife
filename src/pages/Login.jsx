import React from "react";
import {
  Form,
  useLoaderData,
  useRouteError,
  useNavigate,
  useActionData,
  useNavigation,
  redirect,
  Link,
} from "react-router-dom";
import BtnLarge from "../components/BtnLarge";
import { loginUser } from "../api";
// import { redirect } from "../../utils/mutateResponse";
import { useEffect } from "react";

export const loader = async ({ request }) => {
  const urlMessage = new URL(request.url).searchParams.get("message");
  const redirectUrl =
    new URL(request.url).searchParams?.get("redirectTo") || "/host";
  return { urlMessage, redirectUrl };
};

export const action = async ({ request, params }) => {
  const redirectUrl =
    new URL(request.url).searchParams?.get("redirectTo") || "/host";
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const { email, password } = body;
    const user = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return redirect(redirectUrl);
  } catch (error) {
    return error;
  }
};

const Login = () => {
  const { urlMessage, redirectUrl } = useLoaderData();
  const navigate = useNavigate();

  // useNavigation to track the state/status of our form submission
  const { state } = useNavigation();
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
      <div className="flex flex-col gap-8 pt-12 xl:w-[60%] m-auto ">
        <h3 className="text-center">Sign in to your account.</h3>
        {urlMessage && (
          <span className="text-center font-semibold" style={{ color: "red" }}>
            {urlMessage}
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
          <span className="text-orange font-semibold">
            <Link to={`/signup?${redirectUrl}`}>Create one now.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

// const iPromise = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Take your gift"), ms);
//   });
// };

// iPromise(3000).then((data) => console.log(data));

export default Login;
