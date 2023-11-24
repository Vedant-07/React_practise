// Body.js
import React, { useState } from "react";
import ResContainer from "./ResContainer";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  /* const handleSearch = () => {
    // Filter the restaurants based on the search text
    // Perform any filtering logic here before updating searchText state
    console.log("Search Text:", searchText);
  }; */

  return (
    <div className="py-4 bg-blue-200">
      <div className="flex py-6 justify-center space-x-3">
        <input
          className="w-1/2 md:w-1/4 p-2 border focus:border-blue-400 transition rounded-lg md:rounded-lg h-10"
          type="text"
          placeholder="Search for your restaurant here"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg h-10"
          // onClick={handleSearch} 
        >
          Search
        </button> */}
      </div>

      <div className="">
        {/* Pass the searchText state as a prop to ResContainer */}
        <ResContainer search={searchText} />
      </div>
    </div>
  );
};

export default Body;

/* import React, { useState } from "react";
import ResContainer from "./ResContainer";
const Body = () => {
  const [searchText, setSearchText] = useState("");

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
          }
      <div className="flex py-6 justify-center space-x-3">
        <input
          className="w-1/2 md:w-1/4 p-2 border focus:border-blue-400 transition rounded-lg md:rounded-lg h-10"
          type="text"
          placeholder="Search for your restaurant here"
          onChange={(e) => {
            setSearchText(e);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg h-10"
          onClick={(e) => filterRest()}
        >
          Search
        </button>
      </div>

      <div className="">
        <ResContainer seach={searchText} />
      </div>
    </div>
  );
};

export default Body; */
