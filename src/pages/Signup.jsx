import React from "react";
import {
  Link,
  useActionData,
  useNavigation,
  Form,
  redirect,
  useLoaderData,
} from "react-router-dom";
import BtnLarge from "../components/BtnLarge";
import { signupUser } from "../api";

// export const loader = async ({ request }) => {
//   const redirectUrl =
//     new URL(request.url).searchParams?.get("redirectTo") || "/host";
//   return { redirectUrl };
// };

export const action = async ({ request, params }) => {
  const redirectUrl =
    new URL(request.url).searchParams?.get("redirectTo") || "/host";
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const { email, password } = body;
    const user = await signupUser({ email, password });
    console.log(user);
    return redirect(redirectUrl);
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

const Signup = () => {
  const { state } = useNavigation();
  const errorMessage = useActionData();
  return (
    <div className="container">
      <div className="flex flex-col gap-8 pt-12 xl:w-[60%] m-auto ">
        <h3 className="text-center">Signup an account.</h3>
        {errorMessage && (
          <span className="text-center font-semibold" style={{ color: "red" }}>
            {errorMessage.split(": ")[1]}
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
          <BtnLarge text={state === "submitting" ? "Signing up" : "Signup"} />
        </Form>
      </div>
    </div>
  );
};

export default Signup;
