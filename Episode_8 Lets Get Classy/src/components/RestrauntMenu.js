import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resID} = useParams();
  console.log(resID);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resID);
    const json = await data.json();
    setResInfo(json.data);
  };


  if (resInfo === null ) {
    return (
    <Shimmer />
  ) 
}

  const { name, cuisines, avgRating, costForTwoMessage, sla } =
   resInfo?.cards[2]?.card?.card?.info;
  

  const {itemCards} = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[1]?.card?.info?.name}</li> */}
        {itemCards?.map((item) => {
          return (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {<span>&#x20B9;</span>}
            {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price /100}
          </li>);
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
