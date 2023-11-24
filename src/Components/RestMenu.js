import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const swiggy_api2 =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3071588&lng=73.1812187&restaurantId=94892&catalog_qa=undefined&submitAction=ENTER";
    const data = await fetch(swiggy_api2);
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      {console.log("here ia hrer")}
      <div>RestMenu{resId}</div>;
    </>
  );
};

export default RestMenu;
