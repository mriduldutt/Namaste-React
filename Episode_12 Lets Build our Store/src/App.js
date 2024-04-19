import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";

// Chunking
// Code splitting
// Dynamic loading
// Lazy loading  == Ondemand loading
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState(null);

  //Authentication Code
  useEffect(() => {
    // Make and API call & send username & password
    const data = {
      name: "Akshay Saini",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <userContext.Provider value={{ loggedInUser: userInfo }}>
      <div className="app">
        <Header />
        <Outlet />

        {/* <Footer /> */}
      </div>
    </userContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route
        path="about"
        element={
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        }
      />
      <Route path="contact" element={<Contact />} />
      <Route
        path="grocery"
        element={
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        }
      />
      <Route path="restraunts/:resID" element={<RestrauntMenu />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<RouterProvider router={router} />);
