import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import HostLayout from "./layouts/HostLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans.jsx";
import VanDetails from "./pages/VanDetails.jsx";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import Details from "./pages/vans/Details";
import Pricing from "./pages/vans/Pricing";
import Photos from "./pages/vans/Photos";

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
      <Route path={"vans"} element={<Vans />} loader={vansLoader} errorElement={<ErrorPage />} />
      <Route path={"vans/:id"} element={<VanDetails />} />
      <Route path={"host"} element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={"income"} element={<Income />} />
        <Route path={"vans"} element={<HostVans />} />
        <Route path={"vans/:id"} element={<HostVanDetail />} >
          <Route index element={<Details />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"photos"} element={<Photos />} />
        </Route>
        <Route path={"reviews"} element={<Reviews />} />
      </Route>
      <Route path={"*"} element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
