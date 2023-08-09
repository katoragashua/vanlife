// import { redirect, Navigate } from "react-router-dom";
import {redirect} from "./mutateResponse"

export const requireAuth = async () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect("/login?message=You must login first.")
  }
  return null
};
