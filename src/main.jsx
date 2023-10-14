import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import HostLayout from "./layouts/HostLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans.jsx";
import VanDetails, { loader as vanDetailsLoader } from "./pages/VanDetails.jsx";
import Dashboard, { loader as dashboardLoader } from "./pages/Dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/host/HostVanDetail";
import Details from "./pages/vans/Details";
import Pricing from "./pages/vans/Pricing";
import Photos from "./pages/vans/Photos";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import Signup, {
  action as signupAction,
  // loader as signupLoader,
} from "./pages/Signup";
import { requireAuth } from "../utils/requireAuth";

//For mirage.js
// import { vanServer } from "./server.js";

// if (process.env.NODE_ENV === "development") {
//   vanServer({ environment: "development" });
// }
//or
// import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<RootLayout />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route path={"about"} element={<About />} />
      <Route
        path={"login"}
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"signup"}
        element={<Signup />}
        // loader={signupLoader}
        action={signupAction}
      />
      <Route
        path={"vans"}
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"vans/:id"}
        loader={vanDetailsLoader}
        element={<VanDetails />}
      />
      <Route path={"host"} element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          errorElement={<ErrorPage />}
          loader={dashboardLoader}
        />
        <Route
          path={"income"}
          element={<Income />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route path={"vans"} loader={hostVansLoader} element={<HostVans />} />
        <Route
          path={"vans/:id"}
          loader={hostVanDetailLoader}
          element={<HostVanDetail />}
          errorElement={<ErrorPage />}
        >
          <Route
            index
            element={<Details />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path={"pricing"}
            element={<Pricing />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path={"photos"}
            element={<Photos />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
        </Route>
        <Route
          path={"reviews"}
          element={<Reviews />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
      </Route>
      {/* </Route> */}
      {/* <Route path={"*"} element={<ErrorPage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
