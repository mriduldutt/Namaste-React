import React, { useEffect, useState } from "react";
import RestaurantCard, { withisOpenLabel, withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmy from "./Shimmy";

const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Higher order Component take a component and returns a new component
  // const RestrauntCardVeg = withVegLabel(RestaurantCard);
  const RestrauntCardisOpen = withisOpenLabel(RestaurantCard);

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
    const RES_URL =
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6465998&lng=77.3395938&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(RES_URL);

    const json = await data.json();

    setListofRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
    <Shimmy />
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
          
          {/* IF RES IS OPEN THEN RENDER OPEN LABEL  ELSE WITH OUT LABEL   */}
            {/* {resData.info.isOpen ? (
              <RestrauntCardVeg resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )} */}



            {resData.info.isOpen == "true"? (
              <RestaurantCard resData={resData} />
              ) :
              (
                <RestrauntCardisOpen resData={resData}/>
              )}
        

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
