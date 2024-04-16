import { useEffect, useState } from "react";
import {LOGO_URL}  from "../utils/constant";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
   
   const [btnNameReact, setBtnNameReact] = useState("Sign-Up / Login");
   const onlineStatus = useOnlineStatus();

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
            <li>
              <Link to = "/grocery">Grocery</Link>
            </li>
            <li>
              Status: { onlineStatus? "✅" : "🔴"}
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