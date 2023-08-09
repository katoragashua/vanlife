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
import Dashboard from "./pages/Dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/host/HostVanDetail";
import Details from "./pages/vans/Details";
import Pricing from "./pages/vans/Pricing";
import Photos from "./pages/vans/Photos";
import Login from "./pages/Login";
import { requireAuth } from "../utils/requireAuth";
import AuthRequired from "./AuthRequired";

// import { vanServer } from "./server.js";

// if (process.env.NODE_ENV === "development") {
//   vanServer({ environment: "development" });
// }

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={"about"} element={<About />} />
      <Route path={"login"} element={<Login />} />
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
      {/* <Route element={<AuthRequired />}> */}
      <Route path={"host"} element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
               return await requireAuth();
            }}
        />
        <Route path={"income"} element={<Income />} />
        <Route path={"vans"} loader={hostVansLoader} element={<HostVans />} />
        <Route
          path={"vans/:id"}
          loader={hostVanDetailLoader}
          element={<HostVanDetail />}
        >
          <Route index element={<Details />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"photos"} element={<Photos />} />
        </Route>
        <Route path={"reviews"} element={<Reviews />} />
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
