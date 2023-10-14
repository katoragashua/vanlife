import { redirect, Navigate } from "react-router-dom";
import { authState } from "../src/api";

export const requireAuth = async (request) => {
  const pathname = new URL(request.url).pathname;
  const user = await authState();
  console.log(user);
  if (!user) {
    throw redirect(
      `/login?message=You must login first.&redirectTo=${pathname}`
    );
  }
  return null;
};
