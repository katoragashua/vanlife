import { redirect } from "react-router-dom";

export const requireAuth = async (request) => {
  const isLoggedIn = false;
  if (!isLoggedIn) throw redirect("/login");
};
