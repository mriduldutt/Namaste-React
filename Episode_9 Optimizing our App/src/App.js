import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,Route
} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";


// Chunking
// Code splitting
// Dynamic loading
// Lazy loading  == Ondemand loading
const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

      {/* <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />} >
      <Route index element={<Body />} />
      <Route path="about" element={<Suspense fallback={<Shimmer />}><About /></Suspense>} />
      <Route path="contact" element={<Contact />} />
      <Route path="grocery" element={<Suspense fallback={<Shimmer />}><Grocery /></Suspense>} />
      <Route path="restraunts/:resID" element={<RestrauntMenu />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<RouterProvider router={router} />);
