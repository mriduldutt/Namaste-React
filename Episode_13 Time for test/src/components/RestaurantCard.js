import { CDN_URL } from "../utils/constant";

const stylecards = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) => {
    const {resData} = props;

    const { name, cuisines, avgRating, costForTwo, sla , cloudinaryImageId} = resData?.info;
    return (
      <div 
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          src={CDN_URL+cloudinaryImageId}
          alt="image"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines.join(" , ")}</h5>
        <h4>{avgRating} Stars </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins</h4>
        <button>Order Now</button>
      </div>
    );
  };


  // Higher order component which has veg label
  // input - Restraunt Card ==> output - Restraunt Card with veg label

  export const withVegLabel = (RestaurantCard) =>{

    return(props) =>{
      return(
        <div>
          <label className="absolute bg-green-500 text-white ml-4 p-2 rounded-lg text-sm">Veg Only</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }


  export default RestaurantCard;