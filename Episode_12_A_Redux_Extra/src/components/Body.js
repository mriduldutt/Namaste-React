import React, { useEffect, useState } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestrauntList, setRestrauntList } from "../utils/restrauntSlice";
import { fetchThunkData } from "../utils/restrauntSlice_thunk";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  // Dispatching an action 
  const dispatch = useDispatch();
  const setListofRestrauntss = useSelector((store) => store.restraunts.list);
  const shimmer = useSelector((store) => store.restraunts.isloading);
  //console.log(setListofRestrauntss);
  console.log("shimmer", shimmer);


  // Higher order Component take a component and returns a new component
  const RestrauntCardVeg = withVegLabel(RestaurantCard);

  // Filter logic

  const filterlogic = () => {
    const List = filteredRestraunts.filter(
      (resData) => resData.info.avgRating >= 4.3
    );
    setFilteredRestraunts(List);
  };

  // console.log("listofRestraunts", listofRestraunts);
  useEffect(() => {
    // dispatch(fetchRestrauntList());
    // fetchData();
     dispatch(fetchThunkData());
    setFilteredRestraunts(setListofRestrauntss);
    // setListofRestraunts(setListofRestrauntss);
  }, []);

  const fetchData = async () => {
    const RES_URL =
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6465998&lng=77.3395938&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(RES_URL);

    const json = await data.json();
    // console.log(json);
    // setListofRestraunts(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setFilteredRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );


    // dispatch(setRestrauntList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
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
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like your are offline !! Please check your internet connection
      </h1>
    );
  }

  // Filter the restraunt cards and update the UI
  //SearchText
  const BtnSearch = () => {
    console.log(searchText);
    const filteredRestraunts = setListofRestrauntss.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestraunts(filteredRestraunts);
  };

  return setListofRestrauntss.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            name="search-box"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="bg-green-100 px-4 py-2 m-4 rounded-lg"
            onClick={BtnSearch}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="bg-green-100 px-4 py-2 rounded-lg"
            onClick={filterlogic}
          >
            Top Rated Restraunts
          </button>

          
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestraunts.map((resData) => (
          <Link key={resData.info.id} to={`/restraunts/${resData.info.id}`}>
          
          {/* IF VEG IS TRUE THEN RENDER VEG LABEL  ELSE WITH OUT LABEL   */}
            {resData.info.veg ? (
              <RestrauntCardVeg resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}


          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
