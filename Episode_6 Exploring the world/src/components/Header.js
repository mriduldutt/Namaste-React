import { useState } from "react";
import {LOGO_URL}  from "../utils/constant";

const Header = () => {
   
   const [btnNameReact, setBtnNameReact] = useState("Sign-Up / Login");

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
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
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