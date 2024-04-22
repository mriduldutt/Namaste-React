import { useEffect, useState,useContext } from "react";
import {LOGO_URL}  from "../utils/constant";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
   
   const [btnNameReact, setBtnNameReact] = useState("Sign-Up / Login");
   
   const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(userContext);
 
   // Subscrbing the Store using a selector
   const cartItems = useSelector((store)=> store.cart.items);
   console.log(cartItems);

    return (
      <div className="flex justify-between bg-orange-300 shadow-lg sm:bg-yellow-200" >
        <div className="logo-container">
          <img
            className="w-48"  src = {LOGO_URL}
            alt="Namaste Food"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4 ">
              <Link to = "/">Home</Link>
            </li>
            <li className="px-4">
              <Link to = "/about">About us</Link>
            </li>
            <li className="px-4 ">
              <Link to = "/contact">Contact us</Link>
            </li>
            <li className="px-4 ">
              <Link to = "/grocery">Grocery</Link>
            </li>
            <li className="px-4 ">
              Status: { onlineStatus? "✅" : "🔴"}
            </li>
            <li className="px-4 font-bold">
               <Link to = "/cart">Cart - ({cartItems.length})</Link> 
            </li>



            <button className="loginbtn" onClick={()=> {
              btnNameReact === "Log-Out"
              ?setBtnNameReact("Sign-Up / Login")
              :setBtnNameReact("Log-Out");
              }}>{btnNameReact}
            </button>
            
            <li className="px-4 ">{loggedInUser}</li>


          </ul>
        </div>
      </div>
    );
  };


  export default Header;