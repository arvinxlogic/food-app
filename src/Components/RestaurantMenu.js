import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get restaurant ID from URL
  const resInfo = useRestaurantMenu(resId); // Custom hook to fetch menu

  if (!resInfo) return <Shimmer />; // Show loading shimmer while fetching

  // Extract restaurant basic info
  const restaurantInfoCard = resInfo.cards.find(
    (c) => c?.card?.card?.info?.name
  );
  const { name, cuisines, costForTwoMessage } =
    restaurantInfoCard?.card?.card?.info || {};

  // Extract all menu item cards
  let itemCards = [];
  const groupedCard = resInfo.cards.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  );
  const regularCards =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  regularCards.forEach((card) => {
    if (card.card?.card?.itemCards) {
      itemCards.push(...card.card.card.itemCards);
    }
  });

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={`${item.card.info.id}-${index}`}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
