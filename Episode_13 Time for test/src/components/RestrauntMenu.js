import { useState } from "react";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategories from "./RestrauntCategories";
import Shimmer from "./Shimmer";
import { useParams, useLoaderData } from "react-router-dom";

const RestrauntMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();


  //Create a custom Hook of useRestaurantMenu , don't concern how data is fetching
  const resInfo = useRestrauntMenu(resID);
  
  const [showIndex, setShowIndex] = useState(null);


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <hr className="w-6/12 mx-auto" />
    
    
      {/* Categories accordion  */}
      {categories?.map((category,index) => (
       
      //  Controlled component
       <RestrauntCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true: false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}

    </div>
  );
};

export default RestrauntMenu;
