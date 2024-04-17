import { CDN_URL } from "../utils/constant";

const stylecards = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, cuisines, avgRating, costForTwo, sla , cloudinaryImageId} = resData?.info;
    return (
      <div 
      className="m-4 p-4 w-[250px] rounded-lg" style={stylecards}>
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


  export default RestaurantCard;