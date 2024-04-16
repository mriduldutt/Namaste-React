import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  
  // Local State Variable - Super Powerful Variable
   const [listofRestraunts, setListofRestraunts] = useState([]);
   const [filteredRestraunts, setFilteredRestraunts] = useState([]);

   const [searchText, setSearchText] = useState("");




  // Filter logic

  const filterlogic = () => {
    const List = filteredRestraunts.filter((resData) => resData.info.avgRating >= 4.3);
    setFilteredRestraunts(List);
  }


  useEffect(() => {
    // console.log("listofRestraunts",listofRestraunts);
     fetchData();
  },[]);


  const fetchData = async () => {

    const RES_URL="https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6465998&lng=77.3395938&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(RES_URL);

    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);   
    setListofRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };



  // Conditional Rendering - it will show because aPI getting time to fetch data
  /*
  if(listofRestraunts.length === 0){
    return (
      <Shimmer/>
    )
  }
  */
const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
  return(
    <h1>Looks like your are offline !! Please check your internet connection</h1>
  )
}

  // Filter the restraunt cards and update the UI
  //SearchText
  const BtnSearch = () =>{
    console.log(searchText);
    const filteredRestraunts = listofRestraunts.filter((resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestraunts(filteredRestraunts);
  }
  

  return listofRestraunts.length === 0 ? <Shimmer/> :(
      <div className="body">
        <div className="filter">
          <div className="search">
          <input type="text" name="search-box" className="search-box"  value={searchText}
            onChange={(e) => setSearchText(e.target.value)}/>
            <button onClick={BtnSearch} className="searchBtn">Search</button>
          </div>
         <button className="filter-btn" onClick={filterlogic}>Top Rated Restraunts</button>
        </div>
        <div className="restraunt-container">
          {
            filteredRestraunts.map((resData) => (
            <Link key={resData.info.id} to={`/restraunts/${resData.info.id}`}><RestaurantCard  resData = {resData}/></Link>
            ))
          }
          
        </div>
      </div>
    );
  };


  export default Body;