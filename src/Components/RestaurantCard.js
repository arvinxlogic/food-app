// RestaurantCard.js
import { Image_CDN } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const deliveryTime = resData?.info.sla.deliveryTime;

  return (
    <div className="relative m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300 shadow-md transition">
      <img
        className="rounded-lg"
        alt="res-logos"
        src={Image_CDN + cloudinaryImageId}
      />

      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{avgRating} ⭐</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

// Higher Order Component for adding 'Promoted' label
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded shadow-md z-10">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
