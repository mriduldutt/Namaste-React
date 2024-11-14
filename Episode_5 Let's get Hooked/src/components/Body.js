import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";




const Body = () => {
  
  // Local State Variable - Super Powerful Variable
   const [listofRestraunts, setListofRestraunts] = useState(resList);

   const topRatedRestraunt = () => {
    //Filter Logic here
    const filteredList = listofRestraunts.filter(
      (resData) => resData.info.avgRating > 4.4)

    setListofRestraunts(filteredList)
   }

  // // Normal JS Variable
  // let listofRestrauntsjs = [
  //   {
  //     "info": {
  //       "id": "435682",
  //       "name": "Pizza Hut",
  //       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       "locality": "Adarsh Bhawan Chbs",
  //       "areaName": "Punjabi Bagh",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Pizzas"
  //       ],
  //       "avgRating": 4.4,
  //       "parentId": "721",
  //       "avgRatingString": "4.4",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     },

  //   },
  //   {
  //     "info": {
  //       "id": "435681",
  //       "name": "Dominos",
  //       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       "locality": "Adarsh Bhawan Chbs",
  //       "areaName": "Punjabi Bagh",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Pizzas"
  //       ],
  //       "avgRating": 3.8,
  //       "parentId": "721",
  //       "avgRatingString": "3.8",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     },

  //   },
  //   {
  //     "info": {
  //       "id": "435683",
  //       "name": "MCD",
  //       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       "locality": "Adarsh Bhawan Chbs",
  //       "areaName": "Punjabi Bagh",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Pizzas"
  //       ],
  //       "avgRating": 4.1,
  //       "parentId": "721",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "1K+",
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     },

  //   }
  // ]; 
  
  return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={topRatedRestraunt}>
            Top Rated Restraunts
          </button>
        </div>
        <div className="restraunt-container">
          {/* // Restraunt Card */}
          {/* <RestaurantCard resname="Restraunt Name" cusines="Restraunt Cusines"/> */}
          {/* <RestaurantCard resData = {resList[0]}/> */}
          
          {
            listofRestraunts.map((resData) => (
            <RestaurantCard key={resData.info.id} resData = {resData}/>
            ))
          }
          
        </div>
      </div>
    );
  };


  export default Body;