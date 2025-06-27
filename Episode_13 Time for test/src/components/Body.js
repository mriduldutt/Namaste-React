import React, { useEffect, useState } from "react";
import RestaurantCard, { WithVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_URL } from "../utils/constant";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Higher order Component take a component and returns a new component
  const RestrauntCardVeg = WithVegLabel(RestaurantCard);

  // Filter logic
  const filterlogic = () => {
    const List = filteredRestraunts.filter(
      (resData) => resData.info.avgRating >= 4.3
    );
    setFilteredRestraunts(List);
  };

  // console.log("listofRestraunts", listofRestraunts);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_URL);
      const json = await data.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      
      setListofRestraunts(resData);
      setFilteredRestraunts(resData);
    } catch (err) {
      console.log(err);
    }
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
    const filteredRestraunts = listofRestraunts.filter((resData) =>
      resData.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestraunts(filteredRestraunts);
  };

  return listofRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input data-testid="search-box"
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
