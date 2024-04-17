import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategories from "./RestrauntCategories";
import Shimmer from "./Shimmer";
import { useParams, useLoaderData } from "react-router-dom";

const RestrauntMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resID} = useParams();
 
  //Create a custom Hook of useRestaurantMenu , don't concern how data is fetching
  const resInfo = useRestrauntMenu(resID);

  if (resInfo === null ) {
    return (
    <Shimmer />
  ) 
}

  const { name, cuisines, avgRating, costForTwoMessage, sla } =
   resInfo?.cards[2]?.card?.card?.info;
  

  const {itemCards} = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  // console.log(  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(itemCards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    category => 
    category.card?.["card"]?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
    // console.log(categories);
  
    return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
 
      <ul>
        {/* <li>{itemCards[1]?.card?.info?.name}</li>
        {itemCards?.map((item) => {
          return (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {<span>&#x20B9;</span>}
            {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price /100}
          </li>);
        })} */}
      </ul>

      {/* Categories accordion  */}

      {categories?.map((category) => (
         <RestrauntCategories data= {category?.card?.card}/>
        ))}

      
    </div>
  );
};

export default RestrauntMenu;



