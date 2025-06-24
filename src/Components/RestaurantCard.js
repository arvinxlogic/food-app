import {Image_CDN} from '../utils/constant'
const RestaurantCard = ({resData}) =>{
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    const deliveryTime = resData?.info.sla.deliveryTime;

    return(
        <div className="res-card" style ={{backgroundColor:"#f0f0f5"}}>
            <img className="res-logo" alt="res-logos" src={ Image_CDN + cloudinaryImageId} />

        <h3>{name}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwo}</h3>
        <h3>{deliveryTime} minutes</h3>
        </div>
    );
};
export default RestaurantCard;

