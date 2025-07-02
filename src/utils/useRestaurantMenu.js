import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);

        // Try direct API first
        let response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
        );

        // If fails, try with CORS proxy
        if (!response.ok) {
          response = await fetch(
            `https://api.allorigins.win/raw?url=${encodeURIComponent(
              `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
            )}`
          );
        }

        const json = await response.json();
        setResInfo(json.data || json);
        setError(null);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
        setResInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [resId]);

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
