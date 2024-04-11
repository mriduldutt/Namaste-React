import { useEffect, useState } from "react";
import {LOGO_URL}  from "../utils/constant";
import { Link} from "react-router-dom";


const Header = () => {
   
   const [btnNameReact, setBtnNameReact] = useState("Sign-Up / Login");
   console.log(`Header Rendering....`);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src = {LOGO_URL}
            alt="Namaste Food"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About us</Link>
            </li>
            <li>
              <Link to = "/contact">Contact us</Link>
            </li>
            <li>Cart</li>
            <button className="loginbtn" onClick={()=> {
              btnNameReact === "Log-Out"
              ?setBtnNameReact("Sign-Up / Login")
              :setBtnNameReact("Log-Out");
              }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;