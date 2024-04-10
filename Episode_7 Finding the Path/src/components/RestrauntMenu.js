import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6394246&lng=77.3109035&restaurantId=55474&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
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
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>Briyani</li>
        <li>Cold Drinks</li>
      </ul>
    </div>
  );
};

export default RestrauntMenu;
