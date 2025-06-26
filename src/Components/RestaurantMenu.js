import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (!resInfo) return <Shimmer />;

  // Dynamically find the restaurant info
  const restaurantInfoCard = resInfo.cards.find((c) =>
    c?.card?.card?.info?.name
  );
  const { name, cuisines, costForTwoMessage } =
    restaurantInfoCard?.card?.card?.info || {};

  // Dynamically extract itemCards
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
