import { useEffect, useState } from "react";
import { MENU_API } from "./constant"; // Make sure this is a valid full API URL

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]); // Re-fetch if resId changes

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data); // Update state with menu data
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
