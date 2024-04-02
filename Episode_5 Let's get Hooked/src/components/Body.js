import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";




const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restraunt-container">
          {/* // Restraunt Card */}
          {/* <RestaurantCard resname="Restraunt Name" cusines="Restraunt Cusines"/> */}
          {/* <RestaurantCard resData = {resList[0]}/> */}
          
          {
            resList.map((resData) => (
            <RestaurantCard key={resData.info.id} resData = {resData}/>
            ))
          }
          
        </div>
      </div>
    );
  };


  export default Body;