import React, { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const  Body2=() => {
  const [listofRestraunts, setListofRestraunts] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtr = listofRestraunts.filter(
              (resData) => resData.info.avgRating > 4.4
            )

            setListofRestraunts(filtr);
          }}>
          Filtered
        </button>
      </div>

      <div className="restraunt-container">
          {
            listofRestraunts.map((resData)=>{
                return(<RestaurantCard key={resData.info.id} resData = {resData}/>);
            })
          }
          
        </div>
    </div>
  );
}

export default Body2;
