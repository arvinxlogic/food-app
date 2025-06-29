import { Image_CDN } from "../utils/constant";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;
  const deliveryTime = resData?.info.sla.deliveryTime;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300" >
      <img
        className="rounded-lg"
        alt="res-logos"
        src={Image_CDN + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};
export default RestaurantCard;
