import React from "react";
import ReactDOM from "react-dom/client";
import Header from"./components/Header";
import Body from"./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";





const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>

      {/* <Footer /> */}
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,

    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
        
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/restraunts/:resID",  
        element: <RestrauntMenu/>
      }
    ],
    errorElement:<Error/>
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter} />);
