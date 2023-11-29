import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const [menu, setMenu] = useState();
  const [shimmerMenu, setShimmerMenu] = useState(false);
  //const [filtermenu,usefilter]
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const swiggy_api2 =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=" +
      resId +
      "&catalog_qa=undefined&submitAction=ENTER";
    const data = await fetch(swiggy_api2);
    const json = await data.json();
    console.log("from here");
    console.log(json);

    const menuData =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards || [];

    // Filter and set the menu in one line
    console.log(Array.isArray(menuData));
    setMenu(
      menuData.filter(
        (men) =>
          men.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    /* setMenu(
      [...menu].filter((men) => {
        men.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      }) */
    setShimmerMenu(true);
    console.log("here part 2");
    console.log(menu);
  };

  return (
    <>
      {!shimmerMenu ? (
        <h1>Shimmer for menu here</h1>
      ) : (
        <div>
          {menu.map((item, key) => (
            <div className="text-center" key={key}>
              {item.card.card.title}
              {item.card.card.itemCards.map((itx, key) => (
                <div key={itx.card.info.id}>
                  {" "}
                  Item:{itx.card.info.name} price:
                  {itx.card.info.price
                    ? itx.card.info.price / 100
                    : itx.card.info.defaultPrice / 100}{" "}
                </div>
              ))}
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RestMenu;
