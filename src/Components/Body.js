import React from "react";
import ResContainer from "./ResContainer";
const Body = () => {
  return (
    <div className="py-4 bg-blue-200">
      {/*<div className="flex py-6 justify-center space-x-3">
        <input
          className="w-1/4 p-2 border focus:border-blue-400 transition  rounded-lg -mx-11 h-10"
          type="text"
          name=""
          placeholder="  Search for  your restaurant here"
          id=""
        />
        <button className="">🔍</button>
          */}
      <div className="flex py-6 justify-center space-x-3">
        <input
          className="w-1/2 md:w-1/4 p-2 border focus:border-blue-400 transition rounded-lg md:rounded-lg h-10"
          type="text"
          name=""
          placeholder="Search for your restaurant here"
          id=""
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg h-10">
          Search
        </button>
      </div>

      <div className="">
        <ResContainer />
      </div>
    </div>
  );
};

export default Body;
