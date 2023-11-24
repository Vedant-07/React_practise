import React from "react";

const MenuItemCard = ({ item }) => {
  const imgsrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`;

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center">
      <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
      <p className="text-lg font-semibold">
        ₹{(item.card.info.price / 100).toFixed(2)}
      </p>
      <div className="my-4 w-1/2">
        <img
          src={imgsrc}
          alt={item.card.info.cloudinaryImageId}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-2">
          +
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">
          -
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
