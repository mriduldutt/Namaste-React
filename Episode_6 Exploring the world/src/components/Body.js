import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";




const Body = () => {
  
  // Local State Variable - Super Powerful Variable
   const [listofRestraunts, setListofRestraunts] = useState([]);

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
  //   }
  // ]; 

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   
    setListofRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    // console.log("listofRestraunts",listofRestraunts);
     fetchData();
  },[])



// it will show because aPI getting time to fetch data
  if(listofRestraunts.length === 0){
    return (
      <Shimmer/>
    )
  }


  return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            //Filter Logic here
            const filteredList = listofRestraunts.filter((resData) => resData.info.avgRating > 4.4)

            setListofRestraunts(filteredList)
           }}>Top Rated Restraunts</button>
  
        </div>
        <div className="restraunt-container">
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