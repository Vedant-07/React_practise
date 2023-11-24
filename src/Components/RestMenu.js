import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuItemCard from "./MenuItemCard";

const RestMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const swiggy_api2 = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const data = await fetch(swiggy_api2);
    const json = await data.json();
    setMenu(json);
    setLoading(false);
  };

  const resMenu =
    menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="animate-pulse bg-gray-200 p-4 rounded-md space-y-4">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          {/* Add more shimmer lines based on your needs */}
        </div>
      ) : resMenu == null ? (
        <div className="text-center text-lg font-semibold">Not listed</div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Menu for Restaurant
          </h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resMenu.map((item, index) => (
              <MenuItemCard key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestMenu;
