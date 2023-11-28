import React from "react";
import { Link } from "react-router-dom";

const ResCard = ({
  id,
  name,
  rating,
  cuisines,
  place,
  imgId,
  discount_info,
}) => {
  return (
    <div className="  m-5 bg-white shadow-md rounded-lg flex flex-col w-80 transition-all hover:scale-90">
      {/* Image Container */}
      <div className="relative">
        <img
          className="object-cover w-full h-40 rounded-t-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}
          alt="Food"
        />

        {/* Discount Info Overlay */}
        {discount_info && (
          <div className="font-extrabold absolute  bottom-0  text-white tracking-tighter  text-3xl uppercase p-2">
            {discount_info.header} {discount_info.subHeader}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-2 truncate">{name}</h1>
        <span className="text-sm">⭐ {rating}</span>
        <p className="text-sm mt-1 truncate">{cuisines.join(",")}</p>
        <p className="text-sm truncate">{place}</p>
      </div>
    </div>
  );
};

export default ResCard;
